# SEO setup and release

## Scope

Recruitment is the primary service. Priority markets confirmed by the owner: Ukraine, Poland, Latvia and Slovakia. Positioning: a recruitment partner for growing businesses, including IT, marketing and leadership hiring. The private ICP informs positioning; it is not copied into public or hidden page content. Existing visible copy and design remain unchanged.

## Implemented locally

- `npm run build` generates complete English HTML at `/` and Ukrainian HTML at `/uk/`, then hydrates the existing React UI. Search crawlers can read the content without running JavaScript.
- Each language has its own title, description, canonical URL, reciprocal `hreflang` links and a crawlable language switch. English is the `x-default` version. The URL determines language, including browser back/forward and reloads.
- `seo.ts` defines Organization, WebSite, WebPage and recruitment Service structured data. No invented offices, reviews or guarantees are marked up.
- `public/robots.txt` allows crawlers; `public/sitemap.xml` contains the two canonical language URLs. Hash sections are not separate indexable pages.
- The approved social sharing card and immutable English slogan are preserved.
- The Docker nginx configuration serves the generated language directories and returns 404 for unknown paths. Other hosting platforms must preserve this behavior. Publish all of `dist/`, including `uk/index.html`, robots and sitemap.

## Verification and publication still required

1. Confirm site ownership in Google Search Console using the TXT record shown in the owner's account. Add it at the authoritative DNS provider as a new TXT record with name `@`; preserve existing records. Keep the record after verification. A registrar and the active DNS provider can differ.
2. Confirm successful verification in Search Console. A URL-prefix property covers that exact protocol/host/path; a Domain property covers all protocols and subdomains.
3. Add/verify Bing Webmaster Tools, or import the verified Search Console property if the owner chooses to authorize that connection.
4. Publish the checked build, then verify live `/`, `/uk/`, `/robots.txt`, `/sitemap.xml`, canonical/hreflang tags, HTTP statuses and hosting/CDN crawler access. Local tests do not establish live indexability.
5. Submit `https://el-core.eu/sitemap.xml` in both consoles only after it is live. Inspect both language URLs and request indexing where available.
6. Check GA4 Realtime and consent behavior on production; local previews deliberately do not send analytics. See `COOKIE-CONSENT.md`.

## Checks

`npm run build`

`node --test tests/seo.test.mjs tests/analytics.test.mjs tests/consent.test.mjs`

`npx tsc --noEmit`

Browser: EN/UK reload and back/forward, 320/390/768/1440px, language links, contact/team dialogs, saved cookie choices and hydration errors.

## Search and AI visibility

This prepares the existing site for crawling and interpretation; indexing, rankings and AI recommendations are not guaranteed. No special hidden text, fabricated country pages or AI-only content is added. Further growth can use verified client cases and useful public articles when the owner wants visible content changes.

References: [Google AI features](https://developers.google.com/search/docs/appearance/ai-features), [localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions), [ownership verification](https://support.google.com/webmasters/answer/9008080), [GoDaddy TXT records](https://www.godaddy.com/help/add-a-txt-record-19232), [Bing verification](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b).
