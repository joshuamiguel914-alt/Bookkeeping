import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "financial-statements",
  questions: [
    { type: "multiple-choice", prompt: "What period does an income statement cover?", options: ["A period of time", "One instant only", "Only the first day of the year", "The next reporting period"], answerIndex: 0, explanation: "An income statement reports income and expenses over a period, such as a month or year." },
    { type: "true-false", prompt: "A statement of financial position presents assets, liabilities, and equity at a specific date.", options: ["True", "False"], answerIndex: 0, explanation: "It presents financial position at a reporting date, unlike an income statement, which covers a period." },
    { type: "fill-in-the-blank", prompt: "The cash flow statement groups cash movements into operating, investing, and ____ activities.", acceptedAnswers: ["financing"], explanation: "The three broad activity categories are operating, investing, and financing." },
    { type: "multiple-choice", prompt: "Sales are ₱250,000, cost of sales is ₱140,000, and operating expenses are ₱70,000. What is profit before any further items?", options: ["₱40,000", "₱110,000", "₱70,000", "₱460,000"], answerIndex: 0, explanation: "Gross profit = ₱250,000 − ₱140,000 = ₱110,000. Profit before further items = ₱110,000 − ₱70,000 = ₱40,000." },
    { type: "true-false", prompt: "Profit is always equal to cash generated.", options: ["True", "False"], answerIndex: 1, explanation: "Profit and cash can differ because revenue, expenses, receipts, and payments can occur in different periods; credit sales and unpaid bills are examples." },
  ],
};
