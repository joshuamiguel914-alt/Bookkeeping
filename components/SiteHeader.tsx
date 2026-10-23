import Link from "next/link";
import { getCurrentUser } from "@/lib/auth/session";
import { ThemeToggle } from "./ThemeToggle";
import { SignOutButton } from "./SignOutButton";

export async function SiteHeader() {
  const user = await getCurrentUser();
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="The Master Guide home">
        <span className="brand-mark">M</span>
        <span className="brand-name">The Master Guide<span>Bookkeeping & Accounting</span></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/">Dashboard</Link>
        <Link href="/modules">Modules</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/worksheet">Worksheet</Link>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        {user ? <SignOutButton name={user.name} /> : <Link className="button button-small" href="/login">Sign in</Link>}
      </div>
    </header>
  );
}
