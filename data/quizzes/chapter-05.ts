import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "sales-receivables-payables",
  questions: [
    { prompt: "What does accounts receivable represent?", options: ["Amounts owed by the business to suppliers", "Amounts customers owe the business", "Cash already deposited", "Owner contributions"], answerIndex: 1, explanation: "Accounts receivable tracks amounts customers owe for goods or services." },
    { prompt: "A supplier invoice is received for a purchase on credit. Which account generally increases?", options: ["Accounts payable", "Cash", "Owner withdrawals", "Sales income"], answerIndex: 0, explanation: "The unpaid supplier bill creates or increases accounts payable." },
    { prompt: "Is VAT collected on a sale always the business's revenue?", options: ["Yes, all cash collected is income", "No, it is generally accounted for separately when applicable", "Yes, unless paid in cash", "No, it is always an expense"], answerIndex: 1, explanation: "VAT collected on behalf of government is distinct from sales revenue, subject to applicable rules." },
  ],
};
