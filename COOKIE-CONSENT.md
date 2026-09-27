# Privacy and cookie controls

- Supplied English legal text is preserved in `content/privacy-policy.json` and `content/cookie-policy.json`; original PDFs are in `public/legal/`. English documents are also available from the Ukrainian interface and are explicitly marked as English.
- `ConsentProvider` wraps the language provider. Until an explicit saved decision, all optional categories are false. Closing the banner or dialog never grants consent. Closing a settings edit leaves the previous saved choices intact.
- `elevate-core-consent` is first-party localStorage, containing version, categories, decision timestamp and expiry (180 days). It contains no visitor identifier. Invalid, expired and older-version records fail closed. Changes propagate between tabs. Storage failures keep the selection in memory for that visit and show a notice.
- The URL determines language: `/` is English, `/uk/` is Ukrainian. `elevate-core-language` records the choice only with functional consent and is deleted on withdrawal/expiry; it never overrides the URL. Language links work after rejection. Saved consent is restored after hydration before optional integrations or storage cleanup run.
- GA4 `G-5PYFGJ7TW4` is installed in `analytics.ts`, in basic consent mode. It loads only after an explicit current-version Analytics choice and only on HTTPS `el-core.eu` / `www.el-core.eu`. Localhost and all previews remain untracked even after Accept all. Consent version 2 requests a new choice from visitors with older receipts.
- GA4 measures visits/engagement and `contact_click` with an allowlisted channel only (email, phone, Telegram, WhatsApp, calendar). It does not record message bodies or contact-link URLs in custom events. Initial page metadata removes query strings/arbitrary fragments and retains only the referrer origin. Marketing providers, Google signals and advertising personalisation are disabled; all ad consent remains denied even after Accept all.
- `_ga` and `_ga_5PYFGJ7TW4` are first-party Google Analytics cookies configured for at most 180 days, without rolling expiry. Withdrawal synchronously sets `ga-disable-G-5PYFGJ7TW4`, removes the loader and accessible GA cookies at the root/host/parent domain, clears queued commands, and reloads to unload Google's already-executed code and listeners. The new choice is saved before this reload. Cross-tab withdrawal and consent expiry use the same shutdown. Data already sent while consent was granted is not retroactively deleted.
- The Cookie Settings inventory names Google, cookie purpose/expiry and the withdrawal reload. The supplied legal documents remain unchanged and refer visitors to that inventory for the current list.
- Inter is self-hosted with its OFL licence. The CSP in `index.html` permits Google's tag script and its `www`/`region1` Analytics collection endpoints for the gated integration; all other external scripts and all frames remain blocked. No Google preconnect or unconditional tag is present. External contact and calendar links open only after a user follows the link.
- `TrustStrip.tsx` displays static GoodFirms and Clutch ratings and a locally hosted DesignRush badge below the hero. Ratings were checked on 27 September 2026 (GoodFirms: 5/5, 1 review; Clutch: 5/5, 3 reviews) and require manual updates. All three are ordinary external profile links; no widget scripts, iframes or third-party asset requests are used. The block remains available after Reject all. Any future live widgets require the integration work below.

## Adding an optional integration

Before installing a provider: document its category, purpose, storage keys, expiry and recipient in the inventory; bump `CONSENT_VERSION`; implement a loader that checks live `useConsent().choices[category]` BEFORE importing/loading any provider code, pixel, iframe or preconnect. Implement provider shutdown and removal of its accessible cookies/storage on withdrawal. Third-party storage cannot be cleared by this origin: use the provider's documented revocation controls. Only then adjust the CSP for the exact reviewed origins. Do not use consent mode that sends cookieless requests before consent.

## Validation

- `node --test tests/consent.test.mjs` (Node 22.18+ / 24 with native TypeScript stripping).
- `npm run build`, `npx tsc --noEmit`.
- Browser: fresh visit; X/Escape without saving; Reject all and reload; individual category save; Accept all; withdrawal; language persistence; keyboard focus loop/return; both policies and PDF links; 320/390/768/1440px in EN/UK.
- Before production release, verify the deployed site's actual response headers, cookies and network requests as hosting/CDN configuration can introduce technologies outside this source tree.

## GA4 validation and release

- Run `node --test tests/consent.test.mjs tests/analytics.test.mjs`, `npm run build`, `npx tsc --noEmit`.
- Controller tests use a simulated production document with no network. They cover deny/default, production-host restrictions, single tag loading, consent command order, ad restrictions, contact payloads and withdrawal while loading. Local browser tests deliberately never send production analytics.
- After deployment, validate real Google requests/cookies on the production domain: none before consent / after rejection, one initial page view after granting Analytics, contact events in GA4 Realtime, withdrawal removes cookies and reloads with no Google requests. Verify any hosting CSP headers also permit the same origins. GA4 reports and server-side Enhanced Measurement / data retention settings must be checked in the Google account; these are not configured by this repository. A code build is not proof that the live property has received events.
