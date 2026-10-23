import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { QuizForm } from "@/components/QuizForm";
import { getChapter } from "@/data/content";
import { getQuiz } from "@/data/quizzes";
import { getCurrentUser } from "@/lib/auth/session";

export default async function ChapterQuizPage({ params }: { params: Promise<{ chapterSlug: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const { chapterSlug } = await params;
  const chapter = getChapter(chapterSlug);
  const quiz = getQuiz(chapterSlug);
  if (!chapter || !quiz) notFound();

  return <div className="page-shell quiz-page-shell"><Link className="back-link" href="/quiz">← All chapter quizzes</Link><QuizForm quiz={quiz} title={chapter.title} /></div>;
}
