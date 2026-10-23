"use client";

import { useState, type FormEvent } from "react";
import type { ChapterQuiz } from "@/data/quizzes/types";

type Result = { attempt: { score: number; total: number }; explanations: string[] };

export function QuizForm({ quiz, title }: { quiz: ChapterQuiz; title: string }) {
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const answers = quiz.questions.map((_, index) => Number(formData.get(`question-${index}`)));
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chapterSlug: quiz.chapterSlug, answers }),
      });
      const body = await response.json() as Result & { error?: string };
      if (!response.ok) throw new Error(body.error ?? "Could not save your quiz.");
      setResult(body);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not save your quiz.");
    } finally {
      setBusy(false);
    }
  }

  function tryAgain() {
    setResult(null);
  }

  return (
    <form className="quiz-form" onSubmit={submit}>
      <div className="quiz-heading"><div><div className="eyebrow">CHAPTER CHECK-IN</div><h1>{title}</h1></div><span className="pill">{quiz.questions.length} questions</span></div>
      {quiz.questions.map((question, index) => (
        <fieldset className="question-card" key={question.prompt}>
          <legend><span className="question-number">0{index + 1}</span>{question.prompt}</legend>
          {question.options.map((option, optionIndex) => (
            <label className={`answer-option ${result ? optionIndex === quiz.questions[index].answerIndex ? "correct-option" : "" : ""}`} key={option}>
              <input type="radio" name={`question-${index}`} value={optionIndex} required disabled={Boolean(result)} />
              <span>{option}</span>
            </label>
          ))}
          {result && <p className="explanation">{result.explanations[index]}</p>}
        </fieldset>
      ))}
      {error && <p className="form-error" role="alert">{error}</p>}
      {result ? (
        <div className="quiz-result">
          <div><span className="eyebrow">YOUR SCORE</span><strong>{result.attempt.score}/{result.attempt.total}</strong></div>
          <p>{result.attempt.score === result.attempt.total ? "Brilliant work!" : "Nice work—review the explanations and keep going."} Your result has been saved.</p>
          <button className="button button-secondary" type="button" onClick={tryAgain}>Try again</button>
        </div>
      ) : (
        <button className="button button-primary" type="submit" disabled={busy}>{busy ? "Checking answers…" : "Submit answers"}</button>
      )}
    </form>
  );
}
