# Apna Galla — Master Product Requirements Document

## 1. Product Summary

Apna Galla is a simple, mobile-first retail business management application for Indian shopkeepers.

It should help with:
- billing
- cash / UPI / udhar
- items and stock
- customer khata
- supplier khata
- purchases
- expenses
- returns
- Daily Galla
- Need List
- GST invoices where included
- profit and COGS where included
- advanced retail item capabilities where included
- business questions through Ask Apna Galla
- voice business questions on Pro when implemented

Public website:

**ApnaGalla.com**

The website is a lightweight marketing, pricing, support, trust and acquisition site. The ERP application itself can live separately, for example at `app.apnagalla.com`.

---

## 2. Product Vision

Apna Galla should feel understandable to a shopkeeper without ERP training.

Main message:

> **Dukaan ka hisaab. Bas poochho.**

Secondary line:

> Bill banao. Khata rakho. Stock sambhalo. Business se kuch bhi poochho.

The product should not be sold first as an “ERP”. Public copy should lead with everyday shop needs.

---

## 3. Target Audience

Primary:
- small Indian retailers
- owner-operated shops
- family businesses
- first-time software users
- shopkeepers aged 35–60
- users who prefer simple Hindi/Hinglish language

Business categories:
- grocery / kirana
- pharmacy
- garments
- footwear
- hardware
- electrical
- sanitary
- cosmetics
- stationery
- mobile/electronics
- plywood/glass
- utensils
- auto parts
- bakery
- small food/kiosk
- vegetables/fruits
- dairy
- optical
- other retail

One shared product core must support all categories. Do not create separate apps per business type.

---

## 4. Product Principles

1. Mobile first.
2. Easy to understand.
3. Tap-first and card-first.
4. Large touch targets.
5. Progressive disclosure for advanced features.
6. No fake metrics.
7. No fake provider integrations.
8. Server-side tenant isolation.
9. Server-side plan enforcement.
10. Backup is a safety responsibility, not a premium upsell.
11. Plan downgrade must never delete historical data.
12. Voice is Pro only.
13. Smart is the recommended/Most Popular plan.
14. Do not ship design references, caches or test artifacts to production.

---

## 5. Public Website Goals

ApnaGalla.com must allow visitors to:
- understand the product
- understand who it is for
- see features
- compare plans
- understand Ask Apna Galla
- request demo
- start signup
- sign in
- contact support
- understand migration
- understand backup/export rules
- read legal/trust pages

---

## 6. Website Routes

Required:
- `/`
- `/features`
- `/pricing`
- `/business-types`
- `/ask-apna-galla`
- `/support`
- `/contact`
- `/about`
- `/login`
- `/signup`
- `/privacy`
- `/terms`
- `/refund-policy`
- `/data-security`
- `/referral-terms`

Optional later:
- `/blog`
- `/guides`
- `/compare`
- `/download`
- `/partners`

---

## 7. Homepage Requirements

### Hero

Brand:
**Apna Galla**

Headline:
**Dukaan ka hisaab. Bas poochho.**

Subheadline:
**Billing, stock, khata, purchases, expenses aur business ke sawaalon ka jawab — ek simple app mein.**

Primary CTA:
**Start Free**

Secondary CTA:
**See Plans**

Tertiary:
**Already using Apna Galla? Sign In**

Hero visual:
Show Ask Apna Galla interaction instead of a complicated dashboard.

Examples:
- “Aaj ki sale kitni hui?”
- “Ramesh se kitna lena hai?”
- “Sale kam kyu hui?”
- “Profit kam kyu hua?”

Use clearly illustrative demo data only.

### Homepage sections

1. Hero
2. Core capabilities
3. Ask Apna Galla
4. Business types
5. How it works
6. Pricing
7. Data migration
8. Trust / backup / security
9. FAQ
10. Final CTA
11. Footer

---

## 8. Core Capabilities

Public capability groups:

### Sell
- Billing
- Cash / UPI / Udhar
- Returns
- GST Invoice where included

### Stock
- Items
- Inventory
- Purchases
- Need List
- Variants
- Units
- Batch/Expiry
- Serial/Warranty

### Money
- Customer Khata
- Supplier Khata
- Expenses
- Daily Galla
- Profit/COGS

### Understand
- Reports
- Business Insights
- Ask Apna Galla

### Control
- Staff
- Locations
- Backup
- Export
- Security

---

## 9. Plans

### Starter — ₹75/month

Positioning:
**Run your shop**

Include:
- Retail POS / Billing
- Cash / UPI / Udhar
- Sales
- Inventory
- Customer Khata
- Supplier Khata
- Purchases
- Expenses
- Services
- Daily Galla
- Need List
- Basic Reports
- Basic Text Ask Apna Galla
- Automatic internal backup/data safety
- Item Export
- Stock Export

### Smart — ₹120/month

Positioning:
**Understand your shop**

Badge:
**Most Popular**

Everything in Starter plus:
- GST Invoices
- COGS
- Gross Profit
- Net Business Profit
- Profit & Loss
- Advanced Reports
- Business Insights
- Variants
- Multi-unit
- Weight
- Volume
- Length
- Area
- Batch & Expiry
- FEFO
- Bundles
- Modifiers
- Item Images
- Stock Wastage
- Staff with Smart limits
- Customer Export
- Supplier Export
- Khata Export
- Sales Export
- Purchase Export
- Expense Export
- GST Export
- Profit Export

