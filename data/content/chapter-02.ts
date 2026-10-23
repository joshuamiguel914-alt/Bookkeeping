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
        "The equation is a useful check, not a substitute for recording transactions accurately. Balanced books can still contain a transaction posted to the wrong account.",
      ],
      example: "A proprietor invests ₱100,000 cash: assets rise ₱100,000 and owner's equity rises ₱100,000.",
    },
    {
      title: "Cash basis and accrual basis",
      body: [
        "Under the cash basis, income and expenses are generally recognized when cash is received or paid. It is straightforward, but may hide unpaid obligations and revenue already earned.",
        "Under accrual accounting, revenue is generally recognized when earned and expenses when incurred, subject to the applicable reporting framework. This matches activity to the period it belongs to, even when cash moves later.",
        "Philippine entities should determine their applicable Philippine Financial Reporting Standards (PFRS) or PFRS for SMEs requirements and tax accounting obligations. Tax rules and financial-reporting rules may not recognize an item at the same time.",
      ],
      example: "A ₱12,000 service completed in June but paid in July is normally June revenue under accrual accounting.",
    },
    {
      title: "GAAP and local reporting frameworks",
      body: [
        "GAAP means generally accepted accounting principles, but it is not one worldwide rulebook. US GAAP is a US framework; Philippine reporting requirements use PFRS, which is based substantially on IFRS with local adoption and requirements.",
        "Standards specify how to recognize, measure, present, and disclose transactions. The appropriate framework depends on an entity's size, public accountability, regulatory status, and applicable Philippine rules.",
        "For learning purposes, we use the core double-entry concepts shared across frameworks and flag jurisdiction-specific differences. Consult the latest official standards and a qualified Philippine accountant for real filings.",
      ],
    },
  ],
};
