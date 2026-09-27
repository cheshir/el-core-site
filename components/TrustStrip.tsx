import React from 'react';
import { useLanguage } from '../LanguageContext';
import DesignRushLogo from '@/assets/desingrush.png';

// Static profile links: no third-party scripts, frames or requests before a click.
// Ratings checked against the linked profiles on 27 September 2026.
export default function TrustStrip() {
  const { language } = useLanguage();
  const c = (en: string, uk: string) => language === 'uk' ? uk : en;

  return (
    <section className="trust-strip" aria-labelledby="trust-strip-title">
      <div className="wrap trust-strip-layout">
        <h2 id="trust-strip-title" className="trust-statement">
          {c('Verified. Rated. Trusted.', 'Перевірені. Оцінені. Надійні.')}
        </h2>
        <div className="trust-profiles">
          <a className="trust-profile trust-goodfirms" href="https://www.goodfirms.co/company/elevate-core" target="_blank" rel="noopener noreferrer"
            aria-label={c('GoodFirms: 5 out of 5, 1 review. Open our profile in a new tab.', 'GoodFirms: 5 із 5, 1 відгук. Відкрити профіль у новій вкладці.')}>
            <div className="trust-rating-line"><span>{c('Excellent', 'Відмінно')}</span><span className="trust-stars" aria-hidden="true">★★★★★</span></div>
            <strong className="trust-wordmark">GoodFirms</strong>
            <span className="trust-review-count">{c('Based on 1 review', 'На основі 1 відгуку')}</span>
          </a>
          <a className="trust-profile trust-clutch" href="https://clutch.co/profile/elevate-core" target="_blank" rel="noopener noreferrer"
            aria-label={c('Clutch: 5 out of 5, 3 reviews. Open our profile in a new tab.', 'Clutch: 5 із 5, 3 відгуки. Відкрити профіль у новій вкладці.')}>
            <span className="trust-review-label">{c('Reviewed on', 'Відгуки на')}</span>
            <strong className="trust-wordmark">Clutch</strong>
            <div className="trust-rating-line"><span className="trust-stars" aria-hidden="true">★★★★★</span><span className="trust-review-count">{c('3 reviews', '3 відгуки')}</span></div>
          </a>
          <a className="trust-profile trust-designrush" href="https://www.designrush.com/agency/profile/elevate-core" target="_blank" rel="noopener noreferrer"
            aria-label={c('View Elevate Core on DesignRush. Opens in a new tab.', 'Переглянути Elevate Core на DesignRush. Відкриється в новій вкладці.')}>
            <img src={DesignRushLogo} alt="DesignRush — View our profile, 2025" width="120" height="160" loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
}
