import React from 'react';
import { languagePath, type SiteLanguage } from '../seo';
import { useLanguage } from '../LanguageContext';

export default function LanguageLink({ language: target, label }: { language: SiteLanguage; label?: string }) {
  const { language, setLanguage } = useLanguage();
  return <a href={languagePath(target)} lang={target} hrefLang={target} aria-label={label}
    aria-current={language === target ? 'page' : undefined}
    onClick={event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      setLanguage(target);
    }}>{target === 'uk' ? 'UA' : 'EN'}</a>;
}
