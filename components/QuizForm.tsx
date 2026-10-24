"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  MAX_QUIZ_ATTEMPTS,
  PASSING_SCORE_PERCENT,
  SHUFFLE_QUIZ_QUESTIONS,
} from "@/data/quizzes";
import type { QuizQuestion, ChapterQuiz } from "@/data/quizzes/types";

type QuizResult = {
  attempt: { score: number; total: number };
  explanations: string[];
};

type SavedQuizState = {
  version: 1;
  order: number[];
  answers: Record<string, string>;
  currentPosition: number;
  result: QuizResult | null;
};

function shuffledOrder(count: number): number[] {
  const order = Array.from({ length: count }, (_, index) => index);
  if (!SHUFFLE_QUIZ_QUESTIONS) return order;

  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }
  return order;
}

function createInitialState(questionCount: number): SavedQuizState {
  return {
    version: 1,
    order: shuffledOrder(questionCount),
    answers: {},
    currentPosition: 0,
    result: null,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isQuizResult(value: unknown, questionCount: number): value is QuizResult {
  if (!isRecord(value) || !isRecord(value.attempt)) return false;
  const { score, total } = value.attempt;
  return Number.isInteger(score)
    && Number.isInteger(total)
    && total === questionCount
    && Number(score) >= 0
    && Number(score) <= questionCount
    && Array.isArray(value.explanations)
    && value.explanations.length === questionCount
    && value.explanations.every((explanation) => typeof explanation === "string");
}

function isSavedQuizState(value: unknown, questions: QuizQuestion[]): value is SavedQuizState {
  if (!isRecord(value) || value.version !== 1 || !Array.isArray(value.order) || !isRecord(value.answers)) return false;
  const questionCount = questions.length;
  if (value.order.length !== questionCount || !Number.isInteger(value.currentPosition)) return false;
  if (Number(value.currentPosition) < 0 || Number(value.currentPosition) >= questionCount) return false;

  const order = value.order;
  if (!order.every((index) => Number.isInteger(index) && Number(index) >= 0 && Number(index) < questionCount)) return false;
  if (new Set(order).size !== questionCount) return false;

  for (const [rawIndex, answer] of Object.entries(value.answers)) {
    const index = Number(rawIndex);
    if (!Number.isInteger(index) || index < 0 || index >= questionCount || typeof answer !== "string" || answer.length > 300) return false;
    const question = questions[index];
    if (question.type !== "fill-in-the-blank") {
      const answerIndex = Number(answer);
      if (!Number.isInteger(answerIndex) || answerIndex < 0 || answerIndex >= question.options.length) return false;
    }
  }

  return value.result === null || isQuizResult(value.result, questionCount);
}

function isCorrectAnswer(question: QuizQuestion, answer: string): boolean {
  if (question.type === "fill-in-the-blank") {
    const normalizedAnswer = answer.trim().toLocaleLowerCase();
    return question.acceptedAnswers.some((accepted) => accepted.trim().toLocaleLowerCase() === normalizedAnswer);
  }
  return question.answerIndex === Number(answer);
}

function answerLabel(question: QuizQuestion, answer: string): string {
  if (question.type === "fill-in-the-blank") return answer || "No answer";
  return question.options[Number(answer)] ?? "No answer";
}

function correctAnswerLabel(question: QuizQuestion): string {
  return question.type === "fill-in-the-blank"
    ? question.acceptedAnswers[0]
    : question.options[question.answerIndex];
}

function errorMessage(value: unknown): string | undefined {
  return isRecord(value) && typeof value.error === "string" ? value.error : undefined;
}

export function QuizForm({
  quiz,
  title,
  attemptsUsed: initialAttemptsUsed,
  nextLessonHref,
  nextLessonTitle,
}: {
  quiz: ChapterQuiz;
  title: string;
  attemptsUsed: number;
  nextLessonHref: string;
  nextLessonTitle?: string;
}) {
  const router = useRouter();
  const submitLock = useRef(false);
  const [saved, setSaved] = useState<SavedQuizState | null>(null);
  const [attemptsUsed, setAttemptsUsed] = useState(initialAttemptsUsed);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const storageKey = `bookkeeping-quiz-${quiz.chapterSlug}`;
  const questions = quiz.questions;

  useEffect(() => {
    if (questions.length === 0) {
      setSaved(null);
      return;
    }

    const initial = createInitialState(questions.length);
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        let parsed: unknown;
        try {
          parsed = JSON.parse(stored);
        } catch {
          window.localStorage.removeItem(storageKey);
          setError("Saved quiz progress could not be read and was cleared. Start the quiz again.");
          setSaved(initial);
          return;
        }

        if (isSavedQuizState(parsed, questions)) {
          setSaved(parsed);
          return;
        }

        window.localStorage.removeItem(storageKey);
        setError("Saved quiz progress was invalid and has been cleared. Start the quiz again.");
      }

      window.localStorage.setItem(storageKey, JSON.stringify(initial));
      setSaved(initial);
    } catch {
      setError("Your browser could not restore or save quiz progress. You can continue, but a refresh may lose your answers.");
      setSaved(initial);
    }
  }, [questions, storageKey]);

  function saveState(next: SavedQuizState) {
    setSaved(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      setError("Your browser could not save quiz progress. Your answers may be lost if you refresh.");
    }
  }

  function changeAnswer(questionIndex: number, answer: string) {
    if (!saved || busy) return;
    setError("");
    saveState({
      ...saved,
      answers: { ...saved.answers, [questionIndex]: answer },
    });
  }

  function moveTo(position: number) {
    if (!saved || position < 0 || position >= saved.order.length) return;
    setError("");
    saveState({ ...saved, currentPosition: position });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!saved || submitLock.current || busy) return;

    const answers = questions.map((_, index) => saved.answers[String(index)] ?? "");
    const firstMissingIndex = answers.findIndex((answer) => !answer.trim());
    if (firstMissingIndex !== -1) {
      moveTo(saved.order.indexOf(firstMissingIndex));
      setError("Answer every question before submitting.");
      return;
    }
    if (attemptsUsed >= MAX_QUIZ_ATTEMPTS) {
      setError("You have used all quiz attempts for this chapter.");
      return;
    }

    submitLock.current = true;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chapterSlug: quiz.chapterSlug, answers }),
      });
      const body: unknown = await response.json();
      if (!response.ok) throw new Error(errorMessage(body) ?? "Could not save your quiz.");
      if (!isQuizResult(body, questions.length)) throw new Error("The saved quiz result was incomplete. Please refresh before retrying.");

      const completed = { ...saved, result: body };
      setSaved(completed);
      setAttemptsUsed((current) => current + 1);
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(completed));
      } catch {
        setError("Your score was saved, but answer review could not be saved in this browser. Refreshing may lose the review.");
      }
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not save your quiz.");
    } finally {
      submitLock.current = false;
      setBusy(false);
    }
  }

  function retake() {
    if (attemptsUsed >= MAX_QUIZ_ATTEMPTS) return;
    const initial = createInitialState(questions.length);
    setError("");
    saveState(initial);
  }

  if (questions.length === 0) {
    return <div className="empty-state" role="status">This quiz has no questions yet.</div>;
  }

  if (!saved) {
    return <div className="quiz-loading" role="status">Loading your quiz…</div>;
  }

  const result = saved.result;
  const currentQuestionIndex = saved.order[saved.currentPosition];
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = saved.answers[String(currentQuestionIndex)] ?? "";
  const allAnswered = questions.every((_, index) => Boolean(saved.answers[String(index)]?.trim()));
  const scorePercent = result ? Math.round((result.attempt.score / result.attempt.total) * 100) : 0;
  const passed = scorePercent >= PASSING_SCORE_PERCENT;

  return (
    <div className="quiz-form">
      <div className="quiz-heading">
        <div><div className="eyebrow">CHAPTER CHECK-IN</div><h1>{title}</h1></div>
        <span className="pill">{attemptsUsed} of {MAX_QUIZ_ATTEMPTS} attempts used</span>
      </div>

      {error && <p className="form-error quiz-error" role="alert">{error}</p>}

      {result ? (
        <section className="quiz-result-screen" aria-labelledby="quiz-result-title">
          <div className={`quiz-result-banner ${passed ? "is-passed" : "is-not-passed"}`}>
            <span className="eyebrow">{passed ? "PASSING SCORE" : "KEEP PRACTICING"}</span>
            <h2 id="quiz-result-title">{passed ? "You passed!" : "Good effort—review and try again."}</h2>
            <strong>{result.attempt.score}/{result.attempt.total}</strong>
            <p>{scorePercent}% · Passing score: {PASSING_SCORE_PERCENT}%. Your attempt has been saved to your quiz history.</p>
          </div>

          <details className="answer-review">
            <summary>Review correct answers and explanations</summary>
            <div className="answer-review-list">
              {saved.order.map((questionIndex, position) => {
                const question = questions[questionIndex];
                const answer = saved.answers[String(questionIndex)] ?? "";
                const correct = isCorrectAnswer(question, answer);
                return (
                  <article className="answer-review-card" key={question.prompt}>
                    <span className="eyebrow">QUESTION {position + 1}</span>
                    <h3>{question.prompt}</h3>
                    <p className={`review-status ${correct ? "is-correct" : "is-wrong"}`}>
                      {correct ? "Correct" : "Incorrect"} · Your answer: {answerLabel(question, answer)}
                    </p>
                    <p className="review-correct-answer">Correct answer: {correctAnswerLabel(question)}</p>
                    <p className="explanation">{result.explanations[questionIndex]}</p>
                  </article>
                );
              })}
            </div>
          </details>

          <div className="quiz-result-actions">
            {attemptsUsed < MAX_QUIZ_ATTEMPTS
              ? <button className="button button-secondary" type="button" onClick={retake}>Retake quiz</button>
              : <p className="attempt-limit-note">You have used all {MAX_QUIZ_ATTEMPTS} attempts for this chapter.</p>}
            <Link className="button button-primary" href={nextLessonHref}>
              {nextLessonTitle ? "Next Lesson" : "Browse Lessons"}
              {nextLessonTitle && <span className="next-lesson-title">{nextLessonTitle}</span>}
            </Link>
          </div>
        </section>
      ) : attemptsUsed >= MAX_QUIZ_ATTEMPTS ? (
        <section className="quiz-attempt-limit" role="status">
          <h2>All attempts used</h2>
          <p>You’ve completed all {MAX_QUIZ_ATTEMPTS} attempts for this chapter. Review the lesson or return to the quiz list.</p>
          <Link className="button button-secondary" href="/quiz">Back to quizzes</Link>
        </section>
      ) : (
        <form className="quiz-question-form" onSubmit={submit}>
          <div className="quiz-progress">
            <div className="quiz-progress-label" aria-live="polite">
              <span>Question {saved.currentPosition + 1} of {questions.length}</span>
              <span>Attempt {attemptsUsed + 1} of {MAX_QUIZ_ATTEMPTS}</span>
            </div>
            <progress value={saved.currentPosition + 1} max={questions.length} aria-label={`Question ${saved.currentPosition + 1} of ${questions.length}`} />
          </div>

          <fieldset className="question-card active-question">
            <legend>
              <span className="question-number">{String(saved.currentPosition + 1).padStart(2, "0")}</span>
              <span>{currentQuestion.prompt}</span>
            </legend>
            <p className="question-type">
              {currentQuestion.type === "fill-in-the-blank" ? "Fill in the blank" : currentQuestion.type === "true-false" ? "True or false" : "Multiple choice"}
            </p>
            {currentQuestion.type === "fill-in-the-blank" ? (
              <label className="answer-option answer-text-option">
                <span>Your answer</span>
                <input
                  className="answer-text-input"
                  type="text"
                  autoComplete="off"
                  maxLength={300}
                  placeholder="Type your answer"
                  value={currentAnswer}
                  onChange={(event) => changeAnswer(currentQuestionIndex, event.target.value)}
                />
              </label>
            ) : (
              currentQuestion.options.map((option, optionIndex) => (
                <label className="answer-option" key={option}>
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={optionIndex}
                    checked={currentAnswer === String(optionIndex)}
                    onChange={() => changeAnswer(currentQuestionIndex, String(optionIndex))}
                  />
                  <span>{option}</span>
                </label>
              ))
            )}
          </fieldset>

          {saved.answers[String(currentQuestionIndex)]?.trim() ? null : <p className="quiz-answer-hint">Choose or enter an answer to continue.</p>}
          <div className="quiz-navigation">
            <button className="button button-secondary" type="button" onClick={() => moveTo(saved.currentPosition - 1)} disabled={saved.currentPosition === 0 || busy}>Previous</button>
            {saved.currentPosition < questions.length - 1 ? (
              <button className="button button-primary" type="button" onClick={() => moveTo(saved.currentPosition + 1)} disabled={!currentAnswer.trim() || busy}>Next question</button>
            ) : (
              <button className="button button-primary" type="submit" disabled={!allAnswered || busy}>
                {busy ? "Saving your score…" : "Submit quiz"}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
