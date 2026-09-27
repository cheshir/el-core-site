import React, { useEffect, useState } from 'react';
import CookieConsent from './components/CookieConsent';
import LegalPage, { type LegalDocument } from './components/LegalPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import ContactDialog from './components/ContactDialog';
import { useLanguage } from './LanguageContext';
import type { ContactService, OpenContact } from './siteConfig';

export default function App() {
  const [hash, setHash] = useState('');
  const legalDocument = ['#privacy-policy', '#cookie-policy'].includes(hash) ? hash.slice(1) as LegalDocument : null;
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener('hashchange', update);
    window.addEventListener('popstate', update);
    return () => { window.removeEventListener('hashchange', update); window.removeEventListener('popstate', update); };
  }, []);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (legalDocument) { window.scrollTo({ top: 0, behavior: 'instant' }); document.querySelector<HTMLElement>('.legal-heading h1')?.focus({ preventScroll: true }); }
      else if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, legalDocument]);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactService, setContactService] = useState<ContactService>();
  const openContact: OpenContact = service => { setContactService(service); setContactOpen(true); };
  const { language } = useLanguage();
  useEffect(() => {
    document.documentElement.classList.add('is-interactive');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [language, legalDocument]);
  return <div className="site-shell">
    <a className="skip-link" href="#main">{language === 'uk' ? 'Перейти до вмісту' : 'Skip to content'}</a>
    <Navbar />
    <main id="main">{legalDocument ? <LegalPage document={legalDocument} /> : <><Hero onContact={() => openContact()} /><HomePage onContact={openContact} /></>}</main>
    <Footer />
    <CookieConsent />
    <ContactDialog service={contactService} open={contactOpen} onClose={() => setContactOpen(false)} />
  </div>;
}
