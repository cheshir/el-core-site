import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { ConsentProvider } from './ConsentContext';
import { LanguageProvider } from './LanguageContext';
import { languageFromPath } from './seo';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');
const app = <React.StrictMode><ConsentProvider><LanguageProvider initialLanguage={languageFromPath(window.location.pathname)}><App /></LanguageProvider></ConsentProvider></React.StrictMode>;
if (rootElement.hasChildNodes()) hydrateRoot(rootElement, app);
else createRoot(rootElement).render(app);
