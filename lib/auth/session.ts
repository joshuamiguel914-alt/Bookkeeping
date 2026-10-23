import { SignJWT, errors as joseErrors, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const cookieName = "bookkeeping-session";
const maxAge = 60 * 60 * 24 * 7;

function sessionKey(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("SESSION_SECRET must contain at least 32 characters.");
  return new TextEncoder().encode(secret);
}

export async function createSession(userId: string): Promise<void> {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime(`${maxAge}s`)
    .sign(sessionKey());

  const cookieStore = await cookies();
  cookieStore.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
}

export async function getCurrentUser() {
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return null;

  let userId: string | undefined;
  try {
    const { payload } = await jwtVerify(token, sessionKey());
    userId = payload.sub;
  } catch (error) {
    if (error instanceof joseErrors.JOSEError) return null;
    throw error;
  }
  if (!userId) return null;

  return prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, emailVerified: true },
  });
}
