# Apna Galla search and content kit

Implemented 16 October 2026. Language: English with Hindi/Hinglish explanations. Website: https://apnagalla.in. App: https://app.apnagalla.in.

- [Strategy and measurement](SEO_STRATEGY.md)
- [Search Console setup and exact crawler URLs](GOOGLE_SEARCH_CONSOLE_SETUP.md)
- [Natural-language keyword and intent map](KEYWORD_MAP.csv)
- [Thirty-day editorial calendar](EDITORIAL_CALENDAR.csv)
- [Daily publication workflow](DAILY_BLOG_WORKFLOW.md)
- [Article template](BLOG_TEMPLATE.md)

The live website generates `robots.txt`, `sitemap-index.xml`, `sitemap-0.xml`, `rss.xml` and `llms.txt`. Sitemap and RSS entries follow the same published content collection. Drafts and future-dated articles stay out of pages and feeds. The optional `llms.txt` is a reading aid, not a Google requirement or ranking instruction.

Source lives under `marketing-site/`: `src/lib/seo.ts`, `src/layouts/BaseLayout.astro`, `src/content.config.ts`, `src/content/blog/`, `src/lib/blog*.ts`, `src/pages/blog/`, `src/pages/rss.xml.ts`, `src/pages/llms.txt.ts`, `public/robots.txt` and the glossary/FAQ components. Both repository and app `netlify.toml` retain matching routing and security rules.

From `marketing-site`, run `npm ci` then `npm run verify`. This checks Astro types, existing interactive billing demo tests, a production build and the SEO audit. Built files go into ignored `dist/`; upload source through the existing GitHub → Netlify deployment, not a separate manually maintained sitemap.

Instagram is connected as a visible profile link and Organization `sameAs`: https://www.instagram.com/apnagalla.in/. This does not authenticate the Instagram account, import a feed or publish social posts.

The owner's Search Console verification/submission remains an account action. A public Google verification DNS TXT record was observed on 16 October 2026 and preserved. No ownership claim, indexing result, traffic increase or ranking is fabricated.
