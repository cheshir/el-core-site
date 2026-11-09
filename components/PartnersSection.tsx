import React from 'react';
import { useLanguage } from '../LanguageContext';

const partners = [
  { name: 'Altixon', logo: '/partners/altixon-transparent.png', url: 'https://www.altixon.com/', width: 1254, height: 1254, bounds: [228, 378, 781, 505], displayWidth: 120 },
  { name: 'Anatolii Kompanichenko', logo: '/partners/anatolii-kompanichenko.png', url: 'https://thekompanichenko.com/', width: 2691, height: 502, bounds: [208, 120, 2275, 261], displayWidth: 240 },
  { name: 'Cortance', logo: '/partners/cortance.png', url: 'https://cortance.com/', width: 361, height: 64, bounds: [0, 0, 361, 61], displayWidth: 220 },
  { name: 'Robomate', logo: '/partners/robomate.svg', url: 'https://www.robomate.tech/', width: 283, height: 52, bounds: [0, 0, 283, 52], displayWidth: 220 },
];

export default function PartnersSection() {
  const { language } = useLanguage();
  const ukrainian = language === 'uk';

  return <section className="section partners-section" id="partners" aria-labelledby="partners-title">
    <div className="wrap">
      <div className="section-heading reveal">
        <span className="eyebrow" id="partners-title" role="heading" aria-level={2}>{ukrainian ? 'Партнери' : 'Partners'}</span>
      </div>
      <ul className="partners-grid">
        {partners.map(partner => <li key={partner.url} className="reveal">
          <a className="partner-card" href={partner.url} target="_blank" rel="noopener noreferrer"
            aria-label={`${partner.name} — ${ukrainian ? 'відкрити сайт у новій вкладці' : 'open website in a new tab'}`}>
            <span className="partner-logo" style={{ width: `min(100%, ${partner.displayWidth}px)`, aspectRatio: `${partner.bounds[2]} / ${partner.bounds[3]}` }}>
              <img src={partner.logo} alt={partner.name} width={partner.width} height={partner.height} loading="lazy"
                style={{ width: `${partner.width / partner.bounds[2] * 100}%`, left: `${-partner.bounds[0] / partner.bounds[2] * 100}%`, top: `${-partner.bounds[1] / partner.bounds[3] * 100}%` }} />
            </span>
          </a>
        </li>)}
      </ul>
    </div>
  </section>;
}
