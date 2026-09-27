// Bump this version whenever purposes or optional providers change, to request a new choice.
export const CONSENT_VERSION = 2;
export const CONSENT_KEY = 'elevate-core-consent';
export const LANGUAGE_KEY = 'elevate-core-language';
export const CONSENT_LIFETIME = 180 * 24 * 60 * 60 * 1000;
export const DEFAULT_CHOICES = { necessary: true, functional: false, analytics: false, marketing: false } as const;
export type Choices = { necessary: true; functional: boolean; analytics: boolean; marketing: boolean };
export type Consent = { version: number; savedAt: number; expiresAt: number; choices: Choices };

export function parseConsent(raw: string | null, now = Date.now()): Consent | null {
  try {
    if (!raw) return null;
    const value = JSON.parse(raw);
    if (value.version !== CONSENT_VERSION || !Number.isFinite(value.savedAt) || !Number.isFinite(value.expiresAt)
      || value.savedAt > now || value.expiresAt <= now || value.expiresAt <= value.savedAt
      || value.expiresAt - value.savedAt > CONSENT_LIFETIME || value.choices?.necessary !== true
      || ['functional', 'analytics', 'marketing'].some(key => typeof value.choices?.[key] !== 'boolean')) return null;
    return value;
  } catch { return null; }
}

export function createConsent(choices: Choices, now = Date.now()): Consent {
  return { version: CONSENT_VERSION, savedAt: now, expiresAt: now + CONSENT_LIFETIME,
    choices: { necessary: true, functional: choices.functional === true, analytics: choices.analytics === true, marketing: choices.marketing === true } };
}

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    const record = parseConsent(raw);
    if (!record) {
      if (raw) localStorage.removeItem(CONSENT_KEY);
      localStorage.removeItem(LANGUAGE_KEY);
    }
    return record;
  } catch { return null; }
}
