# APNA GALLA — COMPLETE MASTER HANDOFF



---

# FILE: 01_APNA_GALLA_MASTER_PRD.md

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



---

# FILE: 02_BRAND_AND_CONTENT.md

# Apna Galla — Brand & Content Guide

## Brand

Name:
**Apna Galla**

Domain:
**ApnaGalla.com**

Main tagline:
**Dukaan ka hisaab. Bas poochho.**

Secondary:
**Bill banao. Khata rakho. Stock sambhalo. Business se kuch bhi poochho.**

## Public Positioning

Do not lead with:
- ERP
- enterprise software
- accounting suite
- complex automation

Lead with:
- billing
- khata
- stock
- shop management
- business understanding
- Ask Apna Galla

## Tone

Use:
- simple Hindi/Hinglish
- short sentences
- familiar retail language
- clear benefits
- visual examples

Avoid:
- technical jargon
- fake superlatives
- fake customer counts
- fake certifications
- fake integrations

## Public Product Names

- Ask Apna Galla
- Apna Galla Insights
- Apna Galla Starter
- Apna Galla Smart
- Apna Galla Pro
- Apna Galla Backup
- Complete Business Export

## Visual Direction

- light neutral background
- white / soft cards
- quiet green accent
- dark readable text
- subtle borders
- generous negative space
- one coherent icon family
- mobile-first
- professional but not corporate

Avoid:
- copied competitor layouts
- excessive gradients
- glassmorphism
- dense admin-dashboard feel
- tiny typography

## Trust Copy

Recommended:
- “Your business records stay protected on every paid plan.”
- “Export options depend on your plan.”
- “Your shop data stays isolated from other businesses.”
- “Apna Galla never invents profit or business numbers.”

Do not claim:
- GST filing included
- government integration
- bank-grade/military-grade security
- guaranteed uptime
unless objectively true.



---

# FILE: 03_INFORMATION_ARCHITECTURE.md

# Apna Galla — Website Information Architecture

## Main Navigation

Desktop:
- Features
- Business Types
- Ask Apna Galla
- Pricing
- Support
- Sign In
- Start Free

Mobile:
- Logo
- Menu
- Start Free where space allows

## Routes

### `/`
Homepage

### `/features`
Full feature overview.

### `/pricing`
Starter / Smart / Pro.

### `/business-types`
Supported shop types.

### `/ask-apna-galla`
Assistant / Insights / Voice explanation.

### `/support`
Help center landing.

### `/contact`
Demo / sales / support form.

### `/about`
Brand story and product purpose.

### `/login`
Auth entry.

### `/signup`
Signup entry.

### `/privacy`
Privacy policy.

### `/terms`
Terms.

### `/refund-policy`
Refund/commercial policy.

### `/data-security`
Data safety, backup and access.

### `/referral-terms`
Referral terms.

## Footer

Product:
- Features
- Pricing
- Business Types
- Ask Apna Galla

Support:
- Help Center
- Contact
- Migration Help
- Data Security

Company:
- About

Legal:
- Privacy
- Terms
- Refund Policy
- Referral Terms

Actions:
- Sign In
- Start Free



---

# FILE: 04_PRICING_AND_FEATURE_MATRIX.md

# Apna Galla — Pricing & Feature Matrix

| Capability | Starter ₹75 | Smart ₹120 | Pro ₹210 |
|---|:---:|:---:|:---:|
| Retail POS / Billing | ✓ | ✓ | ✓ |
| Cash / UPI / Udhar | ✓ | ✓ | ✓ |
| Sales | ✓ | ✓ | ✓ |
| Inventory | ✓ | ✓ | ✓ |
| Customer Khata | ✓ | ✓ | ✓ |
| Supplier Khata | ✓ | ✓ | ✓ |
| Purchases | ✓ | ✓ | ✓ |
| Expenses | ✓ | ✓ | ✓ |
| Services | ✓ | ✓ | ✓ |
| Daily Galla | ✓ | ✓ | ✓ |
| Need List | ✓ | ✓ | ✓ |
| Basic Reports | ✓ | ✓ | ✓ |
| Basic Text Ask Apna Galla | ✓ | ✓ | ✓ |
| GST Invoices | — | ✓ | ✓ |
| COGS / Profit | — | ✓ | ✓ |
| Advanced Reports | — | ✓ | ✓ |
| Business Insights | — | ✓ | ✓ |
| Variants | — | ✓ | ✓ |
| Multi-unit | — | ✓ | ✓ |
| Weight / Volume / Length / Area | — | ✓ | ✓ |
| Batch & Expiry / FEFO | — | ✓ | ✓ |
| Bundles / Modifiers | — | ✓ | ✓ |
| Item Images | — | ✓ | ✓ |
| Stock Wastage | — | ✓ | ✓ |
| Staff | — | Smart limits | Advanced |
| Voice Ask Apna Galla | — | — | ✓ |
| Multiple Locations | — | — | ✓ |
| Stock Transfers | — | — | ✓ |
| Serial & Warranty | — | — | ✓ |
| Advanced Pricing | — | — | ✓ |
| Compatibility / Model Metadata | — | — | ✓ |
| Automatic Internal Backup | ✓ | ✓ | ✓ |
| Item Export | ✓ | ✓ | ✓ |
| Stock Export | ✓ | ✓ | ✓ |
| Customer Export | — | ✓ | ✓ |
| Supplier Export | — | ✓ | ✓ |
| Khata Export | — | ✓ | ✓ |
| Sales/Purchase/Expense Export | — | ✓ | ✓ |
| GST/Profit Export | — | ✓ | ✓ |
| Complete Business Export | — | — | ✓ |

