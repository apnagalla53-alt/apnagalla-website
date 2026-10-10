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
