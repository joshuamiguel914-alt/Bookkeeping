import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "payroll-cash-control",
  questions: [
    { type: "multiple-choice", prompt: "What does a bank reconciliation explain?", options: ["Differences between bank and book cash balances", "Differences in employee names", "Inventory valuation", "Owner equity changes"], answerIndex: 0, explanation: "A reconciliation identifies and resolves differences between the bank's cash record and the business's book balance." },
    { type: "true-false", prompt: "An unexplained cash difference should be investigated and documented rather than immediately forced to balance.", options: ["True", "False"], answerIndex: 0, explanation: "Investigate unexplained differences and document the cause. Do not insert an unsupported balancing figure just to make the totals agree." },
    { type: "multiple-choice", prompt: "Which is an example of a Philippine payroll obligation that should be checked against current official rules?", options: ["SSS contributions", "US state sales tax", "UK National Insurance", "US LLC filing"], answerIndex: 0, explanation: "Philippine employers may have obligations involving SSS, PhilHealth, and Pag-IBIG. Verify current official requirements, rates, and deadlines." },
    { type: "multiple-choice", prompt: "A ₱150 bank fee appears on the statement but has not been recorded in the books. Which entry records it?", options: ["Debit Bank Charges ₱150; credit Cash at Bank ₱150", "Debit Cash at Bank ₱150; credit Bank Charges ₱150", "Debit Accounts Receivable ₱150; credit Service Income ₱150", "Debit Bank Charges ₱300; credit Cash at Bank ₱150"], answerIndex: 0, explanation: "The fee is an expense and reduces cash: debit Bank Charges ₱150 and credit Cash at Bank ₱150." },
    { type: "multiple-choice", prompt: "In a simplified payroll illustration, gross wages are ₱20,000 and employee deductions payable to third parties are ₱2,000. What is net pay before any employer contributions?", options: ["₱18,000", "₱20,000", "₱22,000", "₱2,000"], answerIndex: 0, explanation: "Net pay = gross wages − employee deductions = ₱20,000 − ₱2,000 = ₱18,000. Employer contributions, if any, are separate and are not included in this calculation." },
  ],
};
