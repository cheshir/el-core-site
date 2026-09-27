import LanguageLink from './LanguageLink';
import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { useLanguage } from '../LanguageContext';
import { BOOKING_URL } from '../siteConfig';

export default function Navbar() {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [recruitmentOpen, setRecruitmentOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('top');
  const c = (en: string, uk: string) => language === 'uk' ? uk : en;
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); setRecruitmentOpen(false); } };
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) { setOpen(false); setRecruitmentOpen(false); } };
    const layout = window.matchMedia('(max-width: 1120px)');
    const resetMenus = () => { setOpen(false); setRecruitmentOpen(false); };
    window.addEventListener('keydown', close); document.addEventListener('pointerdown', outside);
    layout.addEventListener('change', resetMenus);
    return () => { window.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); layout.removeEventListener('change', resetMenus); };
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const boundary = (header.current?.getBoundingClientRect().height ?? 72) + 60;
      const sections = ['top', 'recruitment', 'how-we-work', 'additional-services', 'team-expertise', 'blog', 'contact'];
      let current = 'top';
      for (const id of sections) {
        if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= boundary) current = id;
      }
      setActiveSection(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); cancelAnimationFrame(frame); };
  }, [language]);
  const links = [[c('Our approach','Наш підхід'),'#how-we-work'],[c('HR consulting','HR-консалтинг'),'#additional-services'],[c('Team','Команда'),'#team-expertise'],[c('Blog','Блог'),'#blog'],[c('Contact','Контакти'),'#contact']];
  const products = [['Hiring Core','#hiring-core'],['Hiring Sprint','#hiring-sprint'],['Search Partnership','#search-partnership']];
  return <header className="site-header" ref={header}>
    <nav className="main-nav wrap" aria-label={t('Main navigation')}>
      <a href="#top" aria-label={t('Elevate Core home')} className="header-logo" onClick={() => setOpen(false)}><Logo className="brand-logo" /></a>
      <div className="desktop-navigation">
        <div className="nav-recruitment" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setRecruitmentOpen(false); }}>
          <button className="nav-text" data-active={activeSection === 'recruitment'} aria-expanded={recruitmentOpen} aria-controls="recruitment-menu" onClick={() => setRecruitmentOpen(value => !value)}>{c('Recruitment','Рекрутинг')}<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" aria-hidden="true"><path d="m2 4 4 4 4-4" /></svg></button>
          {recruitmentOpen && <div id="recruitment-menu" className="recruitment-menu"><a href="#recruitment" onClick={() => setRecruitmentOpen(false)}>{c('All ways to work together','Усі формати співпраці')} <span>↗</span></a>{products.map(([label,href]) => <a key={href} href={href} onClick={() => setRecruitmentOpen(false)}>{label}<span>↗</span></a>)}</div>}
        </div>
        {links.map(([label,href]) => <a className="nav-text" key={href} href={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined}>{label}</a>)}
      </div>
      <div className="nav-actions"><div className="language-switch" role="group" aria-label={t('Language')}><LanguageLink language="en" label="English" /><span aria-hidden="true">/</span><LanguageLink language="uk" label="Українська" /></div><a className="button button-primary header-booking" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{c('Book a Call', 'Запланувати дзвінок')}<span aria-hidden="true">↗</span></a><button className="menu-toggle" aria-label={open?t('Close navigation'):t('Open navigation')} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? '×' : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M3 8h18M3 16h18"/></svg>}</button></div>
    </nav>
    {open && <nav className="mobile-navigation" id="mobile-navigation" aria-label={t('Mobile navigation')}><a href="#recruitment" aria-current={activeSection === 'recruitment' ? 'location' : undefined} onClick={()=>setOpen(false)}>{c('Recruitment','Рекрутинг')}</a><div className="mobile-products">{products.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label} <span>↗</span></a>)}</div>{links.map(([label,href])=><a key={href} href={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined} onClick={()=>setOpen(false)}>{label}</a>)}<a className="button button-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{c('Book a Call', 'Запланувати дзвінок')} ↗</a></nav>}
  </header>;
}