## Commercial Rules

1. Smart = Most Popular.
2. Voice = Pro only.
3. GST = Smart + Pro.
4. User-facing Profit/COGS = Smart + Pro.
5. Automatic backup/data safety = every paid plan.
6. Starter export = Items + Stock.
7. Smart = customer + operational/report export.
8. Pro = complete business export.
9. Downgrade never deletes historical data.
10. Tenant-specific feature overrides do not create new plans.



---

# FILE: 05_GOOGLE_STITCH_SCREEN_PROMPTS.md

# Apna Galla — Google Stitch Screen-by-Screen Prompts

## PROMPT 0 — GLOBAL DESIGN SYSTEM

Design a complete responsive public website and acquisition/onboarding experience for **Apna Galla**, a mobile-first retail business management SaaS for Indian shopkeepers.

Brand:
- Apna Galla
- Domain: ApnaGalla.com
- Tagline: “Dukaan ka hisaab. Bas poochho.”

Audience:
- Indian shopkeepers
- many users age 40+
- may not be highly technical
- must understand screens without training

Visual direction:
- premium but approachable
- light neutral canvas
- white / soft-tint cards
- quiet green accent
- warm merchant-ledger feeling
- dark readable text
- one coherent icon family
- strong hierarchy
- generous negative space
- large touch targets
- mobile-first
- support English + Hindi/Devanagari
- avoid dense enterprise dashboards
- avoid excessive gradients
- avoid glassmorphism
- do not copy competitors

Recommended base palette:
- canvas #F7FAF8
- white cards
- soft tint #EFF5F1
- primary green #2C6650
- text #20342B
- secondary #5C6C64
- border #DCE6DF

Typography:
- humanist sans
- body ~16px
- secondary ~14px
- headings 20–36px
- minimum 44px touch targets

Frames:
- Mobile primary 390×844
- Mobile 360×800
- Mobile 412×915
- Tablet 768
- Desktop 1440

Pricing:
- Starter ₹75/month
- Smart ₹120/month — Most Popular
- Pro ₹210/month

Voice is Pro only.
GST and Profit are Smart + Pro.
Automatic backup/data safety is on every paid plan.

---

## SCREEN 1 — HOMEPAGE DESKTOP

Create a 1440px homepage.

Header:
Apna Galla logo
Features
Business Types
Ask Apna Galla
Pricing
Support
Sign In
Start Free

Hero:
Headline:
“Dukaan ka hisaab. Bas poochho.”

Subheadline:
“Billing, stock, khata, purchases, expenses aur business ke sawaalon ka jawab — ek simple app mein.”

Buttons:
Start Free
See Plans

Show a polished product conversation mockup:
User: “Aaj ki sale kitni hui?”
Apna Galla: short answer.

Second example:
“Sale kam kyu hui?”

Below hero:
- 6 feature cards
- Ask Apna Galla section
- business types
- How it works
- pricing
- migration
- trust/data safety
- FAQ
- final CTA
- footer

Keep large negative space and low text density.

---

## SCREEN 2 — HOMEPAGE MOBILE

Create homepage at 390×844.

- compact header
- logo
- menu
- clear Start Free CTA
- hero fits naturally above fold
- product conversation below CTA
- sections stack vertically
- no tiny columns
- pricing cards stack
- Smart highlighted
- compact footer

---

## SCREEN 3 — FEATURES

Design `/features`.

Headline:
“Everything your shop needs. Nothing you don’t.”

Sections:

SELL
Billing
Cash / UPI / Udhar
Returns
GST

STOCK
Inventory
Purchases
Need List
Variants
Units
Batch / Expiry
Serial / Warranty

MONEY
Khata
Supplier Khata
Expenses
Daily Galla
Profit

UNDERSTAND
Reports
Business Insights
Ask Apna Galla

CONTROL
Staff
Locations
Backup
Export
Security

Use short cards and plan labels where needed.

---

## SCREEN 4 — PRICING DESKTOP

Design `/pricing`.

Headline:
“Simple plans for every kind of shop.”

Three cards:
Starter ₹75 — Run your shop
Smart ₹120 — Most Popular — Understand your shop
Pro ₹210 — Advanced control + Voice

Smart gets subtle stronger border/tint.

Below:
grouped comparison:
Daily Business
GST & Profit
Advanced Inventory
Ask Apna Galla
Team
Data Export

Add:
“Automatic data backup is included in every paid plan.”

---

## SCREEN 5 — PRICING MOBILE

390×844.

Stack plan cards.
Each:
- plan
- price
- tagline
- 6–8 key benefits
- CTA
- View all features

Then:
comparison accordion
backup/export explanation
FAQ
final CTA

---

## SCREEN 6 — BUSINESS TYPES

Design `/business-types`.

Headline:
“Har dukaan alag. Apna Galla uske hisaab se simple.”

Search:
“Search your business type”

