import type { Chapter } from "./types";

export const chapter8: Chapter = {
  slug: "end-of-period",
  number: 8,
  title: "The End-of-Period Process",
  part: "Part III · Periodic Adjustments & Financial Statements",
  summary: "Turn day-to-day records into a checked, adjusted period-end balance.",
  duration: "19 min",
  sections: [
    {
      title: "Extracting the initial trial balance",
      body: [
        "A trial balance lists general-ledger accounts and their debit or credit balances at a date. Equal columns are an arithmetic check before adjustments, not proof that every account is correct.",
        "Reconcile cash, receivables, payables, inventory, loans, and tax balances to supporting records. Investigate suspense accounts and unusual debit or credit balances.",
        "The initial trial balance is prepared before period-end adjustments. Use reconciliations, contracts, counts, and other evidence to identify items that belong in the period but are not yet recorded.",
        "Document the close timetable, account owners, review evidence, and unresolved items. A repeatable checklist reduces missed adjustments.",
      ],
    },
    {
      title: "Adjusting entries: accruals, prepayments, and bad debts",
      body: [
        "Accruals record income earned or costs incurred by period-end even if cash has not yet moved. A prepayment is cash paid before the related benefit is consumed; allocate its expense across the periods receiving that benefit.",
        "Depreciation, inventory adjustments, accrued payroll, and expected credit losses may also require estimates or adjustments. Use supportable assumptions and retain calculation workpapers.",
        "For a ₱12,000 annual insurance payment covering 12 months, one month of coverage is ₱12,000 ÷ 12 = ₱1,000. After that month has expired, debit Insurance Expense ₱1,000 and credit Prepaid Insurance ₱1,000, assuming the initial payment was recorded as a prepayment.",
        "Adjustments should reflect the applicable PFRS requirements and the entity's facts. A tax deduction or recognition date may differ from financial-statement recognition.",
      ],
      example: "Entry check for one expired month: Dr Insurance Expense ₱1,000 = Cr Prepaid Insurance ₱1,000. The remaining prepayment is ₱12,000 − ₱1,000 = ₱11,000, before any other adjustments.",
    },
    {
      title: "Constructing the adjusted trial balance",
      body: [
        "Post approved adjustments to the ledger and extract a new trial balance. Debits should still equal credits, and adjusted balances should reconcile to their schedules.",
        "Review income and expense cut-off, account classifications, comparative movements, and estimates before using the adjusted balances in statements.",
        "For example, recording the insurance adjustment moves ₱1,000 from Prepaid Insurance to Insurance Expense. Total assets decrease by ₱1,000 and period expenses increase by ₱1,000; the adjusting entry itself remains balanced.",
        "Keep a clear link among each adjustment, its workpaper, its approver, and any source evidence so reviewers can retrace the close.",
      ],
    },
    {
      title: "Key terms, common mistakes, practice, and recap",
      body: [
        "Key terms — Trial balance: a list of ledger balances used to check debit-credit equality. Accrual: an amount earned or incurred but not yet settled in cash. Prepayment: cash paid before the related benefit is used. Adjusted trial balance: ledger balances after approved period-end adjustments are posted.",
        "Common mistake — Treating equal unadjusted trial-balance totals as proof that no accrual, prepayment, omission, or classification error exists. Reconcile balances and record supported adjustments before preparing statements.",
        "Practice — At month-end, the business has incurred ₱3,500 of utility cost that has not yet been billed or paid. What adjusting entry records the expense, assuming the amount is supportable?",
        "Answer — Debit Utilities Expense ₱3,500 and credit Utilities Payable ₱3,500. The cost is recorded in the period incurred, and the debit and credit each equal ₱3,500.",
        "Recap — Reconcile key balances, identify period-end accruals and prepayments, post supported adjustments, and extract an adjusted trial balance. Equal totals are an arithmetic check, not a guarantee that the books are complete or correctly classified.",
      ],
    },
  ],
};
