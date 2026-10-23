import { z } from "zod";
import { getCurrentUser } from "@/lib/auth/session";
import { getQuiz } from "@/data/quizzes";
import { errorResponse, readJson } from "@/lib/http";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  chapterSlug: z.string().min(1),
  answers: z.array(z.number().int().min(0).max(20)).max(20),
});

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return errorResponse("Please sign in to save your quiz score.", 401);

  const parsedBody = await readJson(request);
  if (parsedBody.response) return parsedBody.response;
  const parsed = schema.safeParse(parsedBody.data);
  if (!parsed.success) return errorResponse("Quiz answers are invalid.", 400);
  const quiz = getQuiz(parsed.data.chapterSlug);
  if (!quiz) return errorResponse("Quiz not found.", 404);
  if (parsed.data.answers.length !== quiz.questions.length) {
    return errorResponse("Please answer every question before submitting.", 400);
  }

  const score = quiz.questions.reduce(
    (total, question, index) => total + (question.answerIndex === parsed.data.answers[index] ? 1 : 0),
    0,
  );
  const attempt = await prisma.quizAttempt.create({
    data: { userId: user.id, chapterSlug: quiz.chapterSlug, score, total: quiz.questions.length },
    select: { id: true, score: true, total: true, createdAt: true },
  });
  return Response.json({
    attempt,
    explanations: quiz.questions.map((question) => question.explanation),
  });
}
