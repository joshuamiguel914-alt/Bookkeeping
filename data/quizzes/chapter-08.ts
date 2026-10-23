import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "end-of-period",
  questions: [
    { prompt: "What does a trial balance primarily check?", options: ["That every transaction is correct", "That ledger debit and credit totals agree", "That every bill was paid", "That cash equals profit"], answerIndex: 1, explanation: "A trial balance checks arithmetic equality, but it does not detect every kind of error." },
    { prompt: "When is an accrued expense generally recorded?", options: ["When incurred, even if unpaid", "Only when paid", "Only when approved next year", "When cash is deposited"], answerIndex: 0, explanation: "Accrual accounting records costs in the period incurred, subject to applicable rules." },
    { prompt: "What should follow approved period-end adjustments?", options: ["An adjusted trial balance", "A second invoice", "Deleting the source documents", "A new chart of accounts"], answerIndex: 0, explanation: "Post adjustments and extract an adjusted trial balance before preparing statements." },
  ],
};
