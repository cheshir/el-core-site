import React from 'react';
import { useLanguage } from '../LanguageContext';

const partners = [
  { name: 'Altixon', logo: '/partners/altixon-transparent.png', url: 'https://www.altixon.com/', width: 1280, height: 1280 },
  { name: 'Anatolii Kompanichenko', logo: '/partners/anatolii-kompanichenko.png', url: 'https://thekompanichenko.com/', width: 2691, height: 502 },
  { name: 'Cortance', logo: '/partners/cortance.png', url: 'https://cortance.com/', width: 361, height: 64 },
  { name: 'Robomate', logo: '/partners/robomate.svg', url: 'https://www.robomate.tech/', width: 283, height: 52 },
];

export default function PartnersSection() {
  const { language } = useLanguage();
  const ukrainian = language === 'uk';

  return <section className="section partners-section" id="partners" aria-labelledby="partners-title">
    <div className="wrap">
      <div className="section-heading reveal">
        <span className="eyebrow">Elevate Core</span>
        <h2 id="partners-title">{ukrainian ? 'Партнери' : 'Partners'}</h2>
      </div>
      <ul className="partners-grid">
        {partners.map(partner => <li key={partner.url} className="reveal">
          <a className="partner-card" href={partner.url} target="_blank" rel="noopener noreferrer"
            aria-label={`${partner.name} — ${ukrainian ? 'відкрити сайт у новій вкладці' : 'open website in a new tab'}`}>
            <img src={partner.logo} alt={partner.name} width={partner.width} height={partner.height} loading="lazy" />
          </a>
        </li>)}
      </ul>
    </div>
  </section>;
}
