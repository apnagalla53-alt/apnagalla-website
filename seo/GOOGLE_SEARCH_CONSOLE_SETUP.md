# Google Search Console: exact URLs and owner steps

## Production URLs

| Resource | Exact URL |
| --- | --- |
| Website | https://apnagalla.in/ |
| Sitemap to submit | **https://apnagalla.in/sitemap-index.xml** |
| Current child sitemap | https://apnagalla.in/sitemap-0.xml |
| Compatibility alias | https://apnagalla.in/sitemap.xml → sitemap-index.xml |
| Robots file | **https://apnagalla.in/robots.txt** |
| Blog library | https://apnagalla.in/blog/ |
| RSS feed | https://apnagalla.in/rss.xml |
| Optional public reading aid | https://apnagalla.in/llms.txt |
| Glossary | https://apnagalla.in/glossary/ |
| Editorial policy | https://apnagalla.in/editorial-policy/ |

## 1. Verify the owner's property

Open [Google Search Console](https://search.google.com/search-console/) while signed into the Google account that should own the website. Choose **Add property → Domain** and enter `apnagalla.in` without a scheme or path. A Domain property includes its subdomains and protocols; the marketing sitemap lists only public marketing pages.

A `google-site-verification` DNS TXT record was already publicly visible on 16 October 2026. Keep it. If it belongs to this Google account, use Verify or open the existing property. Its presence alone does not prove that this account owns the Search Console property. If Google issues a different record for the intended owner, add the exact Google-provided record through the domain DNS provider and keep existing valid records. Do not change the working website/app/API DNS records.

No Google account was accessed and no Search Console property was submitted by this implementation.

## 2. Submit the sitemap

In the verified property, open **Sitemaps** and submit `https://apnagalla.in/sitemap-index.xml`. The index points to generated child sitemap(s); do not separately maintain a hand-written URL list. The current child is `sitemap-0.xml`, and it may expand when the library grows.

Check the submission result after Google processes it. Publishing a sitemap is not confirmation that Google has indexed all its URLs.

## 3. Inspect priority pages

Use URL inspection for the homepage, `/features/billing/`, `/features/khata/`, `/blog/` and one new article. Check the reported canonical, crawl permission and rendered content. Request indexing where appropriate; do not repeatedly submit unchanged pages.

Test the homepage and an article with [Google Rich Results Test](https://search.google.com/test/rich-results). Valid schema does not guarantee a special result display. FAQ rich-result eligibility is restricted; visible FAQs are primarily there to help readers.

Login/signup/404 pages are deliberately `noindex`. They must not be added to the marketing sitemap to increase the page count. The app has its own authentication; the robots file is not an access control system.

## Optional URL-prefix verification

If the owner chooses an HTML-tag verification method for `https://apnagalla.in/`, copy only the actual token supplied by Google into Netlify's public build variable `PUBLIC_GOOGLE_SITE_VERIFICATION`, then rebuild the marketing site. The layout emits the meta tag only when a non-empty value is configured. Verification tokens are public identifiers, not account credentials.

For Google's HTML-file method, the exact filename and contents must come from Google. Put that exact file in `marketing-site/public/`, deploy it, check its root URL, and then click Verify. No placeholder verification file is included, because an invented file cannot prove ownership. The existing DNS method needs no HTML verification file.

## Files and regeneration

`marketing-site/public/robots.txt` is source-controlled. Astro generates the sitemap XML, RSS and optional `llms.txt` into `marketing-site/dist/` at build time. Keep all generated URLs on HTTPS `apnagalla.in`. Do not upload a stale local sitemap on top of an automatic build.

See [Google's ownership verification documentation](https://support.google.com/webmasters/answer/9008080) and [sitemap guide](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
