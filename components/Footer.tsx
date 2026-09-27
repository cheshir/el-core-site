import LanguageLink from './LanguageLink';
import { useConsent } from '../ConsentContext';
import SocialLink from './SocialLink';
import Logo from './Logo';
import GoodFirmsBadge from '../assets/badges/goodfirms-business-services.svg';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { openSettings } = useConsent();
  const { language } = useLanguage();
  const c = (en: string, uk: string) => language === 'uk' ? uk : en;

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="footer-brand">
              <a className="footer-logo" href="#top" aria-label={c('Elevate Core home', 'Elevate Core — головна')}>
                <Logo light className="brand-logo" />
              </a>
              <p>{c('Recruiting Partner', 'Рекрутинг-партнер')}<br />{c('Ukraine & Europe', 'Україна та Європа')}</p>
            </div>
            <div className="footer-contact">
              <span className="eyebrow">{c('Let’s connect', 'На зв’язку')}</span>
              <a href="mailto:hello@el-core.eu">hello@el-core.eu</a>
              <a href="tel:+385919497822">+385 91 949 7822</a>
              <div className="footer-socials">
                <a href="https://t.me/elevate_core" target="_blank" rel="noopener noreferrer">Telegram ↗</a>
                <a href="https://wa.me/385919497822" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
                <div className="social-icon-group">
                  <SocialLink network="linkedin" href="https://www.linkedin.com/company/elevate-core" />
                  <SocialLink network="instagram" href="https://www.instagram.com/elevate.core_zen" />
                </div>
              </div>
            </div>
            <a className="footer-goodfirms" href="https://www.goodfirms.co/company/elevate-core" target="_blank" rel="noopener noreferrer" aria-label={c('View Elevate Core on GoodFirms. Opens in a new tab.', 'Переглянути Elevate Core на GoodFirms. Відкриється в новій вкладці.')}>
              <img src={GoodFirmsBadge} alt="GoodFirms — Top Business Services Company" width="140" height="146" loading="lazy" />
            </a>
          </div>
          <div className="footer-right">
            <nav className="footer-nav" aria-label={c('Footer navigation', 'Навігація внизу сайту')}>
              <span className="eyebrow">{c('Explore', 'Навігація')}</span>
              <a href="#recruitment">{c('Work with us', 'Працюймо разом')}</a>
              <a href="#industries">{c('Industries', 'Галузі')}</a>
              <a href="#additional-services">{c('For your team', 'Для команди')}</a>
              <a href="#team-expertise">{c('Team', 'Команда')}</a>
              <a href="#how-we-work">{c('How we work', 'Як працюємо')}</a>
              <a href="#blog">{c('Blog', 'Блог')}</a>
              <a href="#contact">{c('Let’s talk', 'Поговорімо')}</a>
            </nav>
            <nav className="footer-legal" aria-label={c('Privacy and cookies', 'Приватність та cookies')}>
              <a href="#privacy-policy">{c('Privacy Policy', 'Політика конфіденційності')}</a>
              <a href="#cookie-policy">{c('Cookie Policy', 'Політика cookies')}</a>
              <button aria-haspopup="dialog" onClick={openSettings}>{c('Cookie Settings', 'Налаштування cookies')}</button>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Elevate Core</span>
          <span lang="en">Who You Hire Is Who You Become.</span>
          <div className="language-switch" role="group" aria-label={c('Footer language', 'Мова внизу сайту')}>
            <LanguageLink language="en" />
            <span>/</span>
            <LanguageLink language="uk" />
          </div>
        </div>
      </div>
    </footer>
  );
}