Cards:
Grocery
Pharmacy
Garments
Footwear
Hardware
Electrical
Cosmetics
Stationery
Sanitary
Mobile & Electronics
Plywood / Glass
Food / Kiosk
Other

Use distinct icons.

Example capability labels:
Pharmacy — Batch & Expiry, Multi-unit, GST
Garments — Variants, Images, Staff
Hardware — Multi-unit, Length, Godown
Grocery — Stock, Khata, Low Stock

---

## SCREEN 7 — ASK APNA GALLA

Design `/ask-apna-galla`.

Hero:
“Don’t search reports. Ask your business.”

Starter examples:
Aaj ki sale?
Cash kitna aaya?
Ramesh se kitna lena hai?
Maggi stock mein kitni hai?

Smart:
Sale kam kyu hui?
Profit kam kyu hua?
Paisa kidhar ja raha hai?
Kaunsa item margin gira raha hai?

Pro:
“Bolkar poochho.”
Voice available with Pro.

Support availability badges so Coming Soon can be shown honestly.

---

## SCREEN 8 — SUPPORT

Design `/support`.

Hero:
“How can we help?”

Large search.

Category cards:
Getting Started
Billing
Stock
Khata
GST
Reports
Ask Apna Galla
Subscription
Backup & Export
Account & Login

Bottom:
Contact Support
Request a Demo

---

## SCREEN 9 — CONTACT / DEMO

Design `/contact`.

Fields:
Name
Mobile
Email
Business Name
City
Reason
Message

Reason:
Want a Demo
Pricing Question
Need Support
Migration Help
Partnership
Other

CTA:
Send Message

Also create:
loading
success
validation error
server error

---

## SCREEN 10 — LOGIN

Mobile first.

Logo:
Apna Galla

Heading:
“Welcome back”

Clear options:
Sign In
Sign Up

Phone field:
+91 Mobile Number

CTA:
Continue

Divider:
OR

Google button:
Continue with Google

Footer:
Privacy
Terms

No primary password field.
Create light and dark variants.

---

## SCREEN 11 — SIGNUP

Heading:
“Create your Apna Galla account”

Buttons:
Continue with Mobile
Continue with Google

Collapsed optional:
Have a referral code?

Consent:
Terms + Privacy

Large controls, minimal distractions.

---

## SCREEN 12 — OTP

Heading:
“Enter OTP”

Text:
“We sent a code to +91 XXXXX XXXXX”

Six-digit input
Verify
Resend OTP
Change number

Design states:
timer
invalid OTP
too many attempts
loading

Never show actual OTP.

---

## SCREEN 13 — OWNER NAME

Progress indicator.

Heading:
“What should we call you?”

Field:
Owner Name

CTA:
Continue

Lots of negative space.

---

## SCREEN 14 — BUSINESS SETUP

Heading:
“Set up your shop”

Fields:
Shop / Business Name
Business Type
Address
City
State
PIN Code

Optional:
Use my location

Business Type opens searchable bottom sheet.

---

## SCREEN 15 — BUSINESS TYPE SHEET

Full-height bottom sheet.

Title:
“Select business type”

Search:
“Search business types”

Rows:
Kirana / Grocery
General Store
Mini Supermarket
Pharmacy / Medical
Garments
Footwear
Hardware & Electrical
Cosmetics / Beauty
Stationery
Mobile & Electronics
Sanitary
Bakery & Sweets
Tea Stall / Small Eatery
Other

Distinct icons.
Selected = green check.

---

## SCREEN 16 — PLAN SELECTION

Heading:
“Choose your plan”

Subcopy:
“You can change your plan later.”

Stack:
Starter ₹75
Smart ₹120 Most Popular
Pro ₹210

Support Start Trial if enabled.

Trial is not a fourth plan.

---

## SCREEN 17 — MIGRATION CHOICE

Heading:
“Bring your existing data?”

Cards:
Start Fresh
Import Existing Data

Copy:
“We’ll show you what can be imported before making changes.”

Do not show unsupported competitor logos.

---

## SCREEN 18 — IMPORT UPLOAD

Wizard:
1 Upload
2 Map
3 Validate
4 Review
5 Import

Show:
file picker
supported types
selected file
Continue

Desktop + mobile.

---

## SCREEN 19 — IMPORT MAPPING

Table/list:
Your Column → Apna Galla Field

Examples:
Product Name → Item Name
Qty → Opening Stock
Mobile → Phone

States:
Mapped
Needs Attention
Ignore

CTA:
Validate Data

---

## SCREEN 20 — IMPORT VALIDATION

Cards:
842 Valid
12 Warnings
3 Errors

Actions:
Review Errors
Continue with Valid Rows
Download Error Report if supported

---

## SCREEN 21 — ONBOARDING COMPLETE

Heading:
“Your shop is ready.”

Show:
Shop Name
Selected Plan
Import summary if any

CTA:
Open Apna Galla

Secondary:
Manage Shop Features

---

## SCREEN 22 — REFERRAL OWNER PAGE

Title:
“Refer Apna Galla”

Show:
Referral Code
Copy
Share
Referred Shops
Qualified Referrals
Reward Status

If no reward campaign:
show tracking without fake reward amount.

---

## SCREEN 23 — DATA SECURITY

Design `/data-security`.

