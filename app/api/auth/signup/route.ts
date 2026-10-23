import bcrypt from "bcryptjs";
import { z } from "zod";
import { CODE_LIFETIME_MS, generateVerificationCode, hashVerificationCode, sendVerificationEmail } from "@/lib/auth/verification";
import { errorResponse, readJson } from "@/lib/http";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254).refine(
    (email) => email.toLowerCase().endsWith("@gmail.com"),
    "Please use a Gmail address.",
  ),
  password: z.string().min(8).max(128),
  confirmPassword: z.string(),
}).refine((value) => value.password === value.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match.",
});

export async function POST(request: Request) {
  const parsedBody = await readJson(request);
  if (parsedBody.response) return parsedBody.response;
  const parsed = schema.safeParse(parsedBody.data);
  if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Please check your details.", 400);

  const name = parsed.data.name;
  const email = parsed.data.email.toLowerCase();
  const existing = await prisma.user.findUnique({ where: { email }, select: { id: true } });
  if (existing) return errorResponse("An account with this email already exists.", 409);

  const recentChallenges = await prisma.verificationChallenge.count({
    where: { email, createdAt: { gte: new Date(Date.now() - 15 * 60 * 1000) } },
  });
  if (recentChallenges >= 3) return errorResponse("Too many verification requests. Please try again later.", 429);

  const passwordHash = await bcrypt.hash(parsed.data.password, 12);
  const code = generateVerificationCode();
  const expiresAt = new Date(Date.now() + CODE_LIFETIME_MS);
  const challenge = await prisma.$transaction(async (transaction) => {
    await transaction.verificationChallenge.updateMany({
      where: { email, consumedAt: null },
      data: { consumedAt: new Date() },
    });
    const created = await transaction.verificationChallenge.create({
      data: {
        email,
        pendingName: name,
        pendingPasswordHash: passwordHash,
        codeHash: "pending",
        expiresAt,
      },
    });
    return transaction.verificationChallenge.update({
      where: { id: created.id },
      data: { codeHash: hashVerificationCode(created.id, code) },
      select: { id: true },
    });
  });

  await sendVerificationEmail(email, code);
  return Response.json({ challengeId: challenge.id, message: "Verification code sent." }, { status: 202 });
}
