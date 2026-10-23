import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "closing-books",
  questions: [
    { prompt: "Which balances generally carry forward into the next period?", options: ["Temporary expense accounts", "Permanent asset, liability, and equity accounts", "All revenue accounts", "Only cash receipts"], answerIndex: 1, explanation: "Permanent accounts carry their closing balances forward." },
    { prompt: "What is the purpose of closing entries?", options: ["Transfer temporary account balances for a fresh period", "Delete the general ledger", "Pay all liabilities", "Create source documents"], answerIndex: 0, explanation: "Closing entries transfer temporary account activity to the relevant equity or summary account." },
    { prompt: "What should a post-closing trial balance include?", options: ["Permanent accounts after closing", "All temporary accounts before closing", "Only bank transactions", "Future estimates only"], answerIndex: 0, explanation: "The post-closing trial balance checks permanent account balances after temporary accounts are closed." },
  ],
};
