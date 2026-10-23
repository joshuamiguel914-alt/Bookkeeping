import bcrypt from "bcryptjs";
import { z } from "zod";
import { createSession } from "@/lib/auth/session";
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

  await createSession(user.id);
  return Response.json({ message: "Signed in.", user: { id: user.id, name: user.name } });
}
