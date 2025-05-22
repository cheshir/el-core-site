import React from 'react';
import { NAV_LINKS, CONTACTS, WhatsAppIcon, TelegramIcon, LinkedInIcon, EmailIcon } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">El-Core</h3>
            <p className="text-sm text-gray-400">
              Executive Search & Tech Recruitment.
              <br />
              Building Europe's High-Impact Teams.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={`footer-${link.id}`}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-accent transition-colors">
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-brand-accent transition-colors">
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-400 hover:text-brand-accent transition-colors">
                <TelegramIcon className="w-6 h-6" />
              </a>
               <a href={CONTACTS.mailto} aria-label="Email" className="text-gray-400 hover:text-brand-accent transition-colors">
                <EmailIcon className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              <a href={CONTACTS.mailto} className="hover:text-brand-accent transition-colors">{CONTACTS.mailto.replace('mailto:', '')}</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} El-Core. All rights reserved.</p>
          <p className="mt-1">
            <a href="#privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</a> | <a href="#terms-of-use" className="hover:text-brand-accent transition-colors">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
};