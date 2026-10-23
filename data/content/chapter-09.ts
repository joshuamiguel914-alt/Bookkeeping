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
      example: "Sales ₱250,000 − cost of sales ₱140,000 − operating expenses ₱70,000 = ₱40,000 profit before any further items.",
    },
    {
      title: "The balance sheet / statement of financial position",
      body: [
        "The statement of financial position presents assets, liabilities, and equity at a specific date. Current/non-current classification helps readers understand liquidity and longer-term commitments.",
        "The statement must reflect the accounting equation, but classification and disclosure requirements matter as much as arithmetic.",
        "Reconcile each material balance to supporting schedules and ensure that estimates, restrictions, collateral, and related-party information are disclosed when required.",
      ],
    },
    {
      title: "Cash flows and changes in equity",
      body: [
        "The cash flow statement explains cash movements in operating, investing, and financing activities. It helps users assess liquidity and the ability to generate cash, alongside profit information.",
        "A statement of changes in equity reconciles opening and closing balances, including profit or loss, contributions, distributions, and other movements. Proprietorship reporting may use an owner's equity statement; corporations report their equity components.",
        "Statements are related: profit affects retained earnings, cash receipts affect the cash flow statement, and closing cash appears in the statement of financial position. Classification rules vary by framework and should be applied consistently.",
      ],
    },
  ],
};
