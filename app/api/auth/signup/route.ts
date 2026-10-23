import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { createSession } from "@/lib/auth/session";
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

  const passwordHash = await bcrypt.hash(parsed.data.password, 12);
  try {
    const user = await prisma.user.create({
      data: { name, email, passwordHash },
      select: { id: true, name: true },
    });

    await createSession(user.id);
    return Response.json({ message: "Account created.", user }, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return errorResponse("An account with this email already exists.", 409);
    }
    throw error;
  }
}
