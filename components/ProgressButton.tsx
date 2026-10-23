"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProgressButton({ chapterSlug, completed }: { chapterSlug: string; completed: boolean }) {
  const [isComplete, setIsComplete] = useState(completed);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function toggle() {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/progress", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chapterSlug, completed: !isComplete }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not save progress.");
      setIsComplete(!isComplete);
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not save progress.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="progress-action">
      <button className={`button ${isComplete ? "button-secondary" : "button-primary"}`} onClick={() => void toggle()} disabled={busy} type="button">
        {busy ? "Saving…" : isComplete ? "✓ Chapter completed" : "Mark chapter complete"}
      </button>
      {error && <span className="form-error" role="alert">{error}</span>}
    </div>
  );
}
