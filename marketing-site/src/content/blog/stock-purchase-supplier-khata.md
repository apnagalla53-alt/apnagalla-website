---
title: "Stock purchases and supplier khata: keep maal and payment clear"
description: "Record incoming stock, genuine costs and supplier credit without double-counting payments. A purchase-entry checklist for kirana, hardware and retail shops."
published: "2026-10-16"
category: "Purchases"
primaryQuestion: "Supplier se aaya maal aur uska dena ek saath kaise track kare?"
tags: ["supplier khata", "purchase entry", "stock register", "supplier dues"]
related: ["/features/purchases/", "/features/inventory/", "/features/khata/"]
faqs:
  - question: "Can I create a supplier while entering a purchase?"
    answer: "Yes. Apna Galla supports creating a supplier within the purchase workflow so you can return to the same purchase instead of starting it again. Search for an existing supplier first to avoid duplicates."
  - question: "Is paying a supplier the same as buying stock again?"
    answer: "No. A supplier payment settles an existing payable. The original purchase records the stock receipt and cost. Recording a second purchase for the payment would overstate stock or purchases."
---

**A stock purchase records what arrived, what it cost and how it was paid for.** Supplier khata then explains what remains payable. Treating these as related records helps a shop avoid both missing stock and duplicated payments.

<p lang="hi">Maal aane ki entry aur supplier ko paise dene ki entry ka matlab alag hai. Udhaar purchase mein stock aa sakta hai, par cash tabhi ghatega jab cash payment hogi.</p>

## Match the delivery to the purchase entry

Start with the supplier and the actual items received. Check names, quantities, units and rates against the delivery or purchase document. If an item is new, create it from the purchase workflow and continue the same entry. If the supplier is new, create that record there too.

Search first. A supplier stored under several similar names produces several balances to chase, and duplicated items make stock reports harder to trust. Consistent names and contact details reduce that confusion before it grows.

## Record the unit you actually received

Ten boxes are not automatically ten pieces. If a box contains twelve packets, the meaning of the quantity and its conversion must be established before relying on the stock count. Use the supported unit and pack configuration available for the item and plan.

A hardware shop may receive cable by roll and sell it by metre. A garments shop may need a size or colour distinction. These differences are reasons to capture the relevant detail, not reasons to fill every advanced field for every item.

## Use genuine costs rather than guesses

A selling price is not a purchase cost. Record the genuine cost from the appropriate purchase records. When costs are missing, later profit may be unknown or partial. Entering ₹0 solely to finish setup can turn an incomplete record into misleading profit.

If stock was already on the shelf before the software started, establish an opening quantity through the appropriate stock setup. Do not record a fictional supplier delivery merely to make the number appear.

## Separate credit purchase from later settlement

For an illustrative transaction, a shop receives ten units costing ₹40 each on supplier credit. The purchase value is ₹400 and the supplier is owed ₹400. No physical cash leaves the drawer at that point.

Later, the shop pays ₹150 in cash against that payable. The supplier balance becomes ₹250, and recorded cash decreases by ₹150. The payment does not mean another ten units arrived. It is not another ₹150 purchase.

Where a purchase includes an immediate payment, use the supported payment handling in that purchase. Do not enter the same outgoing money a second time as an unrelated expense.

## Reconcile a small set of facts

Before saving, check:

- The supplier record and relevant document reference.
- The actual items, variants or packs received.
- Quantities and units that describe the delivery accurately.
- Genuine rates and applicable configured tax details.
- What was paid now and what remains due.

After saving, review the resulting [stock](/features/inventory/) and [supplier khata](/features/khata/). Use [purchase history](/features/purchases/) for the original receipt and the payment history for settlement. Keeping that trail clear is more dependable than adjusting a total until it looks right.
