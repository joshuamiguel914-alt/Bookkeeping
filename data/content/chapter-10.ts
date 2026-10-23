import type { Chapter } from "./types";

export const chapter10: Chapter = {
  slug: "closing-books",
  number: 10,
  title: "Closing the Books & Year-End Reporting",
  part: "Part III · Periodic Adjustments & Financial Statements",
  summary: "Complete the accounting cycle and prepare clean opening balances.",
  duration: "16 min",
  sections: [
    {
      title: "Temporary and permanent accounts",
      body: [
        "Income, expense, and distribution accounts are generally temporary: their period activity is transferred during closing so the next period starts fresh.",
        "Assets, liabilities, and equity are permanent accounts: their closing balances carry forward to the next reporting period.",
        "Account names and system behavior differ, but the purpose is consistent—separate this period's performance from accumulated financial position.",
      ],
    },
    {
      title: "Closing journal entries",
      body: [
        "After statements are reviewed, closing entries transfer temporary account balances to an appropriate equity or summary account. The exact sequence depends on the bookkeeping system.",
        "Review dividends or owner withdrawals separately from operating expenses. They reduce equity but are not costs of generating business revenue.",
        "Retain the close checklist, approvals, and entry references. Do not close the books before outstanding adjustments and reviews are complete.",
      ],
      example: "If income exceeds expenses, closing transfers the net result into the appropriate retained earnings or owner's equity balance.",
    },
    {
      title: "Post-closing trial balance and the new cycle",
      body: [
        "The post-closing trial balance contains the permanent accounts that remain after temporary accounts are closed. Its debit and credit totals should agree.",
        "Carry forward verified closing balances as next period's opening balances. Set up a new close calendar and confirm recurring reconciliations, document controls, and reporting deadlines.",
        "Year-end filings and statutory reports depend on entity type and current Philippine requirements. Coordinate financial reporting, tax, and regulatory calendars with a qualified local professional.",
      ],
    },
  ],
};
