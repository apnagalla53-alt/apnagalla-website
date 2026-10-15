# Interactive sample shop

The home-page shop and financial dashboard share one browser-only ledger. No production API is called by the demo, and no real customer, stock, payment or message is created. Website signup still uses the real account workflow separately.

- Add items with a name, selling price and opening stock. Use whole unit quantities. Two starter items demonstrate a ₹180 draft (₹120 tea + ₹60 milk).
- Change quantities, add/remove lines, choose Cash/UPI/Udhaar and generate an itemised sample receipt. Stock changes on generation, not draft edits. Empty repeats and overselling are rejected.
- Udhaar requires a customer and updates khata. Receive partial/full Cash or UPI payments; overpayments are rejected. Existing udhaar can be recorded separately without changing sales or stock.
- Purchases increase stock, use their own cost price, and update supplier balances or payment totals. Record supplier payments to reduce dues. Cash spending cannot exceed available demo cash.
- Dashboard totals come from the same entries: opening cash ₹1,000 + cash receipts − cash payments; UPI receipts − UPI payments; sales, customer dues, supplier dues and bill count. No fictional tally confirmation or due date is shown.
- Reminder previews use the current customer balance. Copying is available; no WhatsApp message is sent.
- Receipts include date, customer, item/rate/quantity/amount, total, payment method and paid/due at issue. They are marked sample bills, not tax invoices. Print / Save PDF prints only the receipt. Previous bills retain their original line prices.
- Items and entries persist in sessionStorage for this browser tab. Reset requires inline confirmation. The demo stays usable without browser storage, but refresh then resets it. No authentication tokens are stored by this demo.

## Verification

Run `npm run test:demo` (12 independent calculation/ledger tests) and `npm run build`. The demo modules were also checked with strict TypeScript. No library was added.

Headed browser checks exercised a custom ₹12.50 item × 3 = ₹37.50 udhaar bill; stock reduction; partial cash/UPI settlement; subsequent cash bill; supplier credit/purchase/payment; opening customer debt; shared dashboard buttons; session restoration; reminder preview; receipt-only print layout and PDF export; rejected overselling/overpayment; reset cancel/confirm; keyboard tabs; reduced motion; desktop and 390px mobile layouts without horizontal overflow.

Local review: `http://localhost:4321/#try-demo`. Refresh the page to load the latest controls. See [the release summary](../RELEASE_20261016.md) for GitHub publication scope and the separate hosting rollout.
