import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render, SEO, SITE_URL, structuredData, languagePath } from '../dist-ssr/entry-server.js';
const template = await readFile('dist/index.html', 'utf8');
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for (const language of ['en','uk']) {
  const url = SITE_URL + languagePath(language);
  let content = render(language);
  // SSR asset URLs and client URLs must agree, including Vite's emitted hashes.
  for (const [source, asset] of Object.entries(manifest)) {
    if (!source.startsWith('assets/')) continue;
    content = content.replaceAll(`"/${source}"`, `"/${asset.file}"`);
  }
  const meta = `<link rel="alternate" hreflang="en" href="${SITE_URL}/">\n<link rel="alternate" hreflang="uk" href="${SITE_URL}/uk/">\n<link rel="alternate" hreflang="x-default" href="${SITE_URL}/">\n<script id="site-structured-data" type="application/ld+json">${JSON.stringify(structuredData(language)).replaceAll('<','\\u003c')}</script>`;
  const html = template.replace('<html lang="en">', `<html lang="${language}">`)
    .replace(/<title>.*?<\/title>/, `<title>${escape(SEO[language].title)}</title>`)
    .replace(/<meta name="description"[^>]+>/, `<meta name="description" content="${escape(SEO[language].description)}">`)
    .replace(/<link rel="canonical"[^>]+>/, `<link rel="canonical" href="${url}">`)
    .replace(/(<meta (?:property="og:url"|name="twitter:url") content=")[^"]+/g, `$1${url}`)
    .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, meta)
    .replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  const directory = language === 'uk' ? 'dist/uk' : 'dist';
  await mkdir(directory, {recursive:true});
  await writeFile(`${directory}/index.html`, html);
  console.log(`Prerendered ${languagePath(language)}`);
}
