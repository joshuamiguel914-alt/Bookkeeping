import type { Chapter } from "./types";

export const chapter9: Chapter = {
  slug: "financial-statements",
  number: 9,
  title: "Building Core Financial Statements",
  part: "Part III · Periodic Adjustments & Financial Statements",
  summary: "Tell a coherent financial story through the four core statements.",
  duration: "20 min",
  sections: [
    {
      title: "The income statement",
      body: [
        "The income statement reports income and expenses for a period, resulting in profit or loss. It may distinguish operating results from finance costs, tax, and other items in a manner appropriate to the reporting framework.",
        "Revenue, cost of sales, operating costs, and taxes should be classified consistently and supported by period-end adjustments.",
        "Profit is not the same as cash generated. Credit sales and unpaid bills change profit before cash is collected or paid.",
      ],
      example: "Sales ₱250,000 − cost of sales ₱140,000 = gross profit ₱110,000. Then ₱110,000 − operating expenses ₱70,000 = ₱40,000 profit before any further items.",
    },
    {
      title: "The balance sheet / statement of financial position",
      body: [
        "The statement of financial position presents assets, liabilities, and equity at a specific date. Current/non-current classification helps readers understand liquidity and longer-term commitments.",
        "The statement must reflect the accounting equation, but classification and disclosure requirements matter as much as arithmetic.",
        "Unlike an income statement, which covers a period, this statement is a snapshot on a date such as 31 December. Its assets, liabilities, and equity should agree with supporting schedules and the equation Assets = Liabilities + Equity.",
        "Reconcile each material balance to supporting schedules and ensure that estimates, restrictions, collateral, and related-party information are disclosed when required.",
      ],
    },
    {
      title: "Cash flows and changes in equity",
      body: [
        "The cash flow statement explains cash movements in operating, investing, and financing activities. It helps users assess liquidity and the ability to generate cash, alongside profit information.",
        "A statement of changes in equity reconciles opening and closing balances, including profit or loss, contributions, distributions, and other movements. Proprietorship reporting may use an owner's equity statement; corporations report their equity components.",
        "Statements are related: profit affects retained earnings, cash receipts affect the cash flow statement, and closing cash appears in the statement of financial position. Classification rules vary by framework and should be applied consistently.",
        "Cash collected from customers is generally an operating cash flow; cash paid to acquire equipment is generally investing; and owner or shareholder contributions are generally financing. Apply the detailed requirements of the relevant framework to the entity's facts.",
      ],
    },
    {
      title: "Key terms, common mistakes, practice, and recap",
      body: [
        "Key terms — Income statement: income and expenses for a period. Statement of financial position: assets, liabilities, and equity at a date. Cash flow statement: cash movements grouped into operating, investing, and financing activities. Statement of changes in equity: a reconciliation of equity movements over a period.",
        "Common mistake — Assuming profit equals cash generated. Under accrual accounting, revenue may be earned before collection and expenses may be incurred before payment.",
        "Practice — Sales are ₱180,000, cost of sales is ₱105,000, and operating expenses are ₱45,000. What is profit before any further items?",
        "Answer — Gross profit = ₱180,000 − ₱105,000 = ₱75,000. Profit before further items = ₱75,000 − ₱45,000 = ₱30,000.",
        "Recap — Use the income statement to understand performance over time, the statement of financial position to understand balances at a date, and the cash flow statement to understand cash movement. Read them together and reconcile the statement amounts to the books.",
      ],
    },
  ],
};
