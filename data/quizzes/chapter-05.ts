import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "sales-receivables-payables",
  questions: [
    { type: "multiple-choice", prompt: "What does Accounts Receivable represent?", options: ["Amounts the business owes suppliers", "Amounts customers owe the business", "Cash already deposited", "Owner contributions"], answerIndex: 1, explanation: "Accounts Receivable tracks amounts customers owe for goods or services already provided." },
    { type: "true-false", prompt: "When a customer pays an invoice already recorded as Accounts Receivable, the collection should be recorded as new sales income.", options: ["True", "False"], answerIndex: 1, explanation: "The collection increases Cash and reduces Accounts Receivable. The related sale was recorded earlier, so recording income again would count it twice." },
    { type: "fill-in-the-blank", prompt: "Accounts ____ tracks amounts the business owes to suppliers.", acceptedAnswers: ["payable", "payables"], explanation: "Accounts Payable tracks unpaid amounts owed to suppliers." },
    { type: "multiple-choice", prompt: "A supplier delivers goods and invoices the business for payment later. Which balance generally increases?", options: ["Accounts Payable", "Cash", "Sales Income", "Owner's Capital"], answerIndex: 0, explanation: "The business has an obligation to pay the supplier, so Accounts Payable generally increases. The debit side depends on what was received and the applicable accounting treatment." },
    { type: "multiple-choice", prompt: "When a sale includes VAT, how should the VAT collected generally be treated in the books?", options: ["As sales revenue in every case", "Separately from sales revenue when required by applicable rules", "As an owner contribution", "As an Accounts Receivable balance even after cash is collected"], answerIndex: 1, explanation: "VAT collected for government is generally accounted for separately from the business's sales revenue when applicable. The exact treatment depends on current rules, transaction facts, and the business's VAT status." },
  ],
};
