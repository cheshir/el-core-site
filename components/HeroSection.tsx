
import React from 'react';
import { Button } from './ui/Button';
import { WhatsAppIcon, TelegramIcon, LinkedInIcon, SOCIAL_LINKS } from '../constants';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-brand-primary text-white py-20 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/modernabstract/1920/1080')" }}
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight">
            Who You Hire Is <span className="text-brand-accent">Who You Become</span>.
            <br />
            Let’s find the people you’ll be proud to grow with.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
            Executive Search & Recruitment for high-stakes hiring across Europe.
            Specializing in tech, product, and leadership roles for complex industries.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button href={SOCIAL_LINKS.calendly} variant="primary" size="lg" className="w-full sm:w-auto">
              Book a Discovery Call
            </Button>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="text-gray-400 hover:text-brand-accent transition-colors duration-150">
                <WhatsAppIcon className="w-8 h-8" />
              </a>
              <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Contact on Telegram" className="text-gray-400 hover:text-brand-accent transition-colors duration-150">
                <TelegramIcon className="w-8 h-8" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn" className="text-gray-400 hover:text-brand-accent transition-colors duration-150">
                <LinkedInIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
