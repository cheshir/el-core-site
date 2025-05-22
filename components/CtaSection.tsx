
import React from 'react';
import { Button } from './ui/Button';
import { WhatsAppIcon, TelegramIcon, LinkedInIcon, EmailIcon, SOCIAL_LINKS } from '../constants';

export const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Ready to hire without the guesswork?
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Let’s build your next core hire together — fast, smart, and right the first time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <Button 
            href="https://calendly.com/your-el-core-link" // Replace with actual Calendly link
            target="_blank" 
            rel="noopener noreferrer"
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto animate-pulse-slow"
          >
            Book Your Free Consultation
          </Button>
        </div>
        <p className="text-gray-400 mb-4">Or reach out directly:</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" variant="outline" className="!border-gray-500 !text-gray-300 hover:!bg-brand-accent hover:!text-brand-primary" leftIcon={<WhatsAppIcon className="w-5 h-5" />}>
            WhatsApp
          </Button>
          <Button href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" variant="outline" className="!border-gray-500 !text-gray-300 hover:!bg-brand-accent hover:!text-brand-primary" leftIcon={<TelegramIcon className="w-5 h-5" />}>
            Telegram
          </Button>
          <Button href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" variant="outline" className="!border-gray-500 !text-gray-300 hover:!bg-brand-accent hover:!text-brand-primary" leftIcon={<LinkedInIcon className="w-5 h-5" />}>
            LinkedIn
          </Button>
           <Button href={SOCIAL_LINKS.email} variant="outline" className="!border-gray-500 !text-gray-300 hover:!bg-brand-accent hover:!text-brand-primary" leftIcon={<EmailIcon className="w-5 h-5" />}>
            Email Us
          </Button>
        </div>
      </div>
    </section>
  );
};
