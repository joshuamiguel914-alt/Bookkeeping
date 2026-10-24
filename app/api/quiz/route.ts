import { z } from "zod";
import { Prisma } from "@prisma/client";
import { getCurrentUser } from "@/lib/auth/session";
import { getQuiz, MAX_QUIZ_ATTEMPTS } from "@/data/quizzes";
import { errorResponse, readJson } from "@/lib/http";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  chapterSlug: z.string().min(1),
  answers: z.array(z.string().max(300)).max(20),
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

  const answers = parsed.data.answers;
  const invalidAnswer = quiz.questions.some((question, index) => {
    const answer = answers[index];
    if (!answer.trim()) return true;
    if (question.type === "fill-in-the-blank") return false;
    const answerIndex = Number(answer);
    return !Number.isInteger(answerIndex) || answerIndex < 0 || answerIndex >= question.options.length;
  });
  if (invalidAnswer) return errorResponse("Quiz answers are invalid.", 400);

  const score = quiz.questions.reduce((total, question, index) => {
    const answer = answers[index];
    const isCorrect = question.type === "fill-in-the-blank"
      ? question.acceptedAnswers.some((accepted) => accepted.trim().toLocaleLowerCase() === answer.trim().toLocaleLowerCase())
      : question.answerIndex === Number(answer);
    return total + (isCorrect ? 1 : 0);
  }, 0);

  let attempt: { id: string; score: number; total: number; createdAt: Date } | null;
  try {
    attempt = await prisma.$transaction(async (transaction) => {
      const attemptsUsed = await transaction.quizAttempt.count({
        where: { userId: user.id, chapterSlug: quiz.chapterSlug },
      });
      if (attemptsUsed >= MAX_QUIZ_ATTEMPTS) return null;

      return transaction.quizAttempt.create({
        data: { userId: user.id, chapterSlug: quiz.chapterSlug, score, total: quiz.questions.length },
        select: { id: true, score: true, total: true, createdAt: true },
      });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2034") {
      return errorResponse("A concurrent submission changed the attempt count. Reload the quiz and try again.", 409);
    }
    throw error;
  }
  if (!attempt) return errorResponse(`You have used all ${MAX_QUIZ_ATTEMPTS} attempts for this chapter.`, 409);

  return Response.json({
    attempt,
    explanations: quiz.questions.map((question) => question.explanation),
  });
}
