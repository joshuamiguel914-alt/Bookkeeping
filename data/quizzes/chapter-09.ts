import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "financial-statements",
  questions: [
    { prompt: "What period does an income statement cover?", options: ["A period of time", "One instant only", "Only the first day of the year", "The next reporting period"], answerIndex: 0, explanation: "An income statement reports income and expenses over a period." },
    { prompt: "What does a statement of financial position show?", options: ["Assets, liabilities, and equity at a date", "Cash receipts only", "Only sales revenue", "Payroll hours"], answerIndex: 0, explanation: "It presents financial position at a specific reporting date." },
    { prompt: "Is profit always equal to cash generated?", options: ["Yes", "No; accruals and timing differences make them different", "Only for credit sales", "Only at year-end"], answerIndex: 1, explanation: "Profit and cash differ because revenues, expenses, receipts, and payments can occur in different periods." },
  ],
};
