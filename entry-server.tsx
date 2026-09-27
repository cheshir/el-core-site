import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { ConsentProvider } from './ConsentContext';
import { LanguageProvider } from './LanguageContext';
import { type SiteLanguage } from './seo';
export { SEO, structuredData, SITE_URL, languagePath } from './seo';
export function render(language: SiteLanguage) {
  return renderToString(<ConsentProvider><LanguageProvider initialLanguage={language}><App /></LanguageProvider></ConsentProvider>);
}