Sections:
- Business data isolation
- Automatic backup on all paid plans
- Export by plan
- Secure sign-in
- No plaintext password visibility
- Data portability / account closure

Simple trust cards.
No fake certifications.

---

## SCREEN 24 — ABOUT

Headline:
“Built for the way Indian shops actually work.”

Story pillars:
Fast billing
Simple khata
Flexible stock
Less typing
Ask instead of searching reports

No fake customer counts.

---

## SCREEN 25 — LEGAL TEMPLATE

For Privacy / Terms / Refund / Referral Terms.

- simple header
- title
- last updated
- readable width
- table of contents on desktop
- clear footer

---

## SCREEN 26 — 404

Heading:
“Yeh page nahi mila.”

Copy:
“Shayad link badal gaya hai.”

Buttons:
Go Home
Contact Support

---

## SCREEN 27 — CONTACT SUCCESS

Heading:
“Message received.”

Copy:
“We’ve saved your request.”

Show submitted reason and masked contact.

CTA:
Back to Home

No fake response-time promise.

---

## SCREEN 28 — FULL PLAN COMPARISON

Group:
Daily Business
Money & Reports
Advanced Inventory
Ask Apna Galla
Team
Data

Desktop:
3 plan columns

Mobile:
plan tabs + category accordions, not a squeezed table.

---

## SCREEN 29 — TRIAL STATUS

Heading:
“Apna Galla Smart Trial”

Show:
days remaining
end date

Buttons:
Choose Plan
Compare Plans

Copy:
“Your records stay safe when the trial ends.”

---

## SCREEN 30 — SUBSCRIPTION MANAGEMENT

Current Plan card first.

Then all 3 plans.

Smart marked Most Popular.
Current plan highlighted.

Wallet/billing icon must work.

If payment provider unavailable:
“Online subscription payment is not available yet.”
CTA:
Contact Support

Never leave a dead icon.



---

# FILE: 06_CODEX_ANTIGRAVITY_MASTER_PROMPT.md

# MASTER IMPLEMENTATION PROMPT — APNA GALLA

You are working on the existing retail SaaS currently developed internally under the EVOLIX Trade ERP repository.

The PUBLIC customer-facing brand is:

# APNA GALLA

Website:

# ApnaGalla.com

Do NOT perform a risky blanket technical rename of internal packages, database models or repository identifiers solely for branding.

Public website, public auth/onboarding copy, pricing, support, subscription, referral and marketing should use **Apna Galla**.

Your job is to audit the existing codebase first and then build the production-grade public website and acquisition flow without breaking the Retail ERP.

==================================================
1. FIRST: AUDIT
==================================================

Before coding, inspect:

- repository structure
- existing Retail frontend
- existing Platform Super Admin
- existing auth
- tenant/user/org models
- subscription and plan models
- feature-entitlement system
- onboarding
- referral code if any
- import/migration code
- contact/support code
- deployment config
- disk usage
- existing tests

Return a concise implementation gap matrix first.

Do not create duplicate V2 systems where working architecture already exists.

==================================================
2. LOCKED BRAND
==================================================

Brand:
Apna Galla

Domain:
ApnaGalla.com

Tagline:
Dukaan ka hisaab. Bas poochho.

Secondary:
Bill banao. Khata rakho. Stock sambhalo. Business se kuch bhi poochho.

Do not lead public pages with “ERP”.

==================================================
3. LOCKED PLANS
==================================================

STARTER — ₹75/month
Run your shop

SMART — ₹120/month
Understand your shop
MOST POPULAR

PRO — ₹210/month
Advanced control + Voice

Rules:
- Voice = Pro only
- GST = Smart + Pro
- User-facing Profit/COGS = Smart + Pro
- Internal backup/data safety = every paid plan
- Starter export = Items + Stock
- Smart = business/customer/report exports
- Pro = Complete Business Export

==================================================
4. MARKETING SITE ARCHITECTURE
==================================================

Preferred:
`/marketing-site`

Tech:
Astro + TypeScript

Use React only for interactive islands.

If current repository constraints strongly favor another static-first framework, document why before changing.

Do NOT reuse the entire heavy ERP SPA bundle for marketing.

==================================================
5. REQUIRED ROUTES
==================================================

Implement:

/
 /features
 /pricing
 /business-types
 /ask-apna-galla
 /support
 /contact
 /about
 /login
 /signup
 /privacy
 /terms
 /refund-policy
 /data-security
 /referral-terms

Add branded 404.

==================================================
6. DESIGN
==================================================

Use approved Stitch design as visual truth.

Priority:
1 screen.png
2 code/reference
3 shared design tokens
4 PRD

Do not copy Stitch mock business logic.

No runtime Tailwind CDN.
No raw Stitch assets in production.
No test screenshots in production.

==================================================
7. HOMEPAGE
==================================================

Hero:
Apna Galla
Dukaan ka hisaab. Bas poochho.

Subcopy:
Billing, stock, khata, purchases, expenses aur business ke sawaalon ka jawab — ek simple app mein.

CTA:
Start Free
See Plans

Link:
Already using Apna Galla? Sign In

Then:
capabilities
Ask Apna Galla
business types
pricing
migration
trust
FAQ
final CTA
footer

==================================================
8. PRICING
==================================================

Use one source of truth.

Do not hardcode the same price in many components.

