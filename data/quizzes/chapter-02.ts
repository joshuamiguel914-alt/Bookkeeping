import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "core-framework",
  questions: [
    { type: "multiple-choice", prompt: "Which formula is the accounting equation?", options: ["Assets = Liabilities + Equity", "Assets + Income = Expenses", "Cash = Profit + Equity", "Liabilities = Assets + Revenue"], answerIndex: 0, explanation: "The accounting equation is Assets = Liabilities + Equity." },
    { type: "true-false", prompt: "A business receives ₱50,000 cash from a bank loan. The transaction increases assets and liabilities by ₱50,000 each, while equity is unchanged.", options: ["True", "False"], answerIndex: 0, explanation: "Cash (an asset) increases by ₱50,000 and the loan payable (a liability) increases by ₱50,000. No owner contribution or income is created by receiving the loan." },
    { type: "fill-in-the-blank", prompt: "Under accrual accounting, revenue is generally recognized when it is ____, subject to the applicable reporting framework.", acceptedAnswers: ["earned"], explanation: "Accrual accounting generally recognizes revenue when earned, subject to the applicable framework, rather than simply when cash is received." },
    { type: "multiple-choice", prompt: "A service worth ₱12,000 is completed in June and the customer pays in July. When is the revenue generally recorded under accrual accounting?", options: ["In June, when the service is earned", "In July, only when cash arrives", "Half in June and half in July", "At the end of the next year"], answerIndex: 0, explanation: "Under accrual accounting, the service revenue is generally recognized in June when earned. The July payment clears the receivable; it is not a second revenue event." },
    { type: "multiple-choice", prompt: "Which framework is used in Philippine financial reporting?", options: ["US GAAP for every entity", "PFRS, with requirements depending on the entity", "LIFO standards", "No financial reporting framework"], answerIndex: 1, explanation: "Philippine reporting requirements use PFRS-based frameworks appropriate to the entity; the applicable requirements depend on its circumstances." },
  ],
};
