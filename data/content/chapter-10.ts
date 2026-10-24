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
        "For example, Cash remains in the post-closing books as an asset, while the period's Service Income and Rent Expense balances are closed. Owner withdrawals or corporate distributions reduce equity but are not operating expenses.",
        "Account names and system behavior differ, but the purpose is consistent—separate this period's performance from accumulated financial position.",
      ],
    },
    {
      title: "Closing journal entries",
      body: [
        "After statements are reviewed, closing entries transfer temporary account balances to an appropriate equity or summary account. The exact sequence depends on the bookkeeping system.",
        "Review dividends or owner withdrawals separately from operating expenses. They reduce equity but are not costs of generating business revenue.",
        "In a simplified closing process using Income Summary, assume Service Income is ₱50,000 and total expenses are ₱35,000. Close Service Income by debiting it ₱50,000 and crediting Income Summary ₱50,000; close expenses by debiting Income Summary ₱35,000 and crediting the expense accounts ₱35,000 in total. The remaining ₱15,000 credit balance in Income Summary is net income.",
        "Close that ₱15,000 net income by debiting Income Summary and crediting the appropriate equity account—Owner's Capital for a sole proprietor or the applicable retained earnings account for a corporation. Each entry balances; actual account names and sequence depend on the entity and system.",
        "Retain the close checklist, approvals, and entry references. Do not close the books before outstanding adjustments and reviews are complete.",
      ],
      example: "Net income check: ₱50,000 Service Income − ₱35,000 expenses = ₱15,000. After closing, temporary income and expense accounts start the next period at zero; equity reflects the result.",
    },
    {
      title: "Post-closing trial balance and the new cycle",
      body: [
        "The post-closing trial balance contains the permanent accounts that remain after temporary accounts are closed. Its debit and credit totals should agree.",
        "Carry forward verified closing balances as next period's opening balances. Set up a new close calendar and confirm recurring reconciliations, document controls, and reporting deadlines.",
        "Year-end filings and statutory reports depend on entity type and current Philippine requirements. Coordinate financial reporting, tax, and regulatory calendars with a qualified local professional.",
      ],
    },
    {
      title: "Key terms, common mistakes, practice, and recap",
      body: [
        "Key terms — Temporary account: an account whose period activity is closed at period-end. Permanent account: an asset, liability, or equity account whose balance carries forward. Closing entry: an entry that transfers temporary balances so the next period begins with those accounts reset. Post-closing trial balance: a check of permanent balances after closing.",
        "Common mistake — Recording owner withdrawals or dividends as operating expenses. They are distributions of equity, not costs of earning revenue.",
        "Practice — A business has Service Income of ₱30,000 and total expenses of ₱22,000, with no other closing items. How much net income is transferred to the appropriate equity account in a simplified close?",
        "Answer — Net income = ₱30,000 − ₱22,000 = ₱8,000. The simplified closing process transfers ₱8,000 to the appropriate owner's equity or retained earnings account.",
        "Recap — Review adjustments and statements before closing. Transfer temporary accounts, leave permanent accounts to carry forward, and verify that the post-closing trial balance agrees. Check current local filing requirements separately.",
      ],
    },
  ],
};
