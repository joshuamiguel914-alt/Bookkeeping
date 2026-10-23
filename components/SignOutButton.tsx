"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignOutButton({ name }: { name: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function signOut() {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) throw new Error("Could not sign out. Please try again.");
      router.push("/login");
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not sign out. Please try again.");
      setBusy(false);
    }
  }

  return <div className="signout-control"><button className="text-button account-button" onClick={signOut} disabled={busy} type="button">{busy ? "Signing out…" : name}</button>{error && <span className="form-error" role="alert">{error}</span>}</div>;
}
