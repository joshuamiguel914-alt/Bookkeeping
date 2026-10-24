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
        "Before posting, compare the document with the underlying event: check the date, parties, amounts, description, and required approval. A document is evidence to review, not automatic proof that every accounting treatment on it is correct.",
        "Review documents for completeness and authorization before posting. A bank debit is evidence of a payment, but may not by itself explain the business purpose or correct expense category.",
      ],
    },
    {
      title: "Recording in books of prime entry",
      body: [
        "Books of prime entry group similar transactions before posting to the general ledger. A sales journal, purchases journal, cash receipts journal, and cash payments journal are common examples.",
        "For each event, identify the date, source document, accounts affected, debit, credit, and explanation. In computerized systems the journal may be generated from an invoice or payment workflow, but the accounting logic remains.",
        "A credit sale of a completed service for ₱7,500 can be supported by the customer invoice and evidence that the service was provided. Under the accrual example, record Dr Accounts Receivable ₱7,500 and Cr Service Income ₱7,500, then retain a reference linking the entry to its evidence.",
        "Use transaction date and the appropriate accounting period consistently. Do not backdate or alter a posted record to conceal an error; make a traceable correction instead.",
      ],
      example: "Entry check: Dr Accounts Receivable ₱7,500 = Cr Service Income ₱7,500. When the customer later pays, record the receipt against the receivable rather than recording the income again.",
    },
    {
      title: "Posting to the general ledger and T-accounts",
      body: [
        "The general ledger collects all postings by account and shows how each balance changed. A T-account is a simple visual: debits on the left, credits on the right.",
        "Post journal totals or individual entries to the correct ledger accounts, retaining dates and references so a balance can be traced back to evidence.",
        "Periodically reconcile control accounts, such as total accounts receivable, against their detailed customer subledgers. Investigate differences promptly.",
      ],
    },
    {
      title: "Key terms, common mistakes, practice, and recap",
      body: [
        "Key terms — Source document: evidence supporting a transaction. Book of prime entry: a journal or record that first groups transactions. General ledger: the collection of account records. Control account: a summary account checked against a detailed subledger.",
        "Common mistake — Treating a bank statement line as enough information to classify a payment. Confirm its business purpose and supporting evidence before assigning an account.",
        "Practice — A customer pays ₱4,000 toward an invoice already recorded in Accounts Receivable. What journal entry records the collection?",
        "Answer — Debit Cash ₱4,000 and credit Accounts Receivable ₱4,000. The debit and credit totals agree, and the receipt reduces the existing customer balance without recording income again.",
        "Recap — Check and reference source documents, record transactions in an appropriate journal, post them to the right ledger accounts, and reconcile control balances to detailed records. Preserve an audit trail for corrections.",
      ],
    },
  ],
};
