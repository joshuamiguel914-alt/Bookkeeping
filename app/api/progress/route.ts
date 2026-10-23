import { z } from "zod";
import { getCurrentUser } from "@/lib/auth/session";
import { chapters } from "@/data/content";
import { errorResponse, readJson } from "@/lib/http";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  chapterSlug: z.string().min(1),
  completed: z.boolean(),
});

export async function PUT(request: Request) {
  const user = await getCurrentUser();
  if (!user) return errorResponse("Please sign in to save your progress.", 401);

  const parsedBody = await readJson(request);
  if (parsedBody.response) return parsedBody.response;
  const parsed = schema.safeParse(parsedBody.data);
  if (!parsed.success) return errorResponse("Progress update is invalid.", 400);
  if (!chapters.some((chapter) => chapter.slug === parsed.data.chapterSlug)) {
    return errorResponse("Chapter not found.", 404);
  }

  await prisma.chapterProgress.upsert({
    where: { userId_chapterSlug: { userId: user.id, chapterSlug: parsed.data.chapterSlug } },
    create: { userId: user.id, chapterSlug: parsed.data.chapterSlug, completed: parsed.data.completed },
    update: { completed: parsed.data.completed },
  });
  return Response.json({ message: "Progress saved." });
}
