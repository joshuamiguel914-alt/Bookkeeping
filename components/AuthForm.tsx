"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type AuthFormProps = { mode: "login" | "signup" };

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [challengeId, setChallengeId] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function sendRequest(path: string, body: Record<string, string>) {
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json() as { error?: string; message?: string; challengeId?: string };
      if (!response.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      if (result.challengeId) setChallengeId(result.challengeId);
      setMessage(result.message ?? "Done.");
    } catch (caught) {
      setError(caught instanceof TypeError ? "Could not reach the server. Check your connection and try again." : "The server returned an unexpected response. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function submitCredentials(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const enteredEmail = String(values.get("email") ?? "");
    if (mode === "signup") setEmail(enteredEmail);
    else setEmail(String(values.get("identifier") ?? ""));
    await sendRequest(`/api/auth/${mode}`, Object.fromEntries(
      [...values.entries()].map(([key, value]) => [key, String(value)]),
    ));
  }

  async function verify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challengeId, code: String(values.get("code") ?? "") }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) {
        setError(result.error ?? "Verification failed.");
        return;
      }
      router.push("/");
      router.refresh();
    } catch (caught) {
      setError(caught instanceof TypeError ? "Could not reach the server. Check your connection and try again." : "The server returned an unexpected response. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  const isSignup = mode === "signup";
  return (
    <section className="auth-card">
      <div className="eyebrow">YOUR LEARNING JOURNEY</div>
      <h1>{challengeId ? "Check your inbox" : isSignup ? "Create your account" : "Welcome back"}</h1>
      <p className="muted">{challengeId ? `Enter the 4-digit code sent to ${email || "your email"}.` : isSignup ? "A little progress each day adds up." : "Pick up right where you left off."}</p>
      {challengeId ? (
        <form onSubmit={verify} className="form-stack">
          <label htmlFor="code">4-digit verification code</label>
          <input id="code" name="code" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{4}" maxLength={4} placeholder="0000" required />
          <button className="button button-primary full-width" disabled={busy}>{busy ? "Verifying…" : "Verify and continue"}</button>
          <button className="text-button resend-button" type="button" disabled={busy} onClick={() => void sendRequest("/api/auth/resend", { challengeId })}>Resend code</button>
        </form>
      ) : (
        <form onSubmit={submitCredentials} className="form-stack">
          {isSignup ? (
            <>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" autoComplete="name" minLength={2} maxLength={80} required placeholder="Alex Rivera" />
              <label htmlFor="email">Gmail address</label>
              <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@gmail.com" />
            </>
          ) : (
            <>
              <label htmlFor="identifier">Account ID or Gmail</label>
              <input id="identifier" name="identifier" autoComplete="username" required placeholder="you@gmail.com or account ID" />
            </>
          )}
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete={isSignup ? "new-password" : "current-password"} minLength={isSignup ? 8 : 1} maxLength={128} required placeholder={isSignup ? "At least 8 characters" : "Your password"} />
          {isSignup && (
            <>
              <label htmlFor="confirmPassword">Confirm password</label>
              <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" minLength={8} maxLength={128} required placeholder="Enter your password again" />
            </>
          )}
          <button className="button button-primary full-width" disabled={busy}>{busy ? "Sending code…" : isSignup ? "Create account" : "Continue with email code"}</button>
        </form>
      )}
      {error && <p className="form-error" role="alert">{error}</p>}
      {message && <p className="form-success" role="status">{message}</p>}
      {!challengeId && <p className="auth-switch">{isSignup ? "Already have an account?" : "New around here?"} <Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Sign in" : "Create an account"}</Link></p>}
      {challengeId && <button className="text-button resend-button" type="button" onClick={() => { setChallengeId(""); setError(""); setMessage(""); }}>Use a different account</button>}
    </section>
  );
}
