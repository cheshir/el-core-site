import { CONTACT_SERVICES, type ContactService } from '../siteConfig';
import { useLanguage } from '../LanguageContext';
import React, { useEffect, useRef } from 'react';

export default function ContactDialog({ open, service, onClose }: { open: boolean; service?: ContactService; onClose: () => void }) {
  const { t, language } = useLanguage();
  const serviceName = service ? CONTACT_SERVICES[service][language] : undefined;
  const message = serviceName ? (language === 'uk' ? `Вітаю! Мене цікавить ${serviceName}.` : `Hello! I’m interested in ${serviceName}.`) : undefined;
  const emailUrl = serviceName ? `mailto:hello@el-core.eu?subject=${encodeURIComponent(`Elevate Core — ${serviceName}`)}&body=${encodeURIComponent(message!)}` : 'mailto:hello@el-core.eu';
  const whatsappUrl = `https://wa.me/385919497822${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.current?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [open]);
  return <dialog ref={dialog} className="contact-dialog" aria-labelledby="contact-dialog-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={event => {
    if (event.key !== 'Tab') return;
    const controls = (event.currentTarget as HTMLDialogElement).querySelectorAll<HTMLElement>('button, a[href]');
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }}>
    <div className="contact-dialog-inner">
      <button className="dialog-close" aria-label={t("Close contact options")} onClick={onClose}>×</button>
      <span className="hero-eyebrow">{t("LET’S TALK")}</span>
      <h2 id="contact-dialog-title">{t("How would you like to continue?")}</h2>
      <p>{t("Choose the channel that works for you.")}</p>
      {serviceName && <p className="contact-interest"><span>{language === 'uk' ? 'Вас цікавить' : 'Your interest'}</span><strong>{serviceName}</strong></p>}
      <div className="contact-options">
        <a className="button button-primary" href="https://t.me/elevate_core" target="_blank" rel="noopener noreferrer">Telegram <span aria-hidden="true">↗</span></a>
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
        <a className="button button-primary" href={emailUrl}>{t("Email")}{" "}<span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </dialog>;
}
