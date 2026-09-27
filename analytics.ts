export const GA_ID = 'G-5PYFGJ7TW4';
export const GA_COOKIE_SECONDS = 180 * 24 * 60 * 60;
const SCRIPT_ID = 'elevate-core-google-analytics';
const DISABLE_KEY = `ga-disable-${GA_ID}`;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [DISABLE_KEY]?: boolean;
};

export function isAnalyticsHost(location: { hostname: string; protocol: string }) {
  return location.protocol === 'https:' && ['el-core.eu', 'www.el-core.eu'].includes(location.hostname);
}

export function contactChannel(href: string): string | null {
  try {
    const url = new URL(href);
    if (url.protocol === 'mailto:' && url.pathname === 'hello@el-core.eu') return 'email';
    if (url.protocol === 'tel:' && url.pathname === '+385919497822') return 'phone';
    if (url.protocol !== 'https:') return null;
    if (url.hostname === 't.me' && url.pathname === '/elevate_core') return 'telegram';
    if (url.hostname === 'wa.me' && url.pathname === '/385919497822') return 'whatsapp';
    if (url.hostname === 'calendar.app.google' && url.pathname === '/7CrnbHTGv7e2DzvJA') return 'calendar';
  } catch { /* Not an external contact link. */ }
  return null;
}

// Keep free-form query strings, messages and arbitrary hashes out of page metadata.
export function analyticsPage(url: string) {
  const page = new URL(url);
  const hash = ['#privacy-policy', '#cookie-policy'].includes(page.hash) ? page.hash : '';
  return page.origin + page.pathname + hash;
}

export function analyticsCookieRemovals(cookie: string, hostname: string): string[] {
  const domains = ['', hostname, `.${hostname}`, 'el-core.eu', '.el-core.eu'];
  return cookie.split(';').map(item => item.trim().split('=')[0])
    .filter(name => /^_ga(?:_|$)/.test(name))
    .flatMap(name => [...new Set(domains)].map(domain =>
      `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ''} SameSite=Lax; Secure`));
}

// One controller per page. Removing a script cannot unload its listeners: withdrawal
// disables collection synchronously, clears first-party GA cookies, then reloads.
export function createAnalyticsController(win: AnalyticsWindow, doc: Document) {
  let active = false;
  let requested = false;
  const onClick = (event: MouseEvent) => {
    if (!active || win[DISABLE_KEY]) return;
    const target = event.target as Element | null;
    const link = target?.closest?.('a[href]');
    const channel = link && contactChannel(link.getAttribute('href') ?? '');
    if (channel) win.gtag?.('event', 'contact_click', { channel, send_to: GA_ID });
  };
  return {
    start() {
      if (active || requested || !isAnalyticsHost(win.location)) return;
      active = true;
      requested = true;
      win[DISABLE_KEY] = false;
      win.dataLayer = win.dataLayer || [];
      win.gtag = function () { win.dataLayer!.push(arguments); };
      // Basic consent mode: even this queue and the tag exist only AFTER consent.
      win.gtag('consent', 'default', {
        analytics_storage: 'granted', ad_storage: 'denied',
        ad_user_data: 'denied', ad_personalization: 'denied',
      });
      win.gtag('set', 'ads_data_redaction', true);
      win.gtag('js', new Date());
      let referrer = '';
      try { referrer = new URL(doc.referrer).origin; } catch { /* Direct visit. */ }
      win.gtag('config', GA_ID, {
        send_page_view: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_expires: GA_COOKIE_SECONDS,
        cookie_update: false,
        cookie_path: '/',
        cookie_flags: 'SameSite=Lax;Secure',
        page_location: analyticsPage(win.location.href),
        page_referrer: referrer,
      });
      const script = doc.createElement('script');
      script.id = SCRIPT_ID;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      doc.head.appendChild(script);
      doc.addEventListener('click', onClick);
    },
    stop() {
      win[DISABLE_KEY] = true;
      active = false;
      doc.removeEventListener('click', onClick);
      doc.getElementById(SCRIPT_ID)?.remove();
      if (isAnalyticsHost(win.location)) {
        for (const cookie of analyticsCookieRemovals(doc.cookie, win.location.hostname)) doc.cookie = cookie;
      }
      if (requested) {
        // No denied-consent ping: completely unload the previously consented tag.
        win.dataLayer = [];
        win.gtag = () => {};
        win.location.reload();
      }
    },
  };
}

let controller: ReturnType<typeof createAnalyticsController> | undefined;
export function syncAnalytics(enabled: boolean) {
  controller ??= createAnalyticsController(window, document);
  if (enabled) controller.start(); else controller.stop();
}
