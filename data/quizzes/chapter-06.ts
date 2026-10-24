import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "inventory-assets",
  questions: [
    { type: "multiple-choice", prompt: "Which inventory cost formula is not permitted by IFRS-based PFRS?", options: ["FIFO", "LIFO", "Specific identification", "Weighted average"], answerIndex: 1, explanation: "LIFO is not permitted under IFRS/PFRS. Cost formulas must follow the framework applicable to the entity." },
    { type: "true-false", prompt: "Under FIFO, the cost of older inventory units is assigned to sales before the cost of newer units.", options: ["True", "False"], answerIndex: 0, explanation: "FIFO means first-in, first-out: the costs of older units are assigned to sales first." },
    { type: "fill-in-the-blank", prompt: "Under IFRS-based inventory requirements, inventory is generally measured at the lower of cost and net ____ value.", acceptedAnswers: ["realizable"], explanation: "Inventory is generally measured at the lower of cost and net realizable value under IFRS-based standards." },
    { type: "multiple-choice", prompt: "Beginning inventory is ₱20,000, purchases are ₱50,000, and ending inventory is ₱18,000 in a simple periodic example. What is COGS?", options: ["₱52,000", "₱68,000", "₱32,000", "₱88,000"], answerIndex: 0, explanation: "COGS = beginning inventory + purchases − ending inventory = ₱20,000 + ₱50,000 − ₱18,000 = ₱52,000." },
    { type: "multiple-choice", prompt: "A machine costs ₱60,000, has a ₱6,000 residual value, and a 6-year straight-line useful life. What is depreciation per full year?", options: ["₱9,000", "₱10,000", "₱6,000", "₱11,000"], answerIndex: 0, explanation: "Annual depreciation = (cost − residual value) ÷ useful life = (₱60,000 − ₱6,000) ÷ 6 = ₱54,000 ÷ 6 = ₱9,000." },
  ],
};