Not included:
- Voice
- Multiple stock locations
- Serial/Warranty
- Advanced Pricing
- Compatibility/model metadata
- Full Business Export

### Pro — ₹210/month

Positioning:
**Advanced control + Voice**

Everything in Smart plus:
- Voice Ask Apna Galla
- Multiple Stock Locations / Godowns
- Stock Transfers
- Serial & Warranty
- Advanced Pricing
- Compatibility / model metadata
- Advanced Staff Controls
- Higher configured limits
- Complete Business Export
- Advanced operational exports

---

## 10. Backup and Export Rules

Backup and export are separate.

### Automatic Backup / Data Safety
Included for all paid plans.

Starter customers' customer records, supplier records, transactions, stock, bills and accounting history must still be internally backed up.

### Starter Export
- Items
- Current Stock

### Smart Export
- Items
- Stock
- Customers
- Suppliers
- Khata
- Sales
- Purchases
- Expenses
- GST
- Profit/report exports

### Pro Export
- Complete business export
- all implemented operational exports
- documents/archive where supported

Do not use plan restrictions to trap customers' core data when leaving the service.

---

## 11. Authentication

Public entry should clearly show:
- Sign In
- Sign Up

Primary methods:
- Mobile Number + OTP
- Continue with Google

Legacy email/password may remain where required.

Never expose plaintext passwords.

---

## 12. Onboarding

Flow:

1. Sign Up
2. Verify Mobile / Google
3. Owner Name
4. Shop Name
5. Business Type
6. Address / City / State
7. Select plan or trial
8. Start Fresh or Import Existing Data
9. Enter Apna Galla

Onboarding must resume from the last incomplete step.

---

## 13. Demo / Trial

Trial is not a fourth plan.

Trial = selected plan template + `TRIAL` subscription status + start/end date.

Platform Super Admin should be able to:
- create demo
- create trial
- select Starter/Smart/Pro experience
- set expiry
- extend trial
- convert to paid
- override tenant features if needed

---

## 14. Referral Program

Each eligible owner should get:
- Referral Code
- Referral Link

Signup should support:
- optional referral code
- referral query parameter

Track:
- Clicked
- Signed Up
- Trial
- Paid
- Qualified
- Rewarded / Rejected if applicable

Rewards must be configurable, not hardcoded.

---

## 15. Data Migration

Onboarding choice:
- Start Fresh
- Import Existing Data

Supported imports should only be what is really implemented:
- CSV/Excel
- Items
- Customers
- Suppliers
- Opening Stock
- Opening Balances

Do not claim direct Tally/Vyapar migration unless implemented.

---

## 16. Support

Support categories:
- Getting Started
- Billing
- Stock
- Khata
- GST
- Reports
- Ask Apna Galla
- Subscription
- Backup & Export
- Account & Login

Contact form:
- Name
- Mobile
- Email
- Business Name
- City
- Reason
- Message

Reasons:
- Want a Demo
- Pricing Question
- Need Support
- Migration Help
- Partnership
- Other

---

## 17. Super Admin

Platform Super Admin should manage:
- tenants
- tenant metadata
- users
- subscriptions
- trials
- plans
- feature overrides
- numeric limits
- payments
- referrals
- support notes
- sessions/devices
- audit
- backup health
- system health

Tenant override states:
- Inherit
- Force Enable
- Force Disable

Internal tenant primary IDs should remain immutable.

Never display customer passwords.

---

## 18. Website Technology

Recommended:
**Astro + TypeScript**

Use React only where interactivity is required.

Keep marketing website independently deployable from the ERP app.

Suggested structure:

```text
repo/
  marketing-site/
  frontend/
  backend-typescript/
```

---

## 19. Performance

Target:
- mobile-first
- Lighthouse 90+ where realistic
- responsive images
- minimal JS
- no raw Stitch assets
- no node_modules deployed as website files
- no test reports/caches deployed
- no unnecessarily public source maps

---

## 20. SEO

Key search themes:
- billing software for shops
- retail billing software India
- inventory software for retailers
- khata app
- GST billing software
- grocery shop billing
- pharmacy billing
- garment shop software
- hardware shop software

Homepage title example:

**Apna Galla — Billing, Stock, Khata & Business Insights for Indian Shops**

Description:

**Manage billing, stock, khata, purchases, expenses, GST and reports in one simple app. Ask Apna Galla questions about your own business data.**

---

## 21. Marketing Truth Gate

Every public feature should have:
- Available
- Coming Soon
- Not Available

Do not falsely market:
- Voice
- offline native app
- WhatsApp Assistant
- GST filing / IRN
- direct competitor ERP migration
until implemented and verified.

---

## 22. Launch Definition

Website launch requires:
- all required pages
- mobile responsiveness
- correct plan pricing
- working contact/support
- working signup/login handoff
- legal pages
- truthful copy
- SEO metadata
- analytics/privacy decision
- optimized bundle
- production deployment without dev artifacts
