---
title: "Kirana billing without full inventory setup: make your first bill"
description: "Start a kirana or general-store bill with item name, price and quantity. Learn when to use Quick Bill, amount-only sales and honest unknown stock labels."
published: "2026-10-16"
category: "Billing"
primaryQuestion: "Kirana shop mein saare items banaye bina billing kaise shuru kare?"
tags: ["kirana billing", "quick bill", "zero setup billing", "general store software"]
related: ["/features/billing/", "/business-types/grocery/", "/features/inventory/"]
faqs:
  - question: "What should I enter for an item that is not in the shop catalogue?"
    answer: "In the Quick Bill workflow, enter the item's name, selling price and quantity, then add it to the bill. Relevant details such as a size or pack depend on the business and available features. Check the final bill before saving it."
  - question: "Does unknown stock mean the item is out of stock?"
    answer: "No. Unknown stock means a reliable starting quantity has not been established. Zero stock is a known quantity of zero. Apna Galla keeps this distinction visible rather than inventing an opening quantity."
---

**You can begin billing before creating a complete item master.** At a busy kirana counter, the minimum useful record is often an item name, its selling price and the quantity being sold. Detailed inventory setup can follow from real stock counts and purchases.

<p lang="hi">Pehla bill banane ke liye poori dukaan ka stock register pehle bharna zaroori nahi. Naam, daam aur quantity se shuru kijiye; sahi stock aur cost baad mein asli records se set kijiye.</p>

## Choose the right type of sale

Use an item bill when you want to record what was sold. Search the catalogue first, select an existing item if it is correct, and enter the quantity. This helps avoid a new “Tea 250g” record every time the same packet is sold.

If the search does not find the item, the Quick Bill flow lets you enter a new item within the bill. You should be able to continue the same transaction rather than abandon the customer and open a separate setup screen.

An [amount-only sale](/features/billing/) remains useful for a genuinely one-off total when item detail is not being captured. It is a different choice from an itemised Quick Bill. If you need a line-by-line receipt or dependable item reporting, keep the item detail.

## Check the name, price and unit together

“Milk” at ₹60 could mean one litre, a different packet size or a loose quantity. Give the item a name that helps the next person at the counter recognise it. When relevant, check how the item is sold: packet, piece, kilogram or another supported unit.

Some businesses need additional choices. A footwear sale may need a size, and a hardware sale may use a length or pack. Those details should appear where relevant and remain subject to the configured product features and plan. A fast entry should not silently select a wrong variant.

## Do not invent stock to get past setup

There is a practical difference between “stock not set up yet” and “0 in stock.” The first means a reliable starting quantity has not been recorded. The second means a known quantity is zero.

Keep unknown stock visible until you establish it using a counted opening quantity or genuine stock receipt. Do not add an arbitrary quantity such as 1,000 merely to stop warnings. It will make later low-stock decisions less dependable.

The same rule applies to cost. A ₹60 selling price does not tell the software the supplier's cost. Missing cost must not become a fictional ₹0 cost and inflated profit.

## Save the payment method and review the receipt

For a sample bill with two packets at ₹50 each, the line total is ₹100 before any separately configured discounts or taxes. Review the quantity, unit, rate and final total. Choose Cash, UPI or Udhaar according to the actual transaction; select the customer when credit is involved.

After saving, return to Home or start the next bill. If the transaction is interrupted, use the supported draft or held-bill workflow rather than creating another completed sale to recreate the same transaction.

## Build the catalogue as the shop works

At a quieter time, tidy duplicate names, add meaningful categories, establish opening stock and enter supplier costs. A [kirana shop](/business-types/grocery/) can then move from quick first-day billing to more useful [inventory records](/features/inventory/) without making setup a barrier to serving customers.