If a safe public plans endpoint exists, reuse it.
Otherwise create a clean public pricing config.

Never expose tenant-specific overrides publicly.

==================================================
9. CONTACT / DEMO
==================================================

Implement secure public form.

Fields:
name
mobile
email
businessName
city
reason
message

Reasons:
DEMO
PRICING
SUPPORT
MIGRATION
PARTNERSHIP
OTHER

Backend:
validate
sanitize
rate limit
spam protection
persist request
capture page/UTM/referral if available

If email provider is absent, persist and show truthful success.
Do not pretend notification was sent.

==================================================
10. SUPPORT
==================================================

Build simple help landing with categories.

Static FAQ/help content can live in markdown/content files.

==================================================
11. AUTH ENTRY
==================================================

Target:
Mobile OTP
Google

Reuse existing auth.

Do not duplicate auth in marketing site and app.

Public `/login` and `/signup` can either host a thin branded entry or hand off to the application.

==================================================
12. ONBOARDING
==================================================

Ensure:
Owner Name
Shop Name
Business Type
Address
Plan/Trial
Migration choice

Onboarding must resume if interrupted.

==================================================
13. BUSINESS TYPE
==================================================

Business Type only recommends sensible features.

Do not fork separate products per vertical.

==================================================
14. TRIAL
==================================================

Trial is not a fourth plan.

Reuse subscription:
plan template + TRIAL status + dates.

==================================================
15. REFERRAL
==================================================

Preserve:
`?ref=CODE`

through redirects and onboarding.

Do not expose tenant UUID.

Rewards come from platform configuration.

No hardcoded cash reward.

==================================================
16. DATA MIGRATION
==================================================

Show:
Start Fresh
Import Existing Data

Only advertise actually implemented sources.

Do not claim direct competitor migration without verification.

==================================================
17. BACKUP / EXPORT
==================================================

Display accurately:

Automatic backup:
all paid plans

Starter:
items + stock export

Smart:
customer/supplier/khata/sales/purchase/expense/GST/profit exports

Pro:
complete business export

==================================================
18. ASK APNA GALLA
==================================================

Starter:
basic deterministic text questions

Smart:
Business Insights

Pro:
Voice

If voice is not implemented:
show Coming Soon / availability state.

==================================================
19. SEO
==================================================

Every page:
title
description
canonical
OG metadata
semantic headings

Generate:
sitemap.xml
robots.txt

Add structured data only where truthful.

==================================================
20. ACCESSIBILITY
==================================================

Keyboard navigation
Visible focus
Labels
Alt text
Contrast
44px touch targets
Reduced motion
Correct dialog focus behavior

==================================================
21. PERFORMANCE
==================================================

Aim for:
Performance 90+
Accessibility 90+
SEO 90+
where realistic.

Avoid:
large videos
huge image assets
unnecessary client JS
large icon packs
eager hydration

==================================================
22. ANALYTICS
==================================================

Implement provider abstraction.

Track:
page_view
pricing_view
plan_cta_click
start_free_click
demo_request
contact_submit
signup_click
login_click
referral_entry

Never send ERP customer/transaction data.

==================================================
23. LEGAL
==================================================

Create content-ready:
Privacy
Terms
Refund Policy
Data Security
Referral Terms

If final legal text is not approved, mark source as draft internally.

==================================================
24. MARKETING TRUTH GATE
==================================================

Do not falsely market:
Voice
Offline Native
WhatsApp Assistant
GST Filing
IRN
direct third-party migration
fake testimonials
fake customer count

==================================================
25. PLATFORM INTEGRATION
==================================================

Platform Super Admin remains authority for:
plans
subscriptions
trials
feature overrides
limits
referrals
payments

Marketing site only reads public-safe catalog data.

==================================================
26. DISK/CACHE CLEANUP
==================================================

Repository previously reached about 2.5–2.7 GB.

Audit first.

Check:
node_modules
dist
coverage
playwright-report
test-results
.vite
.cache
logs
tmp
Stitch references
ZIPs
screenshots
generated PDFs
source maps
.git size
duplicate deps

Create:
docs/verification/DISK_USAGE_AUDIT.md

Create safe scripts:
scripts/audit-disk-usage.ps1
scripts/clean-dev-artifacts.ps1

Cleanup script must support dry-run.

Do NOT delete:
source
Prisma migrations
package-lock
production assets
database
required fixtures
env values without proper migration

==================================================
27. .GITIGNORE / DEPLOY IGNORE
==================================================

Audit:
.gitignore
.dockerignore if relevant
host build context

Exclude generated/test/reference assets from production.

==================================================
28. FRONTEND BUNDLE AUDIT
==================================================

Report:
JS total
CSS total
largest chunks
largest images/assets
source maps
unused/duplicate packages

Use lazy loading where appropriate.

==================================================
29. DOCUMENTATION
==================================================

Create/update:

docs/APNA_GALLA_PUBLIC_WEBSITE.md
docs/APNA_GALLA_BRAND.md
docs/APNA_GALLA_PRICING.md
docs/APNA_GALLA_AUTH_ONBOARDING.md
docs/APNA_GALLA_REFERRALS.md
docs/verification/APNA_GALLA_WEBSITE_QA.md
docs/verification/DISK_USAGE_AUDIT.md

