import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile, access} from 'node:fs/promises';
import {SEO, SITE_URL, languagePath, languageFromPath, structuredData} from '../seo.ts';

for (const lang of ['en','uk']) {
  test(`${lang}: built HTML includes real page content, matching assets and crawlable language links`,async()=>{
    const html=await readFile(lang==='uk'?'dist/uk/index.html':'dist/index.html','utf8');
    const head=html.split('</head>')[0];
    assert.ok(html.includes(`<html lang="${lang}">`));
    assert.ok(head.includes(`<title>${SEO[lang].title}</title>`));
    assert.ok(head.includes(`rel="canonical" href="${SITE_URL+languagePath(lang)}"`));
    for (const key of ['og:url','twitter:url']) assert.match(head,new RegExp(`(?:property|name)="${key}" content="${SITE_URL+languagePath(lang)}"`));
    assert.ok(html.includes(lang==='uk'?'Рекрутинг і HR-консалтинг для бізнесів':'Recruitment &amp; HR consulting for businesses'));
    for (const text of ['Hiring Core','Hiring Sprint','Search Partnership','Who You Hire Is','Who You Become.']) assert.ok(html.includes(text),text);
    for (const id of ['top','recruitment','how-we-work','team-expertise','contact']) assert.ok(html.includes(`id="${id}"`),id);
    assert.match(html,/<a href="\/uk\/" lang="uk"/);
    assert.match(html,/<a href="\/" lang="en"/);
    for (const language of ['en','uk','x-default']) assert.ok(head.includes(`hreflang="${language}"`));
    const schema=JSON.parse(head.match(/<script id="site-structured-data" type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.deepEqual(schema,structuredData(lang));
    assert.equal(schema['@graph'].filter(item=>item['@type']==='Service').length,3);
    assert.ok(!html.includes('class="cookie-banner"'),'SSR does not flash a stale consent banner');
    assert.ok(!html.includes('<script async src="https://www.googletagmanager.com'),'SSR never loads analytics');
    const assets=[...html.matchAll(/(?:src|href)="(\/assets\/[^"?]+)"/g)].map(match=>match[1]);
    for (const asset of assets) await access('dist'+asset);
  });
}
test('sitemap lists only the two real language URLs with reciprocal alternatives',async()=>{
  const xml=await readFile('dist/sitemap.xml','utf8');
  assert.deepEqual([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]),[SITE_URL+'/',SITE_URL+'/uk/']);
  assert.equal((xml.match(/hreflang="en"/g)||[]).length,2);
  assert.equal((xml.match(/hreflang="uk"/g)||[]).length,2);
  const robots=await readFile('dist/robots.txt','utf8');
  assert.ok(robots.includes('Allow: /'));
  assert.ok(robots.includes('Sitemap: https://el-core.eu/sitemap.xml'));
});
test('URL language detection is deterministic and does not confuse similar paths',()=>{
  assert.equal(languageFromPath('/uk/'),'uk');
  assert.equal(languageFromPath('/uk'),'uk');
  assert.equal(languageFromPath('/'),'en');
  assert.equal(languageFromPath('/ukraine/'),'en');
});
