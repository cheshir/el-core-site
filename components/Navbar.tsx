
import React, { useState } from 'react';
import { NAV_LINKS, MenuIcon, CloseIcon } from '../constants';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex-shrink-0">
            <span className="text-3xl font-extrabold text-brand-primary">Elevate Core</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map(link => (
              <a
                key={link.id}
                href={link.href}
                className="text-brand-secondary hover:text-brand-accent font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" size="md">Book a Call</Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-primary hover:text-brand-accent p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-40">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {NAV_LINKS.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-secondary hover:bg-brand-accent hover:text-brand-primary"
              >
                {link.label}
              </a>
            ))}
             <Button href="#contact" variant="primary" size="md" className="w-full mt-2">Book a Call</Button>
          </nav>
        </div>
      )}
    </header>
  );
};
