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
