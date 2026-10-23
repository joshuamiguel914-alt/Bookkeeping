import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "core-framework",
  questions: [
    { prompt: "Which formula is the accounting equation?", options: ["Assets = Liabilities + Equity", "Assets + Income = Expenses", "Cash = Profit + Equity", "Liabilities = Assets + Revenue"], answerIndex: 0, explanation: "The accounting equation is Assets = Liabilities + Equity." },
    { prompt: "Under accrual accounting, when is a service generally recognized as revenue?", options: ["Only when the customer pays", "When it is earned, subject to applicable standards", "When the invoice is printed, regardless of performance", "At year-end only"], answerIndex: 1, explanation: "Accrual accounting generally recognizes revenue when earned, not simply when cash arrives." },
    { prompt: "Which framework is used in Philippine financial reporting?", options: ["US GAAP for every entity", "PFRS, with requirements depending on the entity", "LIFO standards", "No financial reporting framework"], answerIndex: 1, explanation: "Philippine requirements use PFRS-based frameworks appropriate to the entity." },
  ],
};
