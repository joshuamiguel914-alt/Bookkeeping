import type { Chapter } from "./types";

export const chapter1: Chapter = {
  slug: "introduction",
  number: 1,
  title: "Introduction to Bookkeeping & Accounting",
  part: "Part I · Foundational Concepts & Financial Principles",
  summary: "Meet the record-keeping system behind every confident business decision.",
  duration: "12 min",
  sections: [
    {
      title: "Bookkeeping and accounting: two sides of the same story",
      body: [
        "Bookkeeping is the systematic day-to-day work of identifying transactions, keeping source documents, and recording amounts in the books. Accounting takes those organized records further: it classifies, adjusts, interprets, and communicates financial information.",
        "A bookkeeper might record a ₱8,000 customer payment and file its receipt. An accountant may then reconcile that receipt, decide which reporting period it belongs to, and explain what it means for the business. In a small enterprise, one person may perform both roles.",
        "Reliable accounting starts with reliable bookkeeping. Missing invoices or inconsistent records make every later report less useful.",
      ],
      example: "Think of bookkeeping as collecting and sorting the ingredients; accounting is preparing the meal and explaining what it tells you.",
    },
    {
      title: "The three building blocks: assets, liabilities, and owner's equity",
      body: [
        "Assets are economic resources controlled by a business, such as cash, inventory, equipment, and amounts customers owe. Liabilities are obligations to other parties, such as supplier bills, loans, and taxes payable.",
        "Owner's equity is the residual interest after liabilities are deducted from assets. It changes with owner contributions, withdrawals, income, and expenses. For a corporation, the related ownership balance is generally described through shareholders' equity.",
        "Keep business and personal transactions separate. A proprietor's personal grocery purchase is not a business expense just because the same person owns the enterprise.",
      ],
      example: "If a sari-sari store has ₱120,000 in assets and ₱45,000 in liabilities, its owner's equity is ₱75,000.",
    },
    {
      title: "Choosing a form of business ownership",
      body: [
        "A sole proprietorship is owned by one individual and is comparatively simple to establish, but the owner generally has personal responsibility for business obligations. Philippine registration and tax obligations still apply.",
        "A corporation is a separate juridical entity under Philippine law. It has formal governance and reporting requirements; shareholders' liability is generally limited subject to law and the circumstances of a case.",
        "“LLC” is a United States business form, not a standard Philippine entity type. Philippine business owners may encounter corporations, partnerships, and sole proprietorships instead. Choose an entity with advice from local legal and tax professionals.",
      ],
    },
  ],
};
