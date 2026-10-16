# Daily shopkeeper guide publication

Schedule: one run daily at **09:00 India time (Asia/Kolkata)**. Language: **English with Hindi/Hinglish explanations**. The Codex thread automation is the scheduler; a running/available Codex host and network/Git credentials are required. This is not a separate publishing server installed on Netlify.

## Scope and safety

Work only in `D:/Apna galla` (GitHub `apnagalla53-alt/apnagalla-website`, branch `main`). Read applicable AGENTS.md. Preserve unrelated changes. Do not use `git reset --hard`, force-push, amend someone else's work, change DNS, modify shop records or touch credentials. Never publish from `D:/evolix-trade-erp`, whose root Git remote is a legacy repository. Product docs there can be read for fact checking only. Do not run production-mutating tests or use the operator account.

Check branch, remote, working tree and remote main before writing. If there are unrelated modifications, divergence or a conflict, do not stage or deploy them. Leave a concrete explanation rather than guessing. Normal publication is already authorized by the owner; it does not authorize an Instagram post, email or new paid service.

## Select one original topic

1. Use the current India calendar date. If a non-draft article already has that date, skip publishing another one. The initial library intentionally contains six guides published on 16 October 2026.
2. Read existing guides and `EDITORIAL_CALENDAR.csv`. Choose the earliest useful unpublished idea; do not write another spelling variant of an existing article. Calendar dates are planning targets, never fake publication dates. Extend the calendar with distinct reader problems when needed.
3. Verify product claims using current feature pages, plan data in `src/lib/content.ts` and actual product documentation. Preserve plan restrictions and activation terms. Do not claim a coming-soon feature is available.
4. If the subject needs current legal, financial, tax or other unstable facts, consult authoritative primary sources and link them. Prefer an ordinary shop workflow that can be explained accurately. Do not invent GST rates, statutory duties, professional advice or accountant review.

## Write and check

Create one Markdown file in `marketing-site/src/content/blog/`, using `BLOG_TEMPLATE.md`. The schema validates required fields. Use a stable descriptive slug, a unique title and a readable summary. Begin by answering the primary question. Aim for a useful 450–900 words; do not pad the article merely to hit a count. Include a checked illustrative example or checklist, a short Hindi/Hinglish explanation, at least two genuine FAQs and at least two relevant internal product links.

Avoid keyword stuffing, fake statistics, copied articles, invented personal/customer experience, repetitive introductions, guaranteed rankings, and unverified product instructions. Unknown stock and unknown cost remain explicit. Collections are not new sales; supplier settlements are not duplicate purchase expenses. Respect the accounting engine and commercial plans.

The common template already discloses AI assistance and renders dates, schema, related guides and the account CTA. Use today's real publication date. An update date changes only after a material edit and cannot be in the future. Set `draft: true` for incomplete work; do not publish a weak article because the clock says so. Update the selected calendar row with actual publication date/slug and status `published` only after successful release.

## Validate before pushing

From `marketing-site` run:

```text
npm ci
npm run verify
```

This checks Astro types, the existing interactive billing demo, a production build and SEO tests. The SEO audit verifies canonical URLs, unique titles/descriptions, one H1, structured data, visible FAQs, substantive bilingual articles, valid XML, sitemap/feed completeness, dates, drafts, local links/assets/fragments and routing/security agreement.

Read the actual article and arithmetic once more. If a layout/template changed, preview it at a mobile width and check browser errors using the available approved browser tools. Do not test signup by accepting terms or creating real production accounts.

## Publish and verify

Stage only the new guide and the related calendar entry (plus an explicitly necessary reviewed correction). Use a normal descriptive commit and a normal push to the verified website `main`. Never include `.env`, credentials, caches, `node_modules`, browser downloads, screenshots or generated `dist`. Let the existing GitHub → Netlify connection deploy.

Check the public article URL, `/sitemap-index.xml` and its child sitemap, `/rss.xml`, `/blog/`, canonical and JSON-LD after deployment. Verify that the new URL is present and its actual content is fresh. Allow the existing deploy to finish; do not queue repeated deployments because a check is temporarily pending. Do not claim indexing or traffic gains from an HTTP 200 response.

If the push/deploy fails, report the specific step and preserve the work. Do not rotate credentials, bypass browser permissions, purchase a plan or send secrets through chat. Instagram remains a profile link unless the owner separately authorizes actual social publishing.
