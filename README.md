# apnagalla-website

Official marketing website and platform documentation for **Apna Galla** — Retail billing, inventory, and business management software.

## Project Structure

- `marketing-site/`: Astro static marketing site configured for Netlify hosting.
- `netlify.toml`: Pre-configured Netlify build pipeline settings (`base = "marketing-site"`, `publish = "dist"`, `command = "npm run build"`).
- `references/`: UI designs and specifications.
- `*.md`: Product requirement documents and architecture specs.

## Local Development

```bash
cd marketing-site
npm install
npm run dev
```

## Build

```bash
cd marketing-site
npm run build
```
