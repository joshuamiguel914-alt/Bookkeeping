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
        "Document the close timetable, account owners, review evidence, and unresolved items. A repeatable checklist reduces missed adjustments.",
      ],
    },
    {
      title: "Adjusting entries: accruals, prepayments, and bad debts",
      body: [
        "Accruals record income earned or costs incurred by period-end even if cash has not yet moved. A prepayment is cash paid before the related benefit is consumed; allocate its expense across the periods receiving that benefit.",
        "Depreciation, inventory adjustments, accrued payroll, and expected credit losses may also require estimates or adjustments. Use supportable assumptions and retain calculation workpapers.",
        "Adjustments should reflect the applicable PFRS requirements and the entity's facts. A tax deduction or recognition date may differ from financial-statement recognition.",
      ],
      example: "If one month of a ₱12,000 annual insurance policy has expired, recognize ₱1,000 insurance expense and reduce prepaid insurance by ₱1,000.",
    },
    {
      title: "Constructing the adjusted trial balance",
      body: [
        "Post approved adjustments to the ledger and extract a new trial balance. Debits should still equal credits, and adjusted balances should reconcile to their schedules.",
        "Review income and expense cut-off, account classifications, comparative movements, and estimates before using the adjusted balances in statements.",
        "Keep a clear link among each adjustment, its workpaper, its approver, and any source evidence so reviewers can retrace the close.",
      ],
    },
  ],
};