==================================================
30. RESPONSIVE TESTS
==================================================

Test:
360×800
390×844
412×915
768
1280
1440

Verify all public routes and forms.

==================================================
31. NO REGRESSION
==================================================

Must not break:
Retail ERP
subscription entitlements
GST
profit/accounting
tenant isolation
Platform Super Admin
existing APIs

Run full regression after integration.

==================================================
32. FINAL REPORT
==================================================

Return:

MARKETING
Home PASS/FAIL
Features PASS/FAIL
Pricing PASS/FAIL
Business Types PASS/FAIL
Ask Apna Galla PASS/FAIL
Support PASS/FAIL
Contact PASS/FAIL
About PASS/FAIL
Legal PASS/FAIL
404 PASS/FAIL

AUTH
Login PASS/FAIL
Signup PASS/FAIL
Referral preservation PASS/FAIL
Onboarding resume PASS/FAIL

PRICING
Starter ₹75 PASS/FAIL
Smart ₹120 PASS/FAIL
Smart Most Popular PASS/FAIL
Pro ₹210 PASS/FAIL
Voice Pro only PASS/FAIL
Backup all paid PASS/FAIL
Export tiers PASS/FAIL

QUALITY
360 PASS/FAIL
390 PASS/FAIL
412 PASS/FAIL
Tablet PASS/FAIL
Desktop PASS/FAIL
Accessibility PASS/FAIL
SEO PASS/FAIL
Performance PASS/FAIL

BUILD
Marketing PASS/FAIL
Frontend PASS/FAIL
Backend PASS/FAIL
Regression ___ passed / ___ failed

DISK
Before ___
After safe cleanup ___
Removed ___

Only declare:

# APNA GALLA PUBLIC WEBSITE VERIFIED

when all critical launch gates pass.



---

# FILE: 07_BACKEND_API_SPEC.md

# Apna Galla — Backend/API/Data Requirements

Reuse existing NestJS + Prisma architecture.

## Public Plan Catalog

Optional:
`GET /api/v1/public/plans`

Return:
- plan key
- name
- public price
- tagline
- public feature highlights
- Most Popular
- trial availability

Never expose:
- tenant overrides
- private notes
- internal feature debugging
- private limits unless intentionally public

## Contact / Demo

Suggested:
`POST /api/v1/public/contact`

Fields:
- name
- mobile
- email
- businessName
- city
- reason
- message
- page
- referrer
- UTM metadata
- referral code if present

Requirements:
- validation
- sanitization
- rate limiting
- spam protection
- persistence
- createdAt
- status

Potential statuses:
NEW
CONTACTED
QUALIFIED
CLOSED
SPAM

## Authentication

Providers:
MOBILE_OTP
GOOGLE
PASSWORD only where legacy/required

Rules:
- normalize phone numbers
- prevent duplicate accounts
- safe identity linking
- no OTP logs
- no OTP in production responses
- no plaintext password
- rate-limit send/verify

## Onboarding State

Suggested:
AUTH_VERIFIED
OWNER_PROFILE_REQUIRED
BUSINESS_PROFILE_REQUIRED
PLAN_REQUIRED
MIGRATION_OFFERED
READY

Persist authoritatively.

## Trial

Reuse subscription model:
- planKey
- status TRIAL
- startsAt
- endsAt
- convertedAt

## Referral

Conceptual:
ReferralCode
ReferralAttribution
ReferralCampaign
ReferralReward

Track:
- referrer
- referred account/tenant
- signup
- trial
- paid conversion
- qualification
- reward

Prevent:
- self-referral
- duplicate reward
- duplicate conversion

## Import Job

Conceptual:
- id
- tenantId
- userId
- sourceType
- file metadata
- mapping
- status
- validRows
- warnings
- errors
- importedRows
- timestamps

Never trust tenantId sent by browser without server-side authorization.

## Security

Public:
- strict validation
- CORS allow-list
- rate limits
- security headers
- abuse monitoring

Private:
- authentication
- tenant scoping
- role authorization

## Notifications

If email/SMS provider is not configured:
- persist lead
- return truthful receipt
- do not pretend notification was delivered

## Audit

Audit where appropriate:
- signup
- referral attribution
- plan selection
- trial conversion
- contact status changes
- imports
- platform manual overrides

## Retention

Document retention for:
- contact leads
- temporary import files
- referral logs
- auth logs
- support requests



---

# FILE: 08_FRONTEND_SPEC.md

# Apna Galla — Frontend Implementation Specification

## Recommended

Astro + TypeScript for marketing.

React only for:
- contact form
- pricing comparison
- FAQ
- Assistant demo
- signup/referral handoff

## Suggested Structure

```text
marketing-site/
  src/
    components/
    layouts/
    pages/
    content/
    styles/
    lib/
  public/
```

## Shared Components

- Header
- MobileMenu
- Footer
- Hero
- CTAButton
- FeatureCard
- BusinessTypeCard
- PlanCard
- PlanComparison
- AssistantDemo
- FAQ
- TrustCard
- ContactForm
- LegalLayout
- AvailabilityBadge

## Breakpoints

Primary:
390×844

Also test:
360×800
412×915
768
1280
1440

## Forms

Every form needs:
- visible label
- validation
- loading state
- success
- server error
- retry path

## Content

