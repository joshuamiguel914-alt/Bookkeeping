import { redirect } from "next/navigation";
import { AuthForm } from "@/components/AuthForm";
import { getCurrentUser } from "@/lib/auth/session";

export default async function LoginPage() {
  if (await getCurrentUser()) redirect("/");
  return (
    <div className="auth-page">
      <div className="auth-decoration">
        <span className="eyebrow">A FRESH PAGE</span>
        <h2>Make friends<br />with the numbers.</h2>
        <p>Build real-world confidence in bookkeeping and accounting, one approachable lesson at a time.</p>
        <span className="auth-doodle">₱</span>
      </div>
      <AuthForm mode="login" />
    </div>
  );
}
