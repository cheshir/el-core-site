import React from 'react';
import privacy from '../content/privacy-policy.json';
import cookies from '../content/cookie-policy.json';
import { useLanguage } from '../LanguageContext';
import { useConsent } from '../ConsentContext';
export type LegalDocument = 'privacy-policy' | 'cookie-policy';
export default function LegalPage({ document }: { document: LegalDocument }) {
  const { language } = useLanguage();
  const { openSettings } = useConsent();
  const blocks = document === 'privacy-policy' ? privacy : cookies;
  const c = (en: string, uk: string) => language === 'uk' ? uk : en;
  const rich = (text: string) => text.split(/(Cookie Settings|Cookie Policy|Privacy Policy|hello@el-core\.eu|azop@azop\.hr|https:\/\/el-core\.eu)/g).map((part, index) => {
    if (part === 'Cookie Settings') return <button key={index} className="legal-inline-button" onClick={openSettings}>{part}</button>;
    if (part === 'Cookie Policy' || part === 'Privacy Policy') return <a key={index} href={part === 'Cookie Policy' ? '#cookie-policy' : '#privacy-policy'}>{part}</a>;
    if (part.includes('@')) return <a key={index} href={`mailto:${part}`}>{part}</a>;
    if (part === 'https://el-core.eu') return <a key={index} href="#top">{part}</a>;
    return part;
  });
  const content: React.ReactNode[] = [];
  for (let index = 2; index < blocks.length; index++) {
    const block = blocks[index];
    if (block.type === 'li') {
      const items: React.ReactNode[] = [];
      const start = index;
      while (blocks[index]?.type === 'li') { items.push(<li key={index}>{rich(blocks[index].text)}</li>); index++; }
      index--; content.push(<ul key={start}>{items}</ul>);
    } else if (block.type === 'h2') content.push(<h2 id={`legal-section-${index}`} key={index}>{block.text}</h2>);
    else if (block.type === 'h3') content.push(<h3 key={index}>{block.text}</h3>);
    else content.push(<p key={index}>{rich(block.text)}</p>);
  }
  return <article className="legal-page wrap">
    <a className="legal-back" href="#top">← {c('Back to Elevate Core', 'Повернутися до Elevate Core')}</a>
    <div className="legal-heading"><span className="eyebrow">Elevate Core</span><h1 tabIndex={-1} lang="en">{blocks[0].text}</h1><p lang="en">{blocks[1].text}</p>
      {language === 'uk' && <p className="legal-language-note">Документ надано англійською мовою.</p>}
      <a href={`/legal/${document}.pdf`} target="_blank" rel="noopener noreferrer">{c('Open original PDF ↗', 'Відкрити оригінал PDF ↗')}</a>
    </div>
    <div className="legal-layout"><nav className="legal-toc" aria-label={c('Policy contents', 'Зміст політики')} lang="en"><h2>{c('Contents', 'Зміст')}</h2>{blocks.map((block,index) => block.type === 'h2' && <button key={index} onClick={() => window.document.getElementById(`legal-section-${index}`)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>{block.text}</button>)}</nav>
      <div className="legal-copy" lang="en">{content}</div></div>
  </article>;
}
