import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "introduction",
  questions: [
    { prompt: "What is bookkeeping primarily responsible for?", options: ["Interpreting audited statements", "Recording and organizing daily transactions", "Setting tax law", "Guaranteeing a profit"], answerIndex: 1, explanation: "Bookkeeping records and organizes source documents and transactions; accounting also analyzes and communicates the results." },
    { prompt: "A business has ₱120,000 in assets and ₱45,000 in liabilities. What is equity?", options: ["₱165,000", "₱45,000", "₱75,000", "₱120,000"], answerIndex: 2, explanation: "Equity is the residual: ₱120,000 − ₱45,000 = ₱75,000." },
    { prompt: "Which statement about an LLC is correct in the Philippine context?", options: ["It is the standard Philippine corporation form", "It is a US business form, not a standard Philippine entity type", "It has no registration requirements", "It always has one owner"], answerIndex: 1, explanation: "LLC is a US form. Philippine entities commonly include sole proprietorships, partnerships, and corporations." },
  ],
};
