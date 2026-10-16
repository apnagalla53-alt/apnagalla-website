# Search strategy for Indian shopkeepers

## Audience and intent

Help a retailer solve a concrete counter or closing-time problem. Natural spellings include hisaab/hisab, vyapaar/vyapar, udhaar/udhar and bahi-khata. Explain those spellings in relevant prose and the glossary; do not repeat a keyword list in every heading. English pages include useful Hindi/Hinglish explanations. They are not separate Hindi translations, so there is no invented Hindi `hreflang` version.

The keyword CSV is an editorial hypothesis, not measured search-volume data. It groups real-world questions by intent and assigns one preferred destination. Do not create near-identical spelling, city or business pages solely to capture variants.

| Intent | Main destination | Useful answer |
| --- | --- | --- |
| Choose billing software | `/features/billing/` | Item bills, Quick Bill, amount-only sales, payment methods and zero-setup start |
| Track customer credit | `/features/khata/` | Running dues and partial collections; collection is not a second sale |
| Count stock | `/features/inventory/` | Opening quantities, purchases and clearly unknown stock |
| Close the drawer | `/features/daily-galla/` | Cash movements, separate UPI, expected versus physical cash |
| Record supplier purchases | `/features/purchases/` | Purchase, supplier payable and settlement without double counting |
| Understand profit | `/features/profit/` | Genuine costs, expenses and partial/unknown cost coverage |
| Choose for a shop type | `/business-types/` and ten distinct shop pages | Relevant units and workflows, with plan eligibility |
| Learn a daily routine | `/blog/` | Original worked examples and practical checklists |
| Understand shop language | `/glossary/` | Hisaab, khata, galla, vasooli, stock and supplier dues |

## Technical implementation

- Static, crawlable HTML for guides, answers and product copy; no client-side rendering dependency for article text.
- Unique page titles/descriptions, exactly one H1, clean production canonicals that omit tracking parameters, absolute social images and a consistent `en-IN` language.
- Organization, WebSite, WebPage, BreadcrumbList, SoftwareApplication and BlogPosting JSON-LD where appropriate. Visible FAQ answers match their markup. No fake ratings, customer experiences, local offices or review counts.
- Auth pages and 404 use `noindex,follow`; public resources remain crawlable. The robots file blocks the API path only. Robots is not authentication or data security.
- Generated sitemap index and RSS, with `/sitemap.xml` redirected to the index. Publication dates are real; rebuilds do not pretend every page was recently edited.
- Search Console verification supports a real owner-provided meta token if needed. The existing domain DNS verification record is preserved.
- Internal links connect guides, features, shop pages, glossary and account creation. Related content remains readable without scripts.
- WebP branding, local fonts, hashed immutable assets and existing security headers remain in place. Articles add no browser JavaScript. No Instagram embed or tracking SDK is loaded.
- `llms.txt` links to public guides and product facts. It is optional and does not override crawler policies or promise AI visibility.

## Content quality and commercial accuracy

Publish one useful guide per day when it passes review. Skip repetitive or unsupported topics. Every guide answers its primary question near the beginning, uses a checked illustrative example where helpful, includes a short Hinglish explanation, and links to relevant product workflows. Disclose AI assistance and provide a corrections route through the editorial policy.

Preserve Starter/Smart/Pro boundaries, current prices and activation terms. Voice features labelled coming soon stay described that way. Missing cost does not become zero cost; unknown stock does not become zero stock. Product content must be checked against current product documentation/code, not inferred from keywords. Do not invent tax rates, compliance guarantees, customer results, revenue claims or clinical advice.

## Measurement after release

In Search Console, record a baseline, then compare equivalent 28-day periods. Check submitted sitemap status, indexed pages, excluded pages, query impressions, clicks, CTR and search position. Group observed queries into Billing, Khata, Stock, Galla and shop types; update the editorial map with actual queries rather than claiming hypothetical volume.

Review low-CTR pages only after meaningful impressions; improve titles to match their content. Review indexing exclusions before adding more pages. Use the URL inspection and rich-results tools for specific pages after substantial changes. Sitemaps aid discovery and do not guarantee indexing or a ranking.

No analytics service or cookie identifier has been added silently. Conversion measurement can use an explicitly configured first-party analytics system later. Search Console performance data is sufficient to begin measuring organic discovery.

## Primary guidance consulted

- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Google: AI search optimization](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: building a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google: robots meta directives](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Google: ownership verification](https://support.google.com/webmasters/answer/9008080)
