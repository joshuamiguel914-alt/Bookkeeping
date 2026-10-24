import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { QuizForm } from "@/components/QuizForm";
import { chapters, getChapter } from "@/data/content";
import { getQuiz } from "@/data/quizzes";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ChapterQuizPage({ params }: { params: Promise<{ chapterSlug: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const { chapterSlug } = await params;
  const chapter = getChapter(chapterSlug);
  const quiz = getQuiz(chapterSlug);
  if (!chapter || !quiz) notFound();
  const attemptsUsed = await prisma.quizAttempt.count({ where: { userId: user.id, chapterSlug } });
  const chapterIndex = chapters.findIndex((item) => item.slug === chapterSlug);
  const nextChapter = chapters[chapterIndex + 1];

  return <div className="page-shell quiz-page-shell"><Link className="back-link" href="/quiz">← All chapter quizzes</Link><QuizForm quiz={quiz} title={chapter.title} attemptsUsed={attemptsUsed} nextLessonHref={nextChapter ? `/modules/${nextChapter.slug}` : "/modules"} nextLessonTitle={nextChapter?.title} /></div>;
}
