import type { Chapter } from "./types";

export const chapter7: Chapter = {
  slug: "payroll-cash-control",
  number: 7,
  title: "Payroll & Cash Control",
  part: "Part II · Day-to-Day Operations & Record-Keeping",
  summary: "Protect cash, reconcile bank activity, and record payroll obligations responsibly.",
  duration: "18 min",
  sections: [
    {
      title: "Payroll, employer taxes, and withholdings",
      body: [
        "Payroll records should show approved hours or compensation, gross pay, deductions, net pay, and the liabilities created. Reconcile payroll totals to employee records, payment files, and general-ledger accounts.",
        "Philippine employers may have obligations involving withholding taxes and statutory programs such as SSS, PhilHealth, and Pag-IBIG. Rates, thresholds, deadlines, and coverage change; verify current official guidance rather than relying on illustrative rates.",
        "In a simplified illustration, assume gross wages are ₱20,000 and employee deductions payable to third parties are ₱2,000. Before payment, debit Wages Expense ₱20,000; credit Payroll Deductions Payable ₱2,000; and credit Net Wages Payable ₱18,000. The entry balances, and the example is not a statutory-rate calculation.",
        "Restrict access to sensitive employee information, separate payroll preparation from payment approval where feasible, and keep auditable records of changes.",
      ],
      example: "Net pay = gross wages − employee deductions = ₱20,000 − ₱2,000 = ₱18,000. The journal entry credits total ₱20,000, equal to the ₱20,000 debit.",
    },
    {
      title: "Bank statements and reconciliation",
      body: [
        "Bank reconciliation explains the difference between the bank's cash record and the cash account in the books at a particular date.",
        "Compare deposits, cheques or transfers, bank charges, interest, and returned payments. Timing differences such as deposits in transit are distinct from errors or unrecorded fees.",
        "If the book Cash at Bank balance is ₱20,000 and a ₱150 bank fee on the statement has not been recorded, record the fee to reduce the book balance to ₱19,850, assuming there are no other unrecorded items or differences.",
        "Investigate every unexplained difference; don't insert a balancing figure merely to make the totals agree. Review reconciliations independently when possible.",
      ],
      example: "Adjusting entry for the unrecorded fee: Dr Bank Charges ₱150; Cr Cash at Bank ₱150. Adjusted book balance = ₱20,000 − ₱150 = ₱19,850.",
    },
    {
      title: "Detecting and correcting errors",
      body: [
        "Common errors include omissions, duplicates, transposed digits, incorrect account classification, and posting an amount to the wrong period. A balanced trial balance does not rule these out.",
        "Compare ledgers with source documents and external statements, investigate unusual balances, and review changes to master data and journal entries.",
        "Correct mistakes with a documented adjusting or reversing entry that preserves the audit trail. Follow the applicable reporting framework for material prior-period errors.",
      ],
    },
    {
      title: "Key terms, common mistakes, practice, and recap",
      body: [
        "Key terms — Gross pay: compensation before employee deductions. Net pay: amount payable to the employee after deductions. Bank reconciliation: explanation and resolution of differences between the bank record and book cash balance. Timing difference: an item recorded at different times by the bank and business.",
        "Common mistake — Forcing a bank reconciliation to agree with an unexplained balancing entry. Identify whether an item is a timing difference, an unrecorded transaction, or an error, then document the resolution.",
        "Practice — The book Cash at Bank balance is ₱12,500. A ₱250 bank fee is on the statement but not in the books. What entry is needed, and what is the adjusted book balance if there are no other differences?",
        "Answer — Debit Bank Charges ₱250 and credit Cash at Bank ₱250. Adjusted book balance = ₱12,500 − ₱250 = ₱12,250.",
        "Recap — Reconcile payroll to its supporting records, protect sensitive data, and verify current statutory obligations. Reconcile bank activity to the books, record supported adjustments, and preserve an audit trail for corrections.",
      ],
    },
  ],
};
