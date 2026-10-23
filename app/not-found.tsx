import Link from "next/link";

export default function NotFound() {
  return <div className="not-found"><span className="eyebrow">A LITTLE MORE TIME</span><div className="not-found-code">404</div><h1>Under development</h1><p>This page is on our to-do list. Check back soon for more useful tools.</p><Link className="button button-primary" href="/">Back to dashboard</Link></div>;
}
