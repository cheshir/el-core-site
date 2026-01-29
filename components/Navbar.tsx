import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Cases', href: '#cases' },
    { label: 'Industry Focus', href: '#industry-focus' },
    { label: 'Packages', href: '#packages' },
    { label: 'Contact', href: '#contact' }
  ];

  const CAL_LINK = "https://cal.com/tetiana-borysova-elevate-core/30min";

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Contact Layer Top Bar */}
      <div className="bg-[#102a43] text-white/60 py-3 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-[9px] font-bold tracking-[0.2em] uppercase">
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6 opacity-40">
              <a href="mailto:hello@el-core.eu" className="hover:text-[#8DE9CF] transition-colors">hello@el-core.eu</a>
              <span className="w-1 h-1 rounded-full bg-white/10"></span>
              <a href="tel:+385919497822" className="hover:text-[#8DE9CF] transition-colors">+385 91 949 7822</a>
            </div>
            
            <a 
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8DE9CF]/5 backdrop-blur-sm border border-[#8DE9CF]/30 px-6 py-2 rounded-full flex items-center gap-3 hover:bg-[#8DE9CF]/15 hover:border-[#8DE9CF]/50 transition-all duration-500 cursor-pointer group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DE9CF] opacity-60 group-hover:opacity-100 transition-opacity"></span>
              <span className="text-[#8DE9CF] tracking-[0.18em] text-center">
                Let’s meet for an online coffee. No agenda. No pressure. Just clarity.
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-white py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center transform transition-transform duration-300 hover:scale-[1.01]">
            <Logo className="h-10 md:h-12" />
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-[11px] font-bold text-[#486581] hover:text-[#8DE9CF] uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#102a43] hover:bg-[#1a3a5a] text-[#8DE9CF] font-bold py-3 px-10 rounded-2xl text-[11px] uppercase tracking-widest transition-all shadow-sm active:scale-95"
            >
              Book a Call
            </a>
          </div>

          <button className="md:hidden p-2 text-[#102a43]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16"></path></svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;