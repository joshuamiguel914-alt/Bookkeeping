import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ProgressButton } from "@/components/ProgressButton";
import { getChapter, chapters } from "@/data/content";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const progress = await prisma.chapterProgress.findUnique({
    where: { userId_chapterSlug: { userId: user.id, chapterSlug: slug } },
  });
  const index = chapters.findIndex((item) => item.slug === slug);
  const previous = chapters[index - 1];
  const next = chapters[index + 1];

  return <div className="page-shell lesson-shell">
    <Link className="back-link" href="/modules">← All modules</Link>
    <section className="lesson-hero">
      <span className="eyebrow">{chapter.part}</span>
      <span className="chapter-badge">CHAPTER {String(chapter.number).padStart(2, "0")}</span>
      <h1>{chapter.title}</h1><p>{chapter.summary}</p><span className="lesson-duration">◷ {chapter.duration} read</span>
    </section>
    <div className="lesson-layout">
      <article className="lesson-content">
        {chapter.sections.map((section, sectionIndex) => (
          <section className="lesson-section" id={`section-${sectionIndex + 1}`} key={section.title}>
            <span className="section-index">0{sectionIndex + 1} / 0{chapter.sections.length}</span>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.example && <aside className="example-box"><span>ACCOUNTING IN ACTION</span><p>{section.example}</p></aside>}
          </section>
        ))}
        <div className="lesson-complete"><div><span className="eyebrow">NICE WORK</span><h2>That’s another concept in your toolkit.</h2><p>Mark the lesson complete to keep your dashboard up to date.</p></div><ProgressButton chapterSlug={slug} completed={progress?.completed ?? false} /></div>
        <nav className="lesson-pagination" aria-label="Chapter navigation">
          {previous ? <Link href={`/modules/${previous.slug}`}>← Chapter {previous.number}<strong>{previous.title}</strong></Link> : <span />}
          {next ? <Link href={`/modules/${next.slug}`}>Chapter {next.number} →<strong>{next.title}</strong></Link> : <Link href="/quiz">You made it through all 10! Take a quiz →<strong>Show what you know</strong></Link>}
        </nav>
      </article>
      <aside className="lesson-sidebar"><div className="panel sidebar-card"><span className="eyebrow">CHAPTER CONTENTS</span>{chapter.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.title}>{String(index + 1).padStart(2, "0")} &nbsp; {section.title}</a>)}</div><div className="study-note"><span>✦</span><p>Every business is different. Treat examples as learning tools, and check local requirements before applying them.</p></div></aside>
    </div>
  </div>;
}
