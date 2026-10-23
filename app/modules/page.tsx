import Link from "next/link";
import { redirect } from "next/navigation";
import { chapters } from "@/data/content";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ModulesPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const progress = await prisma.chapterProgress.findMany({ where: { userId: user.id } });
  const completed = new Set(progress.filter((item) => item.completed).map((item) => item.chapterSlug));
  const grouped = chapters.reduce<Record<string, typeof chapters>>((groups, chapter) => {
    groups[chapter.part] ??= [];
    groups[chapter.part].push(chapter);
    return groups;
  }, {});

  return <div className="page-shell">
    <section className="page-intro"><span className="eyebrow">THE LEARNING LIBRARY</span><h1>Small lessons.<br /><span>Big-picture confidence.</span></h1><p>Ten practical chapters, from the first debit to the final close. Take them in order or follow your curiosity.</p></section>
    {Object.entries(grouped).map(([part, partChapters]) => (
      <section className="module-part" key={part}>
        <div className="section-heading"><div><span className="eyebrow">{part.split(" · ")[0]}</span><h2>{part.split(" · ")[1]}</h2></div><span className="muted">{partChapters.length} chapters</span></div>
        <div className="chapter-grid">
          {partChapters.map((chapter) => (
            <Link className="chapter-card" href={`/modules/${chapter.slug}`} key={chapter.slug}>
              <div className="chapter-card-top"><span className="chapter-number">{String(chapter.number).padStart(2, "0")}</span><span className={`status-dot ${completed.has(chapter.slug) ? "is-done" : ""}`}>{completed.has(chapter.slug) ? "✓ Done" : "Start here"}</span></div>
              <h3>{chapter.title}</h3><p>{chapter.summary}</p>
              <div className="chapter-card-bottom"><span>◷ {chapter.duration}</span><span>Explore chapter →</span></div>
            </Link>
          ))}
        </div>
      </section>
    ))}
  </div>;
}
