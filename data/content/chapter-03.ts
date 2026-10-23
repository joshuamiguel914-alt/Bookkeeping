import type { Chapter } from "./types";

export const chapter3: Chapter = {
  slug: "structure-of-accounts",
  number: 3,
  title: "Structure of Accounts",
  part: "Part I · Foundational Concepts & Financial Principles",
  summary: "Build a tidy chart of accounts and make every debit and credit make sense.",
  duration: "15 min",
  sections: [
    {
      title: "The chart of accounts",
      body: [
        "A chart of accounts (COA) is the organized list of accounts used to classify transactions. Common groups are assets, liabilities, equity, income, and expenses.",
        "A small business might use 1000-series asset accounts, 2000-series liability accounts, 3000-series equity accounts, 4000-series income, and 5000-series expenses. Numbering is a practical convention, not a universal standard.",
        "Keep the COA understandable and right-sized. Too few accounts blur useful detail; too many make consistent posting harder. Name accounts clearly and document how ambiguous transactions should be classified.",
      ],
      example: "1000 Cash · 1100 Accounts Receivable · 2000 Accounts Payable · 4000 Service Income · 5100 Rent Expense",
    },
    {
      title: "Debits on the left; credits on the right",
      body: [
        "Each account has a debit (left) and credit (right) side. Debits increase assets and expenses; credits decrease them. Credits increase liabilities, equity, and income; debits decrease those account types.",
        "A debit is not inherently good or bad, and a credit is not inherently positive. The account type and transaction determine their effect. Every journal entry must have total debits equal total credits.",
        "Use a consistent journal-entry format with the date, accounts, debit and credit amounts, and a short explanation or source-document reference.",
      ],
      example: "Pay ₱3,000 rent in cash: debit Rent Expense ₱3,000; credit Cash ₱3,000.",
    },
    {
      title: "Double-entry bookkeeping in practice",
      body: [
        "Double-entry bookkeeping records the two-sided effect of each transaction. Buying ₱15,000 of equipment for cash increases Equipment and decreases Cash; the total assets do not change.",
        "When a business earns ₱20,000 on credit, debit Accounts Receivable and credit Income. When the customer later pays, debit Cash and credit Accounts Receivable; do not record the income a second time.",
        "The trial balance checks that ledger debit balances equal ledger credit balances. It can detect arithmetic imbalance, but it cannot detect every omission, duplicate, or classification error.",
      ],
    },
  ],
};
