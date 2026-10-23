import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "payroll-cash-control",
  questions: [
    { prompt: "What does a bank reconciliation explain?", options: ["Differences between bank and book cash balances", "Differences in employee names", "Inventory valuation", "Owner equity changes"], answerIndex: 0, explanation: "Reconciliation identifies timing differences and errors between the bank record and book balance." },
    { prompt: "Which approach is appropriate for an unexplained cash difference?", options: ["Enter a balancing figure immediately", "Investigate and document the cause", "Delete the bank statement", "Ignore it if small"], answerIndex: 1, explanation: "Investigate unexplained differences rather than forcing the totals to agree." },
    { prompt: "Which is a Philippine payroll obligation example that should be checked against current rules?", options: ["SSS contributions", "US state sales tax", "UK National Insurance", "US LLC filing"], answerIndex: 0, explanation: "Employers may have obligations involving SSS, PhilHealth, and Pag-IBIG; verify current official requirements." },
  ],
};
