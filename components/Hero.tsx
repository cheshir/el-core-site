import SocialLink from './SocialLink';
import meetingRoom from '../assets/hero-meeting-room.jpg';
import React from 'react';
import { useLanguage } from '../LanguageContext';

export default function Hero({ onContact }: { onContact: () => void }) {
  const { language } = useLanguage();
  const c = (en: string, uk: string) => language === 'uk' ? uk : en;
  return <section id="top" className="hero">
    <div className="hero-photo" aria-hidden="true">
      <img src={meetingRoom} alt="" fetchPriority="high" />
    </div>
    <div className="wrap hero-content"><div className="eyebrow"><span className="status-dot" />Elevate Core</div><h1 lang="en">Who You Hire Is<br/><span className="mint">Who You Become.</span></h1><p className="hero-positioning">{c('Recruitment & HR consulting for businesses in Ukraine and Europe.', 'Рекрутинг і HR-консалтинг для бізнесів в Україні та Європі.')}</p><p className="hero-description">{c('Hiring shapes how your business works. We connect the role to its business task, find and assess candidates, and give you evidence for a hiring decision with clear expectations on both sides.', 'Кожен найм змінює роботу бізнесу. Пов’язуємо роль із бізнес-задачею, шукаємо й оцінюємо кандидатів. Даємо основу для рішення з ясними очікуваннями з обох сторін.')}</p><div className="hero-actions"><button className="button button-primary" onClick={onContact}>{c('Discuss your hiring needs','Обговорити потреби найму')}</button><div className="hero-socials"><SocialLink network="instagram" href="https://www.instagram.com/elevate.core_zen" /><SocialLink network="linkedin" href="https://www.linkedin.com/company/elevate-core" /></div></div><div className="hero-bottom"><a className="hero-explore" href="#recruitment">{c('Find your way to work with us','Як працюємо разом')} <span aria-hidden="true">↓</span></a></div></div>
  </section>;
}
