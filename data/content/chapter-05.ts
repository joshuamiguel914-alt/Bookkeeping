import type { Chapter } from "./types";

export const chapter5: Chapter = {
  slug: "sales-receivables-payables",
  number: 5,
  title: "Sales, Receivables, Purchases & Payables",
  part: "Part II · Day-to-Day Operations & Record-Keeping",
  summary: "Keep track of customer balances, supplier bills, and cash movement.",
  duration: "17 min",
  sections: [
    {
      title: "Accounts receivable: invoice, track, collect",
      body: [
        "Accounts receivable (AR) represents amounts customers owe for goods or services already provided. Record the invoice, payment terms, due date, customer, and supporting evidence.",
        "Use an aged receivables report to group balances by how long they have been outstanding. Follow up consistently, record receipts against the right invoice, and assess expected credit losses under the applicable framework.",
        "When a customer pays an invoice already recorded as a receivable, debit Cash and credit Accounts Receivable for the amount received. This reduces what the customer owes; it does not create the sale a second time.",
        "A customer advance is generally not revenue merely because cash arrived; determine whether the business has performed its obligation and how the applicable rules treat the advance.",
      ],
      example: "Credit sale: Dr Accounts Receivable ₱10,000; Cr Sales Income ₱10,000. When the customer pays: Dr Cash ₱10,000; Cr Accounts Receivable ₱10,000. Both entries balance, and the sale is recorded only once.",
    },
    {
      title: "Accounts payable: bills and vendor payments",
      body: [
        "Accounts payable (AP) tracks amounts owed to suppliers. Match supplier invoices with purchase orders and evidence of delivery or service, then verify amounts, terms, and approvals.",
        "An aged payables report helps plan cash needs and avoid missed due dates. Record a supplier payment against the correct bill so the payable is cleared once, not twice.",
        "For example, paying a previously recorded ₱6,000 supplier bill reduces Cash and Accounts Payable by ₱6,000. The payment settles the liability; it should not create a second expense for the same purchase.",
        "Tax invoices and input VAT treatment depend on current BIR requirements, the buyer's VAT status, and the transaction. Keep compliant documents and obtain local advice where necessary.",
      ],
    },
    {
      title: "Cash transactions and credit sales",
      body: [
        "Cash sales exchange goods or services for immediate payment; credit sales create a receivable first. Both need evidence and accurate revenue recognition.",
        "Use a numbered receipt sequence, daily cash summaries, and separation of duties where practical. Deposit collections promptly and investigate missing numbers or cash differences.",
        "For a ₱500 service provided and paid for immediately, a simple entry is Dr Cash ₱500 and Cr Service Income ₱500. If a sale includes VAT, keep the tax component separate from revenue when required by the applicable rules.",
        "Sales revenue is distinct from VAT collected on behalf of government. Record tax components separately when applicable, using the current rules for the business.",
      ],
    },
    {
      title: "Key terms, common mistakes, practice, and recap",
      body: [
        "Key terms — Accounts receivable: amounts customers owe the business. Accounts payable: amounts the business owes suppliers. Aging report: balances grouped by how long they have been outstanding. Customer advance: cash received before the related goods or services have been provided.",
        "Common mistake — Recording income again when a customer pays an existing invoice, or recording a second expense when an already-recorded supplier bill is paid. Record the cash movement against the receivable or payable.",
        "Practice — A customer pays ₱3,000 toward an existing invoice. What accounts change?",
        "Answer — Debit Cash ₱3,000 and credit Accounts Receivable ₱3,000. Cash increases, the customer balance decreases, and no new sales income is recorded by this collection.",
        "Recap — Track each customer and supplier balance to its supporting invoice, apply receipts and payments to the right item, and distinguish business revenue from taxes collected for government when applicable. Verify current tax-document and VAT requirements rather than relying on a generic example.",
      ],
    },
  ],
};
