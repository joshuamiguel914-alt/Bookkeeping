import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "business-transactions",
  questions: [
    { prompt: "What is the main purpose of a source document?", options: ["Replace the general ledger", "Support details of a transaction", "Set the tax rate", "Close temporary accounts"], answerIndex: 1, explanation: "Source documents evidence what happened and support the accounting entry." },
    { prompt: "Which is a book of prime entry?", options: ["Cash receipts journal", "Balance sheet", "Trial balance", "Bank statement"], answerIndex: 0, explanation: "A cash receipts journal groups and records cash receipt transactions." },
    { prompt: "Why reconcile a receivables control account to its subledger?", options: ["To confirm customer details add up to the control balance", "To calculate depreciation", "To approve payroll", "To avoid issuing invoices"], answerIndex: 0, explanation: "The detailed customer balances should agree with the general ledger control account." },
  ],
};
