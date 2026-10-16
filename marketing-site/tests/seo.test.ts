import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';
import { parse } from 'parse5';
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { canonicalUrl, jsonLd, SITE, INSTAGRAM } from '../src/lib/seo.ts';
import { indiaDate, isPublished } from '../src/lib/blog-policy.ts';

const dist = resolve('dist');
assert.ok(existsSync(dist), 'Run npm run build before the SEO audit');
function files(dir: string): string[] {
  return readdirSync(dir).flatMap(name => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : [path];
  });
}
// parse5 handles generated HTML using the same parsing rules as browsers.
type Node = { tagName?: string; value?: string; attrs?: { name: string; value: string }[]; childNodes?: Node[] };
const attr = (node: Node, name: string) => node.attrs?.find(a => a.name === name)?.value;
function nodes(node: Node): Node[] { return [node, ...(node.childNodes || []).flatMap(nodes)]; }
function text(node: Node, visible = true): string {
  if (visible && ['script', 'style'].includes(node.tagName || '')) return '';
  return node.value || (node.childNodes || []).map(n => text(n, visible)).join(' ');
}
const norm = (value: string) => value.replace(/\s+/g, ' ').trim();
const pages = files(dist).filter(p => p.endsWith('.html')).map(path => {
  const html = readFileSync(path, 'utf8'), doc = parse(html) as Node, all = nodes(doc);
  const pathname = '/' + relative(dist, path).replaceAll('\\', '/').replace(/index\.html$/, '');
  const meta = (name: string) => all.find(n => n.tagName === 'meta' && (attr(n, 'name') === name || attr(n, 'property') === name));
  const schemas = all.filter(n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json').flatMap(n => JSON.parse(text(n, false))['@graph']);
  return { path, pathname, all, meta, schemas, visible: norm(text(doc)), html };
});
const byUrl = new Map(pages.map(p => [new URL(p.pathname, SITE).href, p]));
const blogs = pages.filter(p => /^\/blog\/.+\/$/.test(p.pathname));
const xml = new XMLParser({ ignoreAttributes: false });
function readXml(path: string) {
  const content = readFileSync(join(dist, path), 'utf8');
  assert.equal(XMLValidator.validate(content), true, path + ' is valid XML');
  return xml.parse(content);
}
const array = <T>(value: T | T[]): T[] => Array.isArray(value) ? value : [value];

test('Every page has one H1, unique metadata and a clean production canonical', () => {
  const titles = new Set(), descriptions = new Set();
  for (const p of pages) {
    assert.equal(p.all.filter(n => n.tagName === 'h1').length, 1, p.pathname);
    const title = norm(text(p.all.find(n => n.tagName === 'title')!));
    const description = attr(p.meta('description')!, 'content') || '';
    assert.ok(title.length >= 15 && title.length <= 115, p.pathname + ' title');
    assert.ok(description.length >= 45 && description.length <= 200, p.pathname + ' description');
    assert.ok(!titles.has(title), 'Duplicate title: ' + title); titles.add(title);
    assert.ok(!descriptions.has(description), 'Duplicate description: ' + description); descriptions.add(description);
    assert.equal(attr(p.all.find(n => n.tagName === 'link' && attr(n, 'rel') === 'canonical')!, 'href'), canonicalUrl(p.pathname));
    assert.equal(attr(p.meta('og:url')!, 'content'), canonicalUrl(p.pathname));
    assert.equal(attr(p.meta('og:image')!, 'content'), SITE + '/og-image.png');
    assert.equal(attr(p.all.find(n => n.tagName === 'html')!, 'lang'), 'en-IN');
    assert.ok(!p.meta('google-site-verification') || !/placeholder|your_|example/i.test(attr(p.meta('google-site-verification')!, 'content') || ''));
  }
});

test('JSON-LD identifies the real brand and matches visible FAQ answers', () => {
  for (const p of pages) {
    const org = p.schemas.find(s => s['@type'] === 'Organization');
    assert.equal(org?.name, 'Apna Galla'); assert.deepEqual(org.sameAs, [INSTAGRAM]);
    assert.ok(!p.schemas.some(s => s.aggregateRating || s.review), 'No invented reviews');
    for (const schema of p.schemas.filter(s => s['@type'] === 'FAQPage')) {
      for (const faq of schema.mainEntity) {
        assert.ok(p.visible.includes(norm(faq.name)), p.pathname + ' visible question');
        assert.ok(p.visible.includes(norm(faq.acceptedAnswer.text)), p.pathname + ' visible answer');
      }
    }
  }
});

test('Sitemap is complete and excludes login, signup and the 404 page', () => {
  const index = readXml('sitemap-index.xml');
  const entries = array(index.sitemapindex.sitemap);
  const urls = entries.flatMap((entry: any) => {
    const target = new URL(entry.loc);
    assert.equal(target.origin, SITE);
    return array(readXml(target.pathname.slice(1)).urlset.url).map((u: any) => u.loc);
  });
  assert.equal(new Set(urls).size, urls.length, 'No duplicates');
  const expected = pages.filter(p => !attr(p.meta('robots')!, 'content')?.includes('noindex')).map(p => canonicalUrl(p.pathname));
  assert.deepEqual([...urls].sort(), expected.sort());
  for (const path of ['/login/', '/signup/', '/404.html']) {
    assert.ok(!urls.includes(SITE + path));
    assert.ok(attr(byUrl.get(SITE + path)!.meta('robots')!, 'content')?.includes('noindex'));
  }
});

test('RSS contains exactly the public guides with real, non-future dates', () => {
  const feed = readXml('rss.xml');
  assert.equal(feed.rss.channel.language, 'en-IN');
  const items = array(feed.rss.channel.item);
  assert.deepEqual(items.map((i: any) => i.link).sort(), blogs.map(p => canonicalUrl(p.pathname)).sort());
  for (const i of items as any[]) assert.ok(new Date(i.pubDate).getTime() <= Date.now(), i.link);
});

test('Guides have substantive bilingual content and honest matching publication metadata', () => {
  assert.ok(blogs.length >= 6, 'Starter library is present');
  for (const p of blogs) {
    const schema = p.schemas.find(s => s['@type'] === 'BlogPosting');
    assert.ok(schema.datePublished <= indiaDate());
    assert.ok(schema.dateModified >= schema.datePublished && schema.dateModified <= indiaDate());
    assert.equal(attr(p.meta('article:published_time')!, 'content'), schema.datePublished);
    assert.ok(p.all.some(n => n.tagName === 'time' && attr(n, 'datetime') === schema.datePublished));
    const body = p.all.find(n => attr(n, 'class') === 'article-body')!;
    assert.ok(norm(text(body)).split(' ').length >= 400, p.pathname + ' useful body');
    assert.ok(nodes(body).some(n => attr(n, 'lang') === 'hi'), p.pathname + ' Hinglish explanation');
    assert.ok(p.visible.includes('AI assistance'), p.pathname + ' editorial transparency');
    const baseline = byUrl.get(SITE + '/features/billing/')!;
    assert.deepEqual(p.all.filter(n => n.tagName === 'script' && attr(n, 'src')).map(n => attr(n, 'src')).sort(), baseline.all.filter(n => n.tagName === 'script' && attr(n, 'src')).map(n => attr(n, 'src')).sort(), 'Articles add no client JS');
  }
});

test('Public internal links, assets, and table-of-contents fragments resolve', () => {
  for (const p of pages) {
    for (const node of p.all.filter(n => ['a', 'img', 'script', 'link'].includes(n.tagName || ''))) {
      const value = attr(node, 'href') || attr(node, 'src');
      if (!value || /^(data:|mailto:|tel:|javascript:)/i.test(value)) continue;
      const url = new URL(value, SITE + p.pathname);
      if (url.origin !== SITE || url.pathname.startsWith('/api/')) continue;
      const candidate = join(dist, decodeURIComponent(url.pathname));
      const targetFile = existsSync(candidate) && statSync(candidate).isFile() ? candidate : join(candidate, 'index.html');
      assert.ok(existsSync(targetFile), `${p.pathname} links to missing ${value}`);
      if (url.hash && targetFile.endsWith('.html')) {
        const target = pages.find(page => page.path === targetFile)!;
        assert.ok(target.all.some(n => attr(n, 'id') === decodeURIComponent(url.hash.slice(1))), `${p.pathname} missing fragment ${value}`);
      }
    }
  }
});

test('Crawler files, Instagram links and both Netlify configurations agree', () => {
  const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
  assert.match(robots, /User-agent: \*\s+Allow: \/\s+Disallow: \/api\//);
  assert.ok(robots.includes('Sitemap: ' + SITE + '/sitemap-index.xml'));
  const llms = readFileSync(join(dist, 'llms.txt'), 'utf8');
  for (const p of blogs) assert.ok(llms.includes(canonicalUrl(p.pathname)));
  for (const p of pages) assert.ok(p.all.some(n => n.tagName === 'a' && attr(n, 'href') === INSTAGRAM));
  const root = readFileSync(resolve('../netlify.toml'), 'utf8');
  const nested = readFileSync(resolve('netlify.toml'), 'utf8');
  assert.equal(root.slice(root.indexOf('[[redirects]]')), nested.slice(nested.indexOf('[[redirects]]')), 'Active base config retains matching redirects and security/cache headers');
  assert.match(nested, /from = "\/sitemap.xml"\s+to = "\/sitemap-index.xml"\s+status = 301/);
});

test('Draft/future publication follows the India day boundary and canonical output is safe', () => {
  assert.equal(indiaDate(new Date('2026-10-16T18:29:59Z')), '2026-10-16');
  assert.equal(indiaDate(new Date('2026-10-16T18:30:00Z')), '2026-10-17');
  assert.equal(isPublished({ published: '2026-10-16' }, '2026-10-16'), true);
  assert.equal(isPublished({ published: '2026-10-17' }, '2026-10-16'), false);
  assert.equal(isPublished({ published: '2026-10-15', draft: true }, '2026-10-16'), false);
  assert.equal(canonicalUrl('https://preview.example/blog/test?campaign=1#answer'), SITE + '/blog/test/');
  assert.equal(canonicalUrl('/blog/test///?campaign=1'), SITE + '/blog/test/');
  assert.ok(!jsonLd({ question: '</script><script>alert(1)</script>' }).includes('<'));
});
