import { syncAnalytics } from './analytics';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONSENT_KEY, LANGUAGE_KEY, DEFAULT_CHOICES, createConsent, readConsent, type Choices, type Consent } from './consent';

const Context = createContext<{
  ready: boolean; consent: Consent | null; choices: Choices; save: (choices: Choices) => void;
  settingsOpen: boolean; openSettings: () => void; closeSettings: () => void;
  dismissed: boolean; dismissBanner: () => void; storageUnavailable: boolean;
} | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => { setConsent(readConsent()); setReady(true); }, []);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [storageUnavailable, setStorageUnavailable] = useState(false);
  const choices = consent?.choices ?? DEFAULT_CHOICES;
  const save = (next: Choices) => {
    const record = createConsent(next);
    // Stop optional storage immediately, including preferences from older site versions.
    try {
      if (!next.functional) localStorage.removeItem(LANGUAGE_KEY);
      localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
      setStorageUnavailable(false);
    } catch { setStorageUnavailable(true); }
    syncAnalytics(next.analytics);
    setConsent(record);
    setSettingsOpen(false);
    setDismissed(false);
  };
  useEffect(() => { if (ready) syncAnalytics(choices.analytics); }, [ready, choices.analytics]);
  useEffect(() => {
    if (ready && !choices.functional) {
      try { localStorage.removeItem(LANGUAGE_KEY); } catch { /* Continue without persistence. */ }
    }
  }, [ready, choices.functional]);
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY || event.key === null) { const next = readConsent(); syncAnalytics(next?.choices.analytics ?? false); setConsent(next); setDismissed(false); }
    };
    const checkExpiry = () => {
      if (consent && consent.expiresAt <= Date.now()) {
        try { localStorage.removeItem(CONSENT_KEY); localStorage.removeItem(LANGUAGE_KEY); } catch { /* Fail closed. */ }
        syncAnalytics(false);
        setConsent(null); setDismissed(false);
      }
    };
    window.addEventListener('storage', sync);
    window.addEventListener('focus', checkExpiry);
    let timer: number | undefined;
    const scheduleExpiry = () => {
      if (!consent) return;
      const remaining = consent.expiresAt - Date.now();
      if (remaining <= 0) { checkExpiry(); return; }
      timer = window.setTimeout(scheduleExpiry, Math.min(remaining, 2_147_483_647));
    };
    scheduleExpiry();
    document.addEventListener('visibilitychange', checkExpiry);
    return () => { window.removeEventListener('storage', sync); window.removeEventListener('focus', checkExpiry); document.removeEventListener('visibilitychange', checkExpiry); window.clearTimeout(timer); };
  }, [consent]);
  return <Context.Provider value={{ ready, consent, choices, save, settingsOpen, openSettings: () => setSettingsOpen(true), closeSettings: () => setSettingsOpen(false), dismissed, dismissBanner: () => setDismissed(true), storageUnavailable }}>{children}</Context.Provider>;
}
export function useConsent() {
  const context = useContext(Context);
  if (!context) throw new Error('useConsent requires ConsentProvider');
  return context;
}
