import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "business-transactions",
  questions: [
    { type: "multiple-choice", prompt: "What is the main purpose of a source document?", options: ["Replace the general ledger", "Support and provide evidence for transaction details", "Set the tax rate", "Close temporary accounts"], answerIndex: 1, explanation: "Source documents support details such as what happened, when, who was involved, and the amount recorded." },
    { type: "true-false", prompt: "A bank statement payment always provides enough information by itself to choose the correct expense account.", options: ["True", "False"], answerIndex: 1, explanation: "A bank statement can evidence that cash moved, but it may not explain the business purpose or the correct classification. Review supporting records." },
    { type: "fill-in-the-blank", prompt: "The general ____ collects postings organized by account.", acceptedAnswers: ["ledger"], explanation: "The general ledger collects postings by account and shows how balances change." },
    { type: "multiple-choice", prompt: "A business provides a completed service for ₱7,500 on credit. Which entry records the sale under the lesson's accrual example?", options: ["Debit Accounts Receivable ₱7,500; credit Service Income ₱7,500", "Debit Cash ₱7,500; credit Accounts Payable ₱7,500", "Debit Service Income ₱7,500; credit Accounts Receivable ₱7,500", "Debit Accounts Receivable ₱15,000; credit Service Income ₱7,500"], answerIndex: 0, explanation: "The customer owes the business, so Accounts Receivable is debited; the earned service income is credited. Both sides are ₱7,500." },
    { type: "multiple-choice", prompt: "Why reconcile the Accounts Receivable control account with the customer subledger?", options: ["To check that detailed customer balances agree with the general-ledger total", "To replace customer invoices", "To calculate equipment depreciation", "To make all customer balances zero"], answerIndex: 0, explanation: "The customer-by-customer balances in the subledger should add up to the Accounts Receivable control account. Differences should be investigated." },
    { type: "multiple-choice", prompt: "Which is an example of a book of prime entry?", options: ["Cash receipts journal", "Statement of financial position", "Trial balance", "Bank statement"], answerIndex: 0, explanation: "A cash receipts journal is a book of prime entry that groups and records cash receipt transactions." },
  ],
};
