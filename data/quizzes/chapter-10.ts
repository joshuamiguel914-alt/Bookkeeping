import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "closing-books",
  questions: [
    { type: "multiple-choice", prompt: "Which account balance generally carries forward into the next period?", options: ["Service Income", "Rent Expense", "Cash", "Owner Withdrawals"], answerIndex: 2, explanation: "Cash is an asset and a permanent account. Its closing balance carries forward; temporary income, expense, and distribution activity is closed." },
    { type: "true-false", prompt: "A purpose of closing entries is to transfer temporary account activity so those accounts start the next period fresh.", options: ["True", "False"], answerIndex: 0, explanation: "Closing entries transfer temporary account balances to an appropriate equity or summary account so a new period can begin." },
    { type: "fill-in-the-blank", prompt: "Closing entries transfer temporary account balances so the next period begins with those accounts reset; asset, liability, and equity accounts are generally ____ accounts.", acceptedAnswers: ["permanent"], explanation: "Assets, liabilities, and equity are generally permanent accounts whose balances carry forward." },
    { type: "multiple-choice", prompt: "A business has Service Income of ₱50,000 and total expenses of ₱35,000, with no other closing items. What net income is transferred to equity in a simplified closing process?", options: ["₱15,000", "₱35,000", "₱50,000", "₱85,000"], answerIndex: 0, explanation: "Net income = Service Income − expenses = ₱50,000 − ₱35,000 = ₱15,000. A simplified close transfers that result to the appropriate equity account." },
    { type: "multiple-choice", prompt: "What should a post-closing trial balance include?", options: ["Permanent accounts after temporary accounts are closed", "All revenue accounts with their pre-closing balances", "Only bank transactions", "Future estimates only"], answerIndex: 0, explanation: "A post-closing trial balance checks the balances of permanent accounts remaining after closing entries." },
  ],
};