Keep prices/copy in shared structured config.

Do not duplicate values manually across pages.

## Images

- responsive sizes
- WebP/AVIF where appropriate
- lazy loading below fold
- explicit dimensions
- no raw Stitch screenshots

## Icons

Use one lightweight family.
Tree-shake imports.

## Accessibility

- landmarks
- keyboard menu
- focus states
- labels
- alt text
- dialog focus trapping
- contrast
- reduced motion

## SEO

Every page:
- title
- description
- canonical
- Open Graph
- semantic heading hierarchy

Generate:
- sitemap
- robots
- favicon/app icons
- social share image

## Errors

Provide:
- 404
- contact error
- API unavailable
- auth handoff unavailable

Never show stack traces.

## Environment

Use environment variables for:
- app URL
- backend public API
- analytics provider
- support settings

Never expose secrets.



---

# FILE: 09_AUTH_ONBOARDING_REFERRAL_MIGRATION.md

# Apna Galla — Auth, Onboarding, Referral & Migration

## Authentication

Primary:
- Mobile OTP
- Google

Optional legacy:
- Email/password

## Mobile OTP

Flow:
1. enter number
2. normalize
3. send OTP
4. verify
5. create/login user
6. issue secure session

Requirements:
- expiry
- resend limit
- attempt limit
- rate limit
- no OTP logs
- no OTP in production response

## Google

- server-side identity validation
- find/link/create account
- continue onboarding

Do not trust only frontend profile data.

## Identity Linking

Phone + Google can link to one account.
Never merge based only on matching names.

## Business Setup

Fields:
- Owner Name
- Shop Name
- Business Type
- Address
- City
- State
- PIN

## Business Type Presets

Examples:
Pharmacy → recommend Batch/Expiry/Multi-unit
Garments → Variants/Images
Hardware → Length/Multi-unit
Grocery → Stock/Khata

Plan entitlement still decides access.

## Plan Choice

Starter ₹75
Smart ₹120
Pro ₹210

Trial can be offered if enabled.

## Trial

Not a fourth plan.
Plan template + TRIAL status + dates.

## Migration

Start Fresh
or
Import Existing Data

Show only real supported imports.

## Referral

Referral comes from:
- `?ref=CODE`
- manual code

Preserve through auth/onboarding.

Owner screen:
- code
- copy
- share
- referred shops
- statuses
- reward state

Platform:
- campaigns
- qualification
- reward type
- fraud flags
- manual review
- audit

Do not hardcode reward amount.

## Trial End

- preserve data
- show plan choice
- restrict access according to policy
- never delete shop records

## Payment

No fake success.
If provider unavailable:
Contact Support / Request Activation.

## Password Security

Super Admin cannot view passwords.

Allowed:
- send reset
- force reset
- revoke sessions
- temporary one-time credential only if policy supports
- support access

## Onboarding Resume

Persist last completed stage.
Do not restart completed onboarding.

## Funnel Analytics

Track only non-sensitive funnel events:
signup_started
otp_verified
google_verified
owner_profile_complete
business_profile_complete
plan_selected
trial_started
migration_choice
onboarding_complete



---

# FILE: 10_SUPER_ADMIN_SPEC.md

# Apna Galla — Platform Super Admin Specification

## Purpose

Platform Super Admin is the SaaS control plane.

It should manage:
- Tenants
- Users
- Plans
- Subscriptions
- Trials
- Feature Overrides
- Limits
- Payments
- Referrals
- Support
- Sessions/Devices
- Audit
- Backup Health
- System Health

## Tenant List

Show:
- Shop / Organization
- Owner
- Phone
- Email
- Plan
- Subscription Status
- Access End
- User Count
- Override Count
- Created Date
- Last Activity
- Tenant Status
- Referral Source

Search:
- shop
- owner
- phone
- email
- tenant display code

## Tenant Detail

Tabs:
- Overview
- Owner & Contacts
- Subscription
- Features & Entitlements
- Limits
- Users
- Devices & Sessions
- Data / Usage
- Imports
- Referrals
- Payments
- Support
- Audit
- Danger Zone

## Tenant Identifier

Primary database tenant ID should remain immutable.

Allow editable:
- Display Code
- Slug
- External Reference

## Password Rule

Never display existing customer passwords.

Allowed:
- Send Password Reset
- Force Password Reset
- Sign Out All Sessions
- Revoke Device
- Support Access

## Subscription

Plans:
STARTER
SMART
PRO

Platform can:
- assign plan
- upgrade
- downgrade
- extend access
- trial
- suspend/reactivate
- manually activate with reason and audit

## Feature Overrides

For every eligible feature:
- INHERIT
- FORCE ENABLE
- FORCE DISABLE

Show:
- Plan Default
- Override
- Commercial Entitlement
- Shop Toggle
- Configured
- Effective State

## Numeric Limits

Support:
- Inherit Plan Limit
- Custom Limit

Examples:
- Staff
- Locations
- Storage
- Documents
- Voice usage if relevant

## Tenant Lifecycle

Actions:
- Suspend
- Reactivate
- Archive
- Restore
- Permanent Delete

Permanent delete:
- typed confirmation
- dependency preview
- reason
- retention/legal checks
- audit
- safe background process if needed

## Support Access

