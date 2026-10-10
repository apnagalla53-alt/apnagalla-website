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
