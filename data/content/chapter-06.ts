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
    },
    {
      title: "Inventory valuation: FIFO and LIFO",
      body: [
        "FIFO (first-in, first-out) assigns the cost of older inventory units to sales first. It is permitted under IFRS-based PFRS.",
        "LIFO (last-in, first-out) assigns newer costs to sales first. LIFO is not permitted under IFRS/PFRS, although it is allowed for some US GAAP reporting. Do not assume that a method accepted in one jurisdiction is valid in another.",
        "The chosen cost formula should be appropriate, applied consistently to similar inventory, and disclosed as required. Specific identification may suit non-interchangeable items.",
      ],
      example: "At rising prices, FIFO often leaves newer, higher costs in ending stock; actual results depend on the inventory mix.",
    },
    {
      title: "Fixed assets, depreciation, and amortization",
      body: [
        "Property, plant, and equipment are tangible resources used over more than one period. Capitalize costs that meet the applicable recognition criteria; expense ordinary repairs that simply maintain existing condition.",
        "Depreciation allocates a depreciable asset's cost over its useful life. Estimate residual value and useful life, choose a method that reflects consumption, and review estimates when circumstances change.",
        "Amortization is the allocation of the cost of many intangible assets over their useful lives. Tax depreciation may differ from accounting depreciation, so maintain separate, reconcilable calculations when needed.",
      ],
      example: "A ₱60,000 machine with a ₱6,000 residual value and a 6-year straight-line life has ₱9,000 annual depreciation.",
    },
  ],
};
