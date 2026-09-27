import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createConsent, parseConsent, DEFAULT_CHOICES, CONSENT_LIFETIME, CONSENT_KEY, readConsent } from '../consent.ts';
const now = Date.now();
const all = { necessary: true, functional: true, analytics: true, marketing: true };
test('absent, corrupt, outdated and incomplete receipts never grant consent', () => {
  for (const raw of [null, '', '{', '{}', JSON.stringify({...createConsent(all,now),version:0}), JSON.stringify({...createConsent(all,now),choices:{functional:true}})]) assert.equal(parseConsent(raw,now),null);
});
test('optional categories start disabled, necessary cannot be disabled', () => {
  assert.deepEqual(DEFAULT_CHOICES,{necessary:true,functional:false,analytics:false,marketing:false});
  assert.equal(createConsent({...all,necessary:false},now).choices.necessary,true);
});
test('individual choices remain separate across serialization and reload', () => {
  const selected={...DEFAULT_CHOICES,functional:true};
  const record=createConsent(selected,now);
  assert.deepEqual(parseConsent(JSON.stringify(record),now).choices,selected);
});
test('expiry and future/overlong receipts fail closed', () => {
  const record=createConsent(all,now);
  assert.equal(parseConsent(JSON.stringify(record),now+CONSENT_LIFETIME),null);
  assert.equal(parseConsent(JSON.stringify(record),now-1),null);
  assert.equal(parseConsent(JSON.stringify({...record,expiresAt:now+CONSENT_LIFETIME+1}),now),null);
});
test('reject replaces earlier permissions with no optional categories', () => {
  const receipt=createConsent(DEFAULT_CHOICES,now);
  assert.deepEqual(parseConsent(JSON.stringify(receipt),now).choices,DEFAULT_CHOICES);
});
test('unavailable browser storage does not grant consent', () => {
  Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{getItem(){throw new Error('Blocked');}}});
  assert.equal(readConsent(),null);
  Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{getItem(key){assert.equal(key,CONSENT_KEY);return JSON.stringify(createConsent(all,now));}}});
  assert.deepEqual(readConsent().choices,all);
  delete globalThis.localStorage;
});
test('expired stored consent and optional language are removed on return', () => {
  const removed=[];
  Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{getItem(){return JSON.stringify(createConsent(all,now-CONSENT_LIFETIME-1000));},removeItem(key){removed.push(key);}}});
  assert.equal(readConsent(),null);
  assert.deepEqual(removed,[CONSENT_KEY,'elevate-core-language']);
  delete globalThis.localStorage;
});
