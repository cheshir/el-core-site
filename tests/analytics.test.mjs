import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createAnalyticsController, GA_ID, analyticsPage, contactChannel, analyticsCookieRemovals } from '../analytics.ts';
import { createConsent, parseConsent } from '../consent.ts';

function browser(href = 'https://el-core.eu/?email=private@example.com#team-expertise') {
  const scripts = [], writes = [], listeners = new Map();
  let reloads = 0;
  const location = new URL(href);
  location.reload = () => { reloads++; };
  const win = { location };
  const doc = {
    referrer: 'https://example.org/?private=value',
    get cookie() { return '_ga=one; _ga_5PYFGJ7TW4=two; essential=keep'; },
    set cookie(value) { writes.push(value); },
    createElement() { return { remove() { scripts.splice(scripts.indexOf(this), 1); } }; },
    head: { appendChild(script) { scripts.push(script); } },
    getElementById(id) { return scripts.find(script => script.id === id); },
    addEventListener(name, handler) { listeners.set(name, handler); },
    removeEventListener(name) { listeners.delete(name); },
  };
  return { win, doc, scripts, writes, listeners, reloads: () => reloads,
    controller: createAnalyticsController(win, doc) };
}

test('initial load and rejection do not create Google script or consent pings', () => {
  const b = browser();
  b.controller.stop();
  assert.equal(b.scripts.length, 0);
  assert.equal(b.win.dataLayer, undefined);
  assert.equal(b.reloads(), 0);
  assert.equal(b.win[`ga-disable-${GA_ID}`], true);
});
test('only HTTPS production domains can collect, including after Accept all', () => {
  for (const host of ['http://el-core.eu/', 'http://127.0.0.1:4173/', 'http://localhost:3000/', 'https://preview.example.com/', 'https://el-core.eu.example.com/']) {
    const b = browser(host); b.controller.start();
    assert.equal(b.scripts.length, 0, host);
    assert.equal(b.win.dataLayer, undefined);
  }
  const b = browser('https://www.el-core.eu/'); b.controller.start();
  assert.equal(b.scripts.length, 1);
});
test('explicit analytics consent loads once with advertising denied and limited cookie lifetime', () => {
  const b = browser(); b.controller.start(); b.controller.start();
  assert.equal(b.scripts.length, 1);
  assert.equal(b.scripts[0].src, `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  const commands = b.win.dataLayer.map(args => Array.from(args));
  assert.equal(commands[0][0], 'consent');
  assert.deepEqual(commands[0][2], {analytics_storage:'granted', ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied'});
  const config = commands.find(args => args[0] === 'config')[2];
  assert.equal(config.cookie_expires, 15552000);
  assert.equal(config.cookie_update, false);
  assert.equal(config.allow_google_signals, false);
  assert.equal(config.allow_ad_personalization_signals, false);
  assert.equal(config.page_location, 'https://el-core.eu/');
  assert.equal(config.page_referrer, 'https://example.org');
});
test('withdrawal also cancels a pending load, removes GA cookies and unloads via reload', () => {
  const b = browser(); b.controller.start(); b.controller.stop();
  assert.equal(b.win[`ga-disable-${GA_ID}`], true);
  assert.equal(b.scripts.length, 0);
  assert.equal(b.listeners.size, 0);
  assert.deepEqual(b.win.dataLayer, []);
  assert.equal(b.reloads(), 1);
  assert.ok(b.writes.some(cookie => cookie.startsWith('_ga=;')));
  assert.ok(b.writes.some(cookie => cookie.startsWith('_ga_5PYFGJ7TW4=;')));
  assert.ok(b.writes.every(cookie => !cookie.startsWith('essential=')));
});
test('contact events contain a channel, not destination or message text', () => {
  const b = browser(); b.controller.start();
  b.listeners.get('click')({ target: { closest: () => ({getAttribute: () => 'https://wa.me/385919497822?text=private-message'}) }});
  const event = Array.from(b.win.dataLayer.at(-1));
  assert.deepEqual(event, ['event', 'contact_click', {channel:'whatsapp',send_to:GA_ID}]);
  assert.equal(contactChannel('mailto:someone-else@example.com'), null);
  assert.equal(contactChannel('https://evil.example/385919497822'), null);
  assert.equal(contactChannel('mailto:hello@el-core.eu?body=secret'), 'email');
});
test('sanitisation preserves policy pages and removes arbitrary query/hash values', () => {
  assert.equal(analyticsPage('https://el-core.eu/?secret=x#cookie-policy'), 'https://el-core.eu/#cookie-policy');
  assert.equal(analyticsPage('https://el-core.eu/?secret=x#private-person'), 'https://el-core.eu/');
  const deletions = analyticsCookieRemovals('_ga=x; _ga_5PYFGJ7TW4=y; other=z', 'www.el-core.eu');
  assert.ok(deletions.some(value => value.includes('Domain=.el-core.eu;')));
  assert.ok(deletions.every(value => value.startsWith('_ga')));
});
test('consent from before Google Analytics was introduced requires a new choice', () => {
  const receipt = {...createConsent({necessary:true,functional:true,analytics:true,marketing:true}), version:1};
  assert.equal(parseConsent(JSON.stringify(receipt)), null);
});
