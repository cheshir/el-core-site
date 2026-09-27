import React, { createContext, useContext, useEffect, useState } from 'react';
import { useConsent } from './ConsentContext';
import { LANGUAGE_KEY } from './consent';
import { languageFromPath, languagePath, SEO, SITE_URL, structuredData, type SiteLanguage } from './seo';
import ukrainian from './locales/uk.json';

const translations: Record<string, string> = ukrainian;
const LanguageContext = createContext<{
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  t: (text: string) => string;
} | null>(null);

export function LanguageProvider({ children, initialLanguage = 'en' }: { children: React.ReactNode; initialLanguage?: SiteLanguage }) {
  const { consent, ready } = useConsent();
  // The URL is authoritative, including when a saved preference differs.
  const [language, updateLanguage] = useState<SiteLanguage>(initialLanguage);
  const setLanguage = (next: SiteLanguage) => {
    if (next === language) return;
    window.history.pushState(null, '', languagePath(next) + window.location.search + window.location.hash);
    updateLanguage(next);
  };
  useEffect(() => {
    const sync = () => updateLanguage(languageFromPath(window.location.pathname));
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);
  const t = (text: string) => language === 'uk' ? (translations[text] ?? text) : text;
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      if (!ready) { /* Consent has not been restored yet. */ }
      else if (consent?.choices.functional) localStorage.setItem(LANGUAGE_KEY, language);
      else localStorage.removeItem(LANGUAGE_KEY);
    } catch { /* Storage may be disabled. */ }
    document.title = SEO[language].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', SEO[language].description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE_URL + languagePath(language));
    document.querySelector('#site-structured-data')!.textContent = JSON.stringify(structuredData(language));
    // Keep the approved English sharing card and slogan in both versions.
    for (const selector of ['meta[property="og:url"]', 'meta[name="twitter:url"]']) {
      document.querySelector(selector)?.setAttribute('content', SITE_URL + languagePath(language));
    }
  }, [language, consent, ready]);
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage requires LanguageProvider');
  return context;
}
