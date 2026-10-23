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
        "Restrict access to sensitive employee information, separate payroll preparation from payment approval where feasible, and keep auditable records of changes.",
      ],
    },
    {
      title: "Bank statements and reconciliation",
      body: [
        "Bank reconciliation explains the difference between the bank's cash record and the cash account in the books at a particular date.",
        "Compare deposits, cheques or transfers, bank charges, interest, and returned payments. Timing differences such as deposits in transit are distinct from errors or unrecorded fees.",
        "Investigate every unexplained difference; don't insert a balancing figure merely to make the totals agree. Review reconciliations independently when possible.",
      ],
      example: "A ₱150 bank fee not yet recorded: Dr Bank Charges ₱150; Cr Cash at Bank ₱150.",
    },
    {
      title: "Detecting and correcting errors",
      body: [
        "Common errors include omissions, duplicates, transposed digits, incorrect account classification, and posting an amount to the wrong period. A balanced trial balance does not rule these out.",
        "Compare ledgers with source documents and external statements, investigate unusual balances, and review changes to master data and journal entries.",
        "Correct mistakes with a documented adjusting or reversing entry that preserves the audit trail. Follow the applicable reporting framework for material prior-period errors.",
      ],
    },
  ],
};
