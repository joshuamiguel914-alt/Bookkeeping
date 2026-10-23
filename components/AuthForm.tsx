"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type AuthFormProps = { mode: "login" | "signup" };

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submitCredentials(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const values = new FormData(event.currentTarget);
      const body = Object.fromEntries(
        [...values.entries()].map(([key, value]) => [key, String(value)]),
      );
      const response = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
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
      <h1>{isSignup ? "Create your account" : "Welcome back"}</h1>
      <p className="muted">{isSignup ? "A little progress each day adds up." : "Pick up right where you left off."}</p>
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
        <button className="button button-primary full-width" disabled={busy}>
          {busy ? isSignup ? "Creating account…" : "Signing in…" : isSignup ? "Create account" : "Sign in"}
        </button>
      </form>
      {error && <p className="form-error" role="alert">{error}</p>}
      <p className="auth-switch">{isSignup ? "Already have an account?" : "New around here?"} <Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Sign in" : "Create an account"}</Link></p>
    </section>
  );
}
