import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "end-of-period",
  questions: [
    { type: "multiple-choice", prompt: "What does a trial balance primarily check?", options: ["That every transaction is correct", "That ledger debit and credit totals agree", "That every bill was paid", "That cash equals profit"], answerIndex: 1, explanation: "A trial balance checks arithmetic equality of ledger debit and credit totals, but it does not detect every kind of error." },
    { type: "true-false", prompt: "Under accrual accounting, a supportable expense incurred by period-end may need to be recorded even if it has not yet been paid.", options: ["True", "False"], answerIndex: 0, explanation: "Accrual accounting generally records expenses in the period incurred, subject to applicable reporting requirements, even when payment happens later." },
    { type: "multiple-choice", prompt: "What should follow approved period-end adjustments?", options: ["An adjusted trial balance", "A second invoice", "Deleting the source documents", "A new chart of accounts"], answerIndex: 0, explanation: "Post approved adjustments to the ledger and extract an adjusted trial balance before preparing statements." },
    { type: "multiple-choice", prompt: "A ₱12,000 insurance payment covers 12 months. After one month has expired, how much insurance expense should be recognized for that month, assuming even coverage?", options: ["₱1,000", "₱12,000", "₱11,000", "₱6,000"], answerIndex: 0, explanation: "Monthly cost = ₱12,000 ÷ 12 = ₱1,000. The adjusting entry debits Insurance Expense ₱1,000 and credits Prepaid Insurance ₱1,000." },
    { type: "multiple-choice", prompt: "At month-end, ₱3,500 of utility cost has been incurred but not yet billed or paid. Which adjusting entry is appropriate, assuming the amount is supportable?", options: ["Debit Utilities Expense ₱3,500; credit Utilities Payable ₱3,500", "Debit Utilities Payable ₱3,500; credit Cash ₱3,500", "Debit Cash ₱3,500; credit Utilities Expense ₱3,500", "Debit Utilities Expense ₱7,000; credit Utilities Payable ₱3,500"], answerIndex: 0, explanation: "Record the incurred cost with a debit to Utilities Expense and the unpaid obligation with a credit to Utilities Payable. The entry balances at ₱3,500." },
  ],
};
