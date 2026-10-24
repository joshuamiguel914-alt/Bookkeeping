import type { Chapter } from "./types";

export const chapter6: Chapter = {
  slug: "inventory-assets",
  number: 6,
  title: "Inventory & Asset Management",
  part: "Part II · Day-to-Day Operations & Record-Keeping",
  summary: "Measure what is on hand, what was sold, and how long-lived assets are used.",
  duration: "18 min",
  sections: [
    {
      title: "Inventory and cost of goods sold",
      body: [
        "Inventory is held for sale or for use in producing goods. Cost of goods sold (COGS) is the carrying amount of inventory recognized as expense when the related goods are sold.",
        "A periodic inventory system determines ending stock through a physical count; a perpetual system updates quantities and costs as transactions occur. Whichever system is used, investigate damaged, obsolete, or missing stock.",
        "Inventory is generally measured at the lower of cost and net realizable value under IFRS-based standards. Maintain count sheets, purchase records, and a documented process for count adjustments.",
      ],
      example: "In a simple periodic example, beginning inventory of ₱20,000 + purchases of ₱50,000 − ending inventory of ₱18,000 = COGS of ₱52,000. This assumes the amounts are measured consistently and there are no other adjustments.",
    },
    {
      title: "Inventory valuation: FIFO and LIFO",
      body: [
        "FIFO (first-in, first-out) assigns the cost of older inventory units to sales first. It is permitted under IFRS-based PFRS.",
        "LIFO (last-in, first-out) assigns newer costs to sales first. LIFO is not permitted under IFRS/PFRS, although it is allowed for some US GAAP reporting. Do not assume that a method accepted in one jurisdiction is valid in another.",
        "The chosen cost formula should be appropriate, applied consistently to similar inventory, and disclosed as required. Specific identification may suit non-interchangeable items.",
      ],
      example: "Assume identical units cost ₱100 each for the first 10 units and ₱120 each for the next 10. If 12 units are sold using FIFO, COGS = (10 × ₱100) + (2 × ₱120) = ₱1,240. The 8 remaining units cost 8 × ₱120 = ₱960. Check: ₱1,240 + ₱960 = ₱2,200, the cost of all 20 units. At rising prices, FIFO therefore leaves newer, higher-cost units in ending inventory in this example.",
    },
    {
      title: "Fixed assets, depreciation, and amortization",
      body: [
        "Property, plant, and equipment are tangible resources used over more than one period. Capitalize costs that meet the applicable recognition criteria; expense ordinary repairs that simply maintain existing condition.",
        "Depreciation allocates a depreciable asset's cost over its useful life. Estimate residual value and useful life, choose a method that reflects consumption, and review estimates when circumstances change.",
        "Amortization is the allocation of the cost of many intangible assets over their useful lives. Tax depreciation may differ from accounting depreciation, so maintain separate, reconcilable calculations when needed.",
      ],
      example: "Straight-line depreciation = (cost − residual value) ÷ useful life. For a ₱60,000 machine with a ₱6,000 residual value and a 6-year useful life: (₱60,000 − ₱6,000) ÷ 6 = ₱9,000 depreciation per full year.",
    },
    {
      title: "Key terms, common mistakes, practice, and recap",
      body: [
        "Key terms — Inventory: goods held for sale or production. Cost of goods sold: inventory cost recognized as expense when related goods are sold. Net realizable value: estimated selling price less estimated completion and selling costs. Depreciation: systematic allocation of an asset's depreciable amount over its useful life.",
        "Common mistake — Treating the purchase of inventory as COGS immediately in every system. COGS relates to the cost of inventory sold; the system used determines how inventory records are updated. Also, straight-line depreciation uses cost less residual value, not automatically the full cost.",
        "Practice — Under a simple periodic system, beginning inventory is ₱25,000, purchases are ₱40,000, and ending inventory is ₱15,000. What is COGS?",
        "Answer — COGS = beginning inventory + purchases − ending inventory = ₱25,000 + ₱40,000 − ₱15,000 = ₱50,000.",
        "Recap — Keep inventory counts and cost records reliable, use a cost formula permitted by the applicable framework, and support impairment or obsolescence adjustments. Depreciation allocates depreciable cost over useful life; estimates and tax treatment may differ by context.",
      ],
    },
  ],
};
