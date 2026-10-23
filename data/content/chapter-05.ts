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
        "A customer advance is generally not revenue merely because cash arrived; determine whether the business has performed its obligation and how the applicable rules treat the advance.",
      ],
      example: "A ₱10,000 credit sale: Dr Accounts Receivable ₱10,000; Cr Sales Income ₱10,000.",
    },
    {
      title: "Accounts payable: bills and vendor payments",
      body: [
        "Accounts payable (AP) tracks amounts owed to suppliers. Match supplier invoices with purchase orders and evidence of delivery or service, then verify amounts, terms, and approvals.",
        "An aged payables report helps plan cash needs and avoid missed due dates. Record a supplier payment against the correct bill so the payable is cleared once, not twice.",
        "Tax invoices and input VAT treatment depend on current BIR requirements, the buyer's VAT status, and the transaction. Keep compliant documents and obtain local advice where necessary.",
      ],
    },
    {
      title: "Cash transactions and credit sales",
      body: [
        "Cash sales exchange goods or services for immediate payment; credit sales create a receivable first. Both need evidence and accurate revenue recognition.",
        "Use a numbered receipt sequence, daily cash summaries, and separation of duties where practical. Deposit collections promptly and investigate missing numbers or cash differences.",
        "Sales revenue is distinct from VAT collected on behalf of government. Record tax components separately when applicable, using the current rules for the business.",
      ],
    },
  ],
};
