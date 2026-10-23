import bcrypt from "bcryptjs";
import { z } from "zod";
import { CODE_LIFETIME_MS, generateVerificationCode, hashVerificationCode, sendVerificationEmail } from "@/lib/auth/verification";
import { errorResponse, readJson } from "@/lib/http";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const schema = z.object({
  identifier: z.string().trim().min(1).max(254),
  password: z.string().min(1).max(128),
});

export async function POST(request: Request) {
  const parsedBody = await readJson(request);
  if (parsedBody.response) return parsedBody.response;
  const parsed = schema.safeParse(parsedBody.data);
  if (!parsed.success) return errorResponse("Enter your account ID or email and password.", 400);
  const identifier = parsed.data.identifier;
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier.toLowerCase() },
        { id: identifier },
      ],
    },
  });
  if (!user || !(await bcrypt.compare(parsed.data.password, user.passwordHash))) {
    return errorResponse("The account ID/email or password is incorrect.", 401);
  }

  const recentChallenges = await prisma.verificationChallenge.count({
    where: { email: user.email, createdAt: { gte: new Date(Date.now() - 15 * 60 * 1000) } },
  });
  if (recentChallenges >= 3) return errorResponse("Too many verification requests. Please try again later.", 429);

  const code = generateVerificationCode();
  const challenge = await prisma.$transaction(async (transaction) => {
    await transaction.verificationChallenge.updateMany({
      where: { email: user.email, consumedAt: null },
      data: { consumedAt: new Date() },
    });
    const created = await transaction.verificationChallenge.create({
      data: {
        email: user.email,
        userId: user.id,
        codeHash: "pending",
        expiresAt: new Date(Date.now() + CODE_LIFETIME_MS),
      },
    });
    return transaction.verificationChallenge.update({
      where: { id: created.id },
      data: { codeHash: hashVerificationCode(created.id, code) },
      select: { id: true },
    });
  });

  await sendVerificationEmail(user.email, code);
  return Response.json({ challengeId: challenge.id, message: "Verification code sent." }, { status: 202 });
}
