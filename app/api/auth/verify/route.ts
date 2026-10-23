import { Prisma } from "@prisma/client";
import { timingSafeEqual } from "node:crypto";
import { z } from "zod";
import { createSession } from "@/lib/auth/session";
import { hashVerificationCode, MAX_CODE_ATTEMPTS } from "@/lib/auth/verification";
import { errorResponse, readJson } from "@/lib/http";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const schema = z.object({
  challengeId: z.string().min(1).max(64),
  code: z.string().regex(/^\d{4}$/, "Enter the four-digit code."),
});

export async function POST(request: Request) {
  const parsedBody = await readJson(request);
  if (parsedBody.response) return parsedBody.response;
  const parsed = schema.safeParse(parsedBody.data);
  if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Enter the four-digit code.", 400);

  let result: { error: string; status: number } | { user: { id: string; name: string } };
  try {
    result = await prisma.$transaction(async (transaction) => {
      const challenge = await transaction.verificationChallenge.findUnique({
        where: { id: parsed.data.challengeId },
      });
      if (!challenge || challenge.consumedAt || challenge.expiresAt <= new Date()) {
        return { error: "This code has expired. Request a new one.", status: 410 };
      }
      if (challenge.attempts >= MAX_CODE_ATTEMPTS) {
        return { error: "Too many incorrect attempts. Request a new code.", status: 429 };
      }

      const expectedHash = hashVerificationCode(challenge.id, parsed.data.code);
      const actualBytes = Buffer.from(challenge.codeHash, "hex");
      const expectedBytes = Buffer.from(expectedHash, "hex");
      const hashesMatch = actualBytes.length === expectedBytes.length && timingSafeEqual(actualBytes, expectedBytes);
      if (!hashesMatch) {
        const attempts = challenge.attempts + 1;
        const updated = await transaction.verificationChallenge.updateMany({
          where: {
            id: challenge.id,
            codeHash: challenge.codeHash,
            attempts: challenge.attempts,
            consumedAt: null,
            expiresAt: { gt: new Date() },
          },
          data: {
            attempts,
            ...(attempts >= MAX_CODE_ATTEMPTS ? { consumedAt: new Date() } : {}),
          },
        });
        if (updated.count !== 1) {
          return { error: "This code changed or expired. Request a new one.", status: 409 };
        }
        return {
          error: attempts >= MAX_CODE_ATTEMPTS ? "Too many incorrect attempts. Request a new code." : "That code is incorrect.",
          status: attempts >= MAX_CODE_ATTEMPTS ? 429 : 400,
        };
      }

      const consumed = await transaction.verificationChallenge.updateMany({
        where: {
          id: challenge.id,
          codeHash: challenge.codeHash,
          attempts: challenge.attempts,
          consumedAt: null,
          expiresAt: { gt: new Date() },
        },
        data: { consumedAt: new Date() },
      });
      if (consumed.count !== 1) {
        return { error: "This code changed or expired. Request a new one.", status: 409 };
      }

      if (challenge.pendingName && challenge.pendingPasswordHash) {
        const user = await transaction.user.create({
          data: {
            name: challenge.pendingName,
            email: challenge.email,
            passwordHash: challenge.pendingPasswordHash,
            emailVerified: new Date(),
          },
          select: { id: true, name: true },
        });
        return { user };
      }
      if (challenge.userId) {
        const user = await transaction.user.findUnique({
          where: { id: challenge.userId },
          select: { id: true, name: true },
        });
        return user ? { user } : { error: "Account not found. Please sign in again.", status: 404 };
      }
      return { error: "Verification request is invalid.", status: 400 };
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return errorResponse("An account with this email has already been created.", 409);
    }
    throw error;
  }

  if ("error" in result) return errorResponse(result.error, result.status);
  await createSession(result.user.id);
  return Response.json({ message: "Verified successfully.", user: result.user });
}
