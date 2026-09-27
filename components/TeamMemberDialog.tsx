import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import SocialLink from './SocialLink';

type TeamMember = {
  id: string; name: string; role: string; photo: string; photoWidth: number; photoHeight: number;
  thesis: string; facts: string[]; label: string; expertise: string; languages: string;
};

export default function TeamMemberDialog({ person, onClose }: { person: TeamMember | null; onClose: () => void }) {
  const { language } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const [closing, setClosing] = useState(false);
  const c = (en: string, uk: string) => language === 'uk' ? uk : en;

  useEffect(() => {
    if (!person) return;
    const element = dialog.current!;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    setClosing(false);
    element.showModal();
    element.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      previous?.focus({ preventScroll: true });
    };
  }, [person?.id]);

  useEffect(() => {
    if (!closing) return;
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180;
    const timer = window.setTimeout(onClose, delay);
    return () => window.clearTimeout(timer);
  }, [closing, onClose]);

  return <dialog ref={dialog} className={`contact-dialog team-dialog${closing ? ' is-closing' : ''}`}
    aria-labelledby="team-dialog-title"
    onCancel={event => { event.preventDefault(); setClosing(true); }}
    onClick={event => { if (event.target === event.currentTarget) setClosing(true); }}
    onKeyDown={event => {
      if (event.key !== 'Tab') return;
      const controls = (event.currentTarget as HTMLDialogElement).querySelectorAll<HTMLElement>('button, a[href]');
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
    {person && <div className="contact-dialog-inner">
      <button type="button" className="dialog-close" autoFocus aria-label={c('Close expertise', 'Закрити інформацію про досвід')} onClick={() => setClosing(true)}>×</button>
      <span className="hero-eyebrow">{c('CORE TEAM', 'ОСНОВНА КОМАНДА')}</span>
      <div className="team-dialog-header">
        <div className={`team-photo team-photo-${person.id}`}><img src={person.photo} alt={person.name} width={person.photoWidth} height={person.photoHeight} /></div>
        <div><h2 id="team-dialog-title">{person.name}</h2><p>{person.role}</p></div>
      </div>
      <p className="team-dialog-thesis">{person.thesis}</p>
      <ul className="team-person-facts">{person.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
      <dl className="team-dialog-details">
        <div><dt>{person.label}</dt><dd>{person.expertise}</dd></div>
        <div><dt>{c('Languages', 'Мови')}</dt><dd>{person.languages}</dd></div>
      </dl>
      {person.id === 'tetiana' && <div className="team-dialog-socials social-icon-group">
        <SocialLink network="linkedin" href="https://www.linkedin.com/in/borysovatetiana/" label="Tania Borysova on LinkedIn" />
        <SocialLink network="instagram" href="https://www.instagram.com/leaddzen/" label="Tania Borysova on Instagram" />
      </div>}
    </div>}
  </dialog>;
}
