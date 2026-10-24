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
        "Give each account a clear name and use a consistent rule for classifying transactions. For example, separate Cash at Bank from Cash on Hand if that distinction helps the business reconcile balances and make decisions.",
        "Keep the COA understandable and right-sized. Too few accounts blur useful detail; too many make consistent posting harder. Name accounts clearly and document how ambiguous transactions should be classified.",
      ],
      example: "A simple chart might include 1000 Cash · 1100 Accounts Receivable · 2000 Accounts Payable · 4000 Service Income · 5100 Rent Expense. The numbering is a local organizing choice, not a universal rule.",
    },
    {
      title: "Debits on the left; credits on the right",
      body: [
        "Each account has a debit (left) and credit (right) side. Debits increase assets and expenses; credits decrease them. Credits increase liabilities, equity, and income; debits decrease those account types.",
        "A debit is not inherently good or bad, and a credit is not inherently positive. The account type and transaction determine their effect. Every journal entry must have total debits equal total credits.",
        "A practical starting point is to identify the accounts and their types before choosing sides. For a cash rent payment, Rent Expense increases with a debit and Cash decreases with a credit. For an unpaid customer invoice, Accounts Receivable increases with a debit and Service Income increases with a credit.",
        "Use a consistent journal-entry format with the date, accounts, debit and credit amounts, and a short explanation or source-document reference.",
      ],
      example: "Pay ₱3,000 rent in cash: Dr Rent Expense ₱3,000; Cr Cash ₱3,000. Total debits = ₱3,000 and total credits = ₱3,000.",
    },
    {
      title: "Double-entry bookkeeping in practice",
      body: [
        "Double-entry bookkeeping records the two-sided effect of each transaction. Buying ₱15,000 of equipment for cash increases Equipment and decreases Cash; the total assets do not change.",
        "When a business earns ₱20,000 on credit, debit Accounts Receivable and credit Income. When the customer later pays, debit Cash and credit Accounts Receivable; do not record the income a second time.",
        "The trial balance checks that ledger debit balances equal ledger credit balances. It can detect arithmetic imbalance, but it cannot detect every omission, duplicate, or classification error.",
      ],
    },
    {
      title: "Key terms, common mistakes, practice, and recap",
      body: [
        "Key terms — Chart of accounts: the organized list of accounts. Debit: the left side of an account. Credit: the right side. General ledger: the collection of account balances and postings. Trial balance: a list used to check whether ledger debit and credit totals agree.",
        "Common mistake — Assuming every debit increases an account or every credit decreases it. Debits increase assets and expenses; credits increase liabilities, equity, and income. Always identify the account type first.",
        "Practice — A business provides ₱7,500 of services on credit. Which accounts are affected, and what are the debit and credit amounts?",
        "Answer — Debit Accounts Receivable ₱7,500 and credit Service Income ₱7,500. Debits and credits both total ₱7,500.",
        "Recap — The chart of accounts organizes information. Double-entry records each transaction's effects in at least two accounts, with total debits equal to total credits. A balanced trial balance is useful, but it does not prove that every transaction was recorded or classified correctly.",
      ],
    },
  ],
};
