import type { ChapterQuiz } from "./types";

export const quiz: ChapterQuiz = {
  chapterSlug: "inventory-assets",
  questions: [
    { prompt: "Which inventory cost formula is not permitted by IFRS-based PFRS?", options: ["FIFO", "LIFO", "Specific identification", "Weighted average"], answerIndex: 1, explanation: "LIFO is not permitted under IFRS/PFRS, although it is permitted for some US GAAP reporting." },
    { prompt: "When is inventory cost generally recognized as COGS?", options: ["When the related goods are sold", "When a customer pays any invoice", "At the date of purchase only", "When the bank statement arrives"], answerIndex: 0, explanation: "COGS is recognized when the related inventory is sold." },
    { prompt: "What does depreciation do?", options: ["Revalue cash", "Allocate depreciable cost over useful life", "Record supplier payments", "Increase residual value"], answerIndex: 1, explanation: "Depreciation allocates an asset's depreciable amount over its useful life." },
  ],
};
