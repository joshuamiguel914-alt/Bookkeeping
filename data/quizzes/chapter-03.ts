import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "structure-of-accounts",
  questions: [
    { type: "multiple-choice", prompt: "Which account type normally increases with a debit?", options: ["Income", "Liability", "Asset", "Equity"], answerIndex: 2, explanation: "Debits increase assets and expenses. Credits increase liabilities, equity, and income." },
    { type: "true-false", prompt: "A debit always increases the account balance, regardless of the account type.", options: ["True", "False"], answerIndex: 1, explanation: "A debit increases assets and expenses, but it decreases liabilities, equity, and income. Its effect depends on the account type." },
    { type: "fill-in-the-blank", prompt: "For every balanced journal entry, total debits must equal total ___.", acceptedAnswers: ["credits"], explanation: "Double-entry bookkeeping requires the total debit amount to equal the total credit amount in each journal entry." },
    { type: "multiple-choice", prompt: "A business pays ₱3,000 rent in cash. Which entry is correct?", options: ["Debit Rent Expense ₱3,000; credit Cash ₱3,000", "Debit Cash ₱3,000; credit Rent Expense ₱3,000", "Debit Accounts Payable ₱3,000; credit Service Income ₱3,000", "Debit Rent Expense ₱6,000; credit Cash ₱3,000"], answerIndex: 0, explanation: "Rent Expense increases with a debit, and Cash decreases with a credit. Both sides are ₱3,000." },
    { type: "multiple-choice", prompt: "A business buys ₱15,000 of equipment for cash. What happens to total assets, assuming the equipment is recorded as an asset?", options: ["Total assets stay the same: equipment rises ₱15,000 while cash falls ₱15,000", "Total assets rise ₱15,000 because equipment is added", "Total assets fall ₱15,000 because cash is paid", "Total assets and liabilities both rise ₱15,000"], answerIndex: 0, explanation: "Equipment increases by ₱15,000 and Cash decreases by ₱15,000. The composition of assets changes, but their total does not." },
    { type: "multiple-choice", prompt: "A customer pays an invoice previously recorded as a receivable. What is recorded?", options: ["Debit Cash; credit Accounts Receivable", "Debit Income; credit Cash", "Debit Expense; credit Income", "Debit Accounts Receivable; credit Cash"], answerIndex: 0, explanation: "The receipt increases Cash and clears the existing receivable; it is not new income." },
  ],
};