Audited support/impersonation:
- reason required
- time-limited
- visible Support Mode banner
- read-only by default where practical
- audit all mutations

## Referral Admin

Show:
- Referrer
- Referred Tenant
- Plan
- Status
- Conversion
- Reward
- Campaign
- Fraud flags

## Audit

Audit:
- tenant creation
- tenant edit
- plan changes
- trial changes
- feature overrides
- limit changes
- suspension/reactivation
- password reset triggers
- session revocation
- support access
- referral manual actions
- payment/subscription manual overrides
- deletion lifecycle

## Data Safety

Automatic backup is system-required and should not have a normal commercial Force Disable control.



---

# FILE: 11_SEO_SUPPORT_LEGAL_ANALYTICS.md

# Apna Galla — SEO, Support, Legal & Analytics Checklist

## SEO

Homepage title:
**Apna Galla — Billing, Stock, Khata & Business Insights for Indian Shops**

Description:
**Manage billing, stock, khata, purchases, expenses, GST and reports in one simple app. Ask Apna Galla questions about your own business data.**

Search themes:
- billing software for shops
- retail billing software India
- inventory software
- khata app
- GST billing
- grocery billing
- pharmacy billing
- garment shop software
- hardware shop software

Technical:
- canonical
- sitemap.xml
- robots.txt
- OG
- social card
- correct H1/H2
- valid 404

## Analytics

Track:
- page_view
- pricing_view
- plan_cta_click
- start_free_click
- login_click
- signup_click
- demo_request
- contact_submit
- referral_entry

Never send ERP transaction/customer data.

## Support

Categories:
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

## Legal

Required:
- Privacy
- Terms
- Refund Policy
- Data Security
- Referral Terms

Do not claim:
- certifications not held
- guaranteed uptime not contracted
- GST filing not implemented
- encryption standard not verified



---

# FILE: 12_QA_LAUNCH_CHECKLIST.md

# Apna Galla — QA & Launch Checklist

## Brand
- [ ] Apna Galla used publicly
- [ ] ApnaGalla.com correct
- [ ] old public brand removed where intended
- [ ] internal technical names changed only if planned

## Pricing
- [ ] Starter ₹75
- [ ] Smart ₹120
- [ ] Pro ₹210
- [ ] Smart Most Popular
- [ ] Voice Pro only
- [ ] GST Smart + Pro
- [ ] Profit Smart + Pro
- [ ] Backup all paid plans
- [ ] Starter Item + Stock export
- [ ] Smart operational export
- [ ] Pro complete export

## Public Pages
- [ ] Home
- [ ] Features
- [ ] Pricing
- [ ] Business Types
- [ ] Ask Apna Galla
- [ ] Support
- [ ] Contact
- [ ] About
- [ ] Login
- [ ] Signup
- [ ] Privacy
- [ ] Terms
- [ ] Refund Policy
- [ ] Data Security
- [ ] Referral Terms
- [ ] 404

## Mobile
- [ ] 360×800
- [ ] 390×844
- [ ] 412×915
- [ ] no horizontal overflow
- [ ] readable typography
- [ ] 44px touch targets
- [ ] plan cards usable
- [ ] forms usable

## Desktop
- [ ] 768
- [ ] 1280
- [ ] 1440

## Auth
- [ ] Mobile OTP
- [ ] Google
- [ ] duplicate-account protection
- [ ] onboarding resume
- [ ] referral persistence
- [ ] no plaintext password exposure

## SEO
- [ ] titles
- [ ] descriptions
- [ ] canonical
- [ ] sitemap
- [ ] robots
- [ ] OG
- [ ] social image

## Accessibility
- [ ] keyboard
- [ ] focus
- [ ] labels
- [ ] alt text
- [ ] contrast
- [ ] reduced motion

## Performance
- [ ] no raw Stitch assets
- [ ] no test artifacts deployed
- [ ] no node_modules shipped as static files
- [ ] optimized images
- [ ] minimal client JS
- [ ] source-map policy reviewed

## Truthfulness
Do not show as live unless verified:
- [ ] Voice
- [ ] offline native
- [ ] WhatsApp
- [ ] GST filing
- [ ] IRN
- [ ] direct competitor migration
- [ ] testimonials
- [ ] customer counts

## Regression
- [ ] Retail frontend builds
- [ ] backend builds
- [ ] Prisma validates
- [ ] tenant isolation passes
- [ ] subscription entitlements unaffected
- [ ] GST unaffected
- [ ] profit/accounting unaffected
- [ ] Super Admin unaffected

## Disk Cleanup
- [ ] disk audit created
- [ ] node_modules excluded
- [ ] dist excluded where generated
- [ ] coverage excluded
- [ ] playwright/test-results excluded
- [ ] caches excluded
- [ ] raw Stitch references excluded from deploy
- [ ] ZIPs reviewed
- [ ] generated screenshots/PDFs reviewed
- [ ] safe cleanup dry-run tested
- [ ] before/after size documented

## Final Launch Gate
- [ ] pricing correct
- [ ] copy truthful
- [ ] contact form persists requests
- [ ] signup/login handoff works
- [ ] legal pages available
- [ ] mobile UX passes
- [ ] no cross-tenant exposure
- [ ] no secrets in browser bundle
- [ ] production domain/SSL configured
- [ ] analytics/privacy decision documented

