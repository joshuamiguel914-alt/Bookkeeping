import Link from "next/link";
import { redirect } from "next/navigation";
import { chapters } from "@/data/content";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function QuizIndexPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const attempts = await prisma.quizAttempt.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });
  const countByChapter = new Map<string, number>();
  for (const attempt of attempts) countByChapter.set(attempt.chapterSlug, (countByChapter.get(attempt.chapterSlug) ?? 0) + 1);

  return <div className="page-shell">
    <section className="page-intro"><span className="eyebrow">PRACTICE MAKES IT CLICK</span><h1>Ready for a<br /><span>little brain stretch?</span></h1><p>Quick chapter check-ins with instant feedback. Every result is saved so you can see how far you’ve come.</p></section>
    <div className="quiz-chapter-grid">{chapters.map((chapter) => <Link className="quiz-chapter-card" key={chapter.slug} href={`/quiz/${chapter.slug}`}><span className="chapter-number">{String(chapter.number).padStart(2, "0")}</span><span><strong>{chapter.title}</strong><small>{countByChapter.get(chapter.slug) ?? 0} attempts</small></span><span className="quiz-arrow">→</span></Link>)}</div>
    <section className="panel quiz-history"><div className="section-heading"><div><span className="eyebrow">YOUR PRACTICE LOG</span><h2>Recent attempts</h2></div></div>
      {attempts.length ? <ul className="score-list">{attempts.slice(0, 8).map((attempt) => <li key={attempt.id}><span className="score-medal">✦</span><span><strong>{chapters.find((chapter) => chapter.slug === attempt.chapterSlug)?.title}</strong><small>{attempt.createdAt.toLocaleString()}</small></span><b>{attempt.score}/{attempt.total}</b></li>)}</ul> : <p className="empty-state">No attempts yet. Pick a chapter above to get started.</p>}
    </section>
  </div>;
}
