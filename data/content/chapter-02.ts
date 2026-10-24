import type { Chapter } from "./types";

export const chapter2: Chapter = {
  slug: "core-framework",
  number: 2,
  title: "The Core Framework",
  part: "Part I · Foundational Concepts & Financial Principles",
  summary: "Understand the equation and conventions that keep the books in balance.",
  duration: "14 min",
  sections: [
    {
      title: "The accounting equation",
      body: [
        "The accounting equation states Assets = Liabilities + Equity. It expresses the idea that business resources are financed either by creditors or by owners.",
        "Every recorded transaction affects at least two accounts and must preserve this relationship. Receiving cash from a ₱50,000 bank loan increases both cash (an asset) and the loan payable (a liability).",
        "A transaction can change the mix of resources without changing total assets. For example, paying ₱5,000 cash for equipment reduces cash by ₱5,000 and increases equipment by ₱5,000; the total assets and the equation remain unchanged.",
        "The equation is a useful check, not a substitute for recording transactions accurately. Balanced books can still contain a transaction posted to the wrong account.",
      ],
      example: "A proprietor invests ₱100,000 cash: assets rise ₱100,000 and owner's equity rises ₱100,000. Check: ₱100,000 assets = ₱0 liabilities + ₱100,000 equity.",
    },
    {
      title: "Cash basis and accrual basis",
      body: [
        "Under the cash basis, income and expenses are generally recognized when cash is received or paid. It is straightforward, but may hide unpaid obligations and revenue already earned.",
        "Under accrual accounting, revenue is generally recognized when earned and expenses when incurred, subject to the applicable reporting framework. This matches activity to the period it belongs to, even when cash moves later.",
        "For a service completed in June for ₱12,000 and paid in July, accrual accounting generally records the revenue in June and the later receipt reduces the receivable. A cash-basis record generally shows the receipt when cash arrives in July. Actual financial reporting and tax treatment can depend on applicable requirements.",
        "Philippine entities should determine their applicable Philippine Financial Reporting Standards (PFRS) or PFRS for SMEs requirements and tax accounting obligations. Tax rules and financial-reporting rules may not recognize an item at the same time.",
      ],
      example: "June completion: Dr Accounts Receivable ₱12,000; Cr Service Income ₱12,000. July collection: Dr Cash ₱12,000; Cr Accounts Receivable ₱12,000. Each entry balances; the July receipt does not record the service income a second time.",
    },
    {
      title: "GAAP and local reporting frameworks",
      body: [
        "GAAP means generally accepted accounting principles, but it is not one worldwide rulebook. US GAAP is a US framework; Philippine reporting requirements use PFRS, which is based substantially on IFRS with local adoption and requirements.",
        "Standards specify how to recognize, measure, present, and disclose transactions. The appropriate framework depends on an entity's size, public accountability, regulatory status, and applicable Philippine rules.",
        "For learning purposes, we use the core double-entry concepts shared across frameworks and flag jurisdiction-specific differences. Consult the latest official standards and a qualified Philippine accountant for real filings.",
      ],
    },
    {
      title: "Key terms, common mistakes, practice, and recap",
      body: [
        "Key terms — Accounting equation: Assets = Liabilities + Equity. Cash basis: recognizes cash receipts and payments when they occur. Accrual basis: generally recognizes revenue when earned and expenses when incurred, subject to the applicable framework.",
        "Common mistake — Treating the accounting equation as proof that every transaction is correct. It checks the relationship among balances, but an entry can still be omitted or posted to the wrong account.",
        "Practice — A business has ₱70,000 in assets and ₱25,000 in liabilities. Its owner contributes another ₱10,000 cash. What are the new total assets, liabilities, and equity, assuming no other transaction?",
        "Answer — Assets = ₱70,000 + ₱10,000 = ₱80,000. Liabilities remain ₱25,000. Equity was ₱70,000 − ₱25,000 = ₱45,000 and increases by ₱10,000 to ₱55,000. Check: ₱80,000 = ₱25,000 + ₱55,000.",
        "Recap — The accounting equation must remain balanced. Cash and accrual bases can place activity in different periods; financial reporting should follow the framework applicable to the entity, and Philippine tax rules may differ.",
      ],
    },
  ],
};
