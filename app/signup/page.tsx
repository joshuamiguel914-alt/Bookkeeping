import { redirect } from "next/navigation";
import { AuthForm } from "@/components/AuthForm";
import { getCurrentUser } from "@/lib/auth/session";

export default async function SignupPage() {
  if (await getCurrentUser()) redirect("/");
  return (
    <div className="auth-page">
      <div className="auth-decoration">
        <span className="eyebrow">YOUR NEXT CHAPTER</span>
        <h2>Learn the logic<br />behind every peso.</h2>
        <p>Save your learning progress, practice with chapter quizzes, and build your accounting toolkit.</p>
        <span className="auth-doodle">✳</span>
      </div>
      <AuthForm mode="signup" />
    </div>
  );
}
