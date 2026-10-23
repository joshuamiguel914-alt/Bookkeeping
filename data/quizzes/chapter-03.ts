import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "structure-of-accounts",
  questions: [
    { prompt: "Which account type is normally increased by a debit?", options: ["Income", "Liability", "Asset", "Equity"], answerIndex: 2, explanation: "Debits increase assets and expenses; credits increase liabilities, equity, and income." },
    { prompt: "What must be true of every complete journal entry?", options: ["It has exactly one account", "Total debits equal total credits", "It always increases cash", "It contains only asset accounts"], answerIndex: 1, explanation: "Double-entry records preserve the equation by balancing total debits and credits." },
    { prompt: "A customer pays an invoice previously recorded as a receivable. What is recorded?", options: ["Debit cash; credit receivables", "Debit income; credit cash", "Debit expense; credit income", "Debit receivables; credit cash"], answerIndex: 0, explanation: "The receipt increases cash and clears the existing receivable; it is not new income." },
  ],
};
