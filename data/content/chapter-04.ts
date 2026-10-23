import type { Chapter } from "./types";

export const chapter4: Chapter = {
  slug: "business-transactions",
  number: 4,
  title: "Processing Business Transactions",
  part: "Part II · Day-to-Day Operations & Record-Keeping",
  summary: "Trace each transaction from its original evidence into the ledger.",
  duration: "16 min",
  sections: [
    {
      title: "Source documents and a reliable paper trail",
      body: [
        "Source documents support what happened, when it happened, who was involved, and how much was exchanged. Examples include sales invoices, official receipts, supplier bills, bank statements, contracts, and approved expense claims.",
        "Assign a consistent reference, store documents securely, and connect each one to the relevant journal entry. Retention periods and receipt requirements depend on current Philippine tax and record-keeping rules.",
        "Review documents for completeness and authorization before posting. A bank debit is evidence of a payment, but may not by itself explain the business purpose or correct expense category.",
      ],
    },
    {
      title: "Recording in books of prime entry",
      body: [
        "Books of prime entry group similar transactions before posting to the general ledger. A sales journal, purchases journal, cash receipts journal, and cash payments journal are common examples.",
        "For each event, identify the date, source document, accounts affected, debit, credit, and explanation. In computerized systems the journal may be generated from an invoice or payment workflow, but the accounting logic remains.",
        "Use transaction date and the appropriate accounting period consistently. Do not backdate or alter a posted record to conceal an error; make a traceable correction instead.",
      ],
      example: "Provide ₱7,500 of services on credit: Dr Accounts Receivable ₱7,500; Cr Service Income ₱7,500.",
    },
    {
      title: "Posting to the general ledger and T-accounts",
      body: [
        "The general ledger collects all postings by account and shows how each balance changed. A T-account is a simple visual: debits on the left, credits on the right.",
        "Post journal totals or individual entries to the correct ledger accounts, retaining dates and references so a balance can be traced back to evidence.",
        "Periodically reconcile control accounts, such as total accounts receivable, against their detailed customer subledgers. Investigate differences promptly.",
      ],
    },
  ],
};
