import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "introduction",
  questions: [
    { type: "multiple-choice", prompt: "What is bookkeeping primarily responsible for?", options: ["Interpreting financial statements", "Recording and organizing transactions", "Setting tax law", "Guaranteeing a profit"], answerIndex: 1, explanation: "Bookkeeping records and organizes transactions and their supporting documents. Accounting also classifies, interprets, and communicates financial information." },
    { type: "multiple-choice", prompt: "A business has ₱120,000 in assets and ₱45,000 in liabilities. What is its equity?", options: ["₱165,000", "₱45,000", "₱75,000", "₱120,000"], answerIndex: 2, explanation: "Equity = assets − liabilities = ₱120,000 − ₱45,000 = ₱75,000. The check is ₱45,000 + ₱75,000 = ₱120,000." },
    { type: "true-false", prompt: "An LLC is a standard business entity type under Philippine law.", options: ["True", "False"], answerIndex: 1, explanation: "LLC is a United States business form, not a standard Philippine entity type. Philippine owners may encounter sole proprietorships, partnerships, and corporations." },
    { type: "fill-in-the-blank", prompt: "Complete the accounting equation: Assets = Liabilities + ___.", acceptedAnswers: ["equity", "owners' equity", "owner's equity", "shareholders' equity"], explanation: "The accounting equation is Assets = Liabilities + Equity. The ownership balance may be called owner's equity or shareholders' equity depending on the entity." },
    { type: "multiple-choice", prompt: "A business has ₱86,000 in assets and ₱31,000 in liabilities. The owner later buys personal groceries using a personal bank account. What is the business's equity after that personal purchase?", options: ["₱55,000, unchanged by the personal purchase", "₱86,000, because liabilities are ignored", "₱31,000, equal to liabilities", "₱117,000, because the purchase increases assets"], answerIndex: 0, explanation: "Before the personal purchase, equity is ₱86,000 − ₱31,000 = ₱55,000. Because the personal purchase does not belong to the business and uses personal funds, it does not change the business's recorded assets, liabilities, or equity." },
  ],
};
