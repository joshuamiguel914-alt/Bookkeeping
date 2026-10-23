import Link from "next/link";
import { redirect } from "next/navigation";
import { chapters } from "@/data/content";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const [progress, attempts, quizCount] = await Promise.all([
    prisma.chapterProgress.findMany({
      where: { userId: user.id },
      orderBy: { updatedAt: "desc" },
    }),
    prisma.quizAttempt.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.quizAttempt.count({ where: { userId: user.id } }),
  ]);
  const completedSlugs = new Set(progress.filter((item) => item.completed).map((item) => item.chapterSlug));
  const completedCount = completedSlugs.size;
  const percent = Math.round((completedCount / chapters.length) * 100);
  const activeChapter = progress.find((item) => !item.completed);
  const nextChapter = chapters.find((chapter) => chapter.slug === activeChapter?.chapterSlug)
    ?? chapters.find((chapter) => !completedSlugs.has(chapter.slug))
    ?? chapters[0];

  return (
    <div className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">YOUR ACCOUNTING ADVENTURE STARTS HERE</span>
          <h1>Good day, {user.name.split(" ")[0]}.<br /><span>Let’s make the numbers make sense.</span></h1>
          <p>A clear, friendly path from first transaction to year-end close. Learn at your pace, one balanced entry at a time.</p>
          <p className="account-id">Your account ID: <strong>{user.id}</strong> · Use this or your Gmail to sign in.</p>
          <Link className="button button-white" href={completedCount === chapters.length ? "/quiz" : `/modules/${nextChapter.slug}`}>{completedCount === chapters.length ? "Celebrate with a quiz" : completedCount ? "Continue learning" : "Start learning"} <span aria-hidden="true">→</span></Link>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="art-sun" /><div className="art-card art-card-back">₱  +</div><div className="art-card art-card-front"><span>YOUR BOOKS</span><strong>in balance</strong><i>✓</i></div><div className="art-sparkle">✳</div></div>
      </section>

      <section className="stats-grid" aria-label="Your learning summary">
        <article className="stat-card"><span className="stat-icon blue-icon">↗</span><span className="stat-label">COURSE PROGRESS</span><strong>{percent}%</strong><div className="mini-progress"><span style={{ width: `${percent}%` }} /></div><small>{completedCount} of {chapters.length} chapters completed</small></article>
        <article className="stat-card"><span className="stat-icon lilac-icon">▤</span><span className="stat-label">CHAPTERS READY</span><strong>{chapters.length}</strong><small>Thoughtfully put together for you</small></article>
        <article className="stat-card"><span className="stat-icon peach-icon">✦</span><span className="stat-label">QUIZZES TAKEN</span><strong>{quizCount}</strong><small>Your recent tries show below</small></article>
      </section>

      <div className="dashboard-grid">
        <section className="panel continue-panel">
          <div className="section-heading"><div><span className="eyebrow">ONE STEP AT A TIME</span><h2>Continue your journey</h2></div><Link className="text-link" href="/modules">All modules <span aria-hidden="true">→</span></Link></div>
          <Link className="continue-card" href={`/modules/${nextChapter.slug}`}>
            <span className="chapter-badge">CHAPTER {String(nextChapter.number).padStart(2, "0")}</span>
            <strong>{nextChapter.title}</strong><span className="muted">{nextChapter.summary}</span>
            <span className="continue-meta"><span>◷ {nextChapter.duration}</span><span>{completedSlugs.has(nextChapter.slug) ? "Review chapter" : "Pick up where you left off"} →</span></span>
          </Link>
        </section>
        <section className="panel recent-panel">
          <div className="section-heading"><div><span className="eyebrow">LITTLE WINS</span><h2>Recent quiz scores</h2></div><Link className="text-link" href="/quiz">Practice <span aria-hidden="true">→</span></Link></div>
          {attempts.length ? (
            <ul className="score-list">
              {attempts.map((attempt) => {
                const chapter = chapters.find((item) => item.slug === attempt.chapterSlug);
                return <li key={attempt.id}><span className="score-medal">✦</span><span><strong>{chapter?.title ?? "Chapter quiz"}</strong><small>{attempt.createdAt.toLocaleDateString()}</small></span><b>{attempt.score}/{attempt.total}</b></li>;
              })}
            </ul>
          ) : <p className="empty-state">Your first quiz score will appear here. Ready when you are!</p>}
        </section>
      </div>
      <section className="quote-strip"><span className="quote-mark">“</span><p>Good accounting doesn’t just track the past.<br /><strong>It helps you choose what comes next.</strong></p><span className="quote-doodle" aria-hidden="true">✳</span></section>
    </div>
  );
}
