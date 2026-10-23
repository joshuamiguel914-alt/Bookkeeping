import { createHmac, randomInt } from "node:crypto";
import nodemailer from "nodemailer";

export const CODE_LIFETIME_MS = 5 * 60 * 1000;
export const MAX_CODE_ATTEMPTS = 5;
export const MAX_RESENDS = 3;

function verificationSecret(): string {
  const secret = process.env.VERIFICATION_SECRET;
  if (!secret || secret.length < 32) throw new Error("VERIFICATION_SECRET must contain at least 32 characters.");
  return secret;
}

export function generateVerificationCode(): string {
  return randomInt(0, 10_000).toString().padStart(4, "0");
}

export function hashVerificationCode(challengeId: string, code: string): string {
  return createHmac("sha256", verificationSecret()).update(`${challengeId}:${code}`).digest("hex");
}

export async function sendVerificationEmail(email: string, code: string): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM) {
    throw new Error("SMTP configuration is incomplete. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, and SMTP_FROM.");
  }

  const port = Number(SMTP_PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65_535) throw new Error("SMTP_PORT must be a valid port number.");
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  await transporter.sendMail({
    from: SMTP_FROM,
    to: email,
    subject: "Your bookkeeping learning guide verification code",
    text: `Your verification code is ${code}. It expires in 5 minutes. If you did not request this code, you can ignore this email.`,
    html: `<p>Your verification code is <strong style="font-size:24px;letter-spacing:6px">${code}</strong>.</p><p>It expires in 5 minutes. If you did not request this code, you can ignore this email.</p>`,
  });
}
