import { z } from "zod";
import { CODE_LIFETIME_MS, generateVerificationCode, hashVerificationCode, MAX_RESENDS, sendVerificationEmail } from "@/lib/auth/verification";
import { errorResponse, readJson } from "@/lib/http";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const schema = z.object({ challengeId: z.string().min(1).max(64) });

export async function POST(request: Request) {
  const parsedBody = await readJson(request);
  if (parsedBody.response) return parsedBody.response;
  const parsed = schema.safeParse(parsedBody.data);
  if (!parsed.success) return errorResponse("Verification request is invalid.", 400);

  const challenge = await prisma.verificationChallenge.findUnique({ where: { id: parsed.data.challengeId } });
  if (!challenge || challenge.consumedAt || challenge.expiresAt <= new Date()) {
    return errorResponse("This verification request has expired. Start again.", 410);
  }
  if (challenge.resends >= MAX_RESENDS) return errorResponse("You have reached the resend limit. Start again later.", 429);

  const code = generateVerificationCode();
  const updated = await prisma.verificationChallenge.updateMany({
    where: {
      id: challenge.id,
      codeHash: challenge.codeHash,
      resends: challenge.resends,
      consumedAt: null,
      expiresAt: { gt: new Date() },
    },
    data: {
      codeHash: hashVerificationCode(challenge.id, code),
      expiresAt: new Date(Date.now() + CODE_LIFETIME_MS),
      attempts: 0,
      resends: { increment: 1 },
    },
  });
  if (updated.count !== 1) return errorResponse("This verification request has changed or expired. Try again.", 409);
  await sendVerificationEmail(challenge.email, code);
  return Response.json({ message: "A new verification code was sent." });
}
