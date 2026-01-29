import React from 'react';
import Logo from './Logo';
import TrustedBySection from './TrustedBySection';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/elevate-core', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /> },
    { name: 'Instagram', href: 'https://www.instagram.com/elevate.core_zen', icon: <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" /> },
    { name: 'Telegram', href: 'https://t.me/elevate_core', icon: <path d="M21.13 2.92a.5.5 0 0 0-.58.07L2.43 11.23a.5.5 0 0 0 .04.9l4.5 2.14 2 6.5a.5.5 0 0 0 .91.08l2.92-4.14 5.37 3.86a.5.5 0 0 0 .8-.32l3-17a.5.5 0 0 0-.76-.43z" /> },
    { name: 'WhatsApp', href: 'https://wa.me/385919497822', icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.3 8.38 8.38 0 0 1 3.8.9l5.7-1.4z" /> }
  ];

  const CAL_LINK = "https://cal.com/tetiana-borysova-elevate-core/30min";

  return (
    <footer className="bg-[#102a43] text-[#f0f4f8]">
      {/* Soft Footer CTA Banner */}
      <div className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] py-24 px-8 md:px-24 text-center reveal">
            <p className="text-xl md:text-2xl text-gray-300 font-medium italic mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
              Let’s meet for a coffee — the first conversation is on us. We’ll explore your situation and see where we can be useful.
            </p>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8DE9CF] hover:bg-[#b0f5e1] text-[#102a43] font-bold py-5 px-14 rounded-2xl text-[11px] uppercase tracking-widest transition-all shadow-lg active:scale-95"
            >
              Book a free conversation
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-2 space-y-12">
            <a href="/" aria-label="Return to home page" className="inline-block transition-transform hover:scale-[1.01]">
              <Logo className="h-16 md:h-20" light={true} />
            </a>

            <div className="space-y-4 max-w-md">
              <h4 className="text-white text-2xl font-bold leading-tight tracking-tight">
                Who You Hire Is Who You Become.
              </h4>
              <p className="text-gray-400 leading-relaxed text-lg font-medium opacity-70">
                Let’s find the people you’ll be proud to grow with. We focus on the core talent that drives sustainable growth.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Direct Contact</span>
                <a href="mailto:hello@el-core.eu" className="text-[#8DE9CF] font-bold text-lg tracking-tight hover:text-white transition-colors">
                  hello@el-core.eu
                </a>
                <a href="tel:+385919497822" className="text-white font-bold text-lg tracking-tight hover:text-[#8DE9CF] transition-colors">
                  +385 91 949 7822
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Elevate Core on ${s.name}`}
                    className="text-[#8DE9CF]/80 hover:text-[#8DE9CF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(141,233,207,0.5)]"
                    title={s.name}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <nav className="space-y-10" aria-label="Footer quick links">
            <h4 className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">Quick Links</h4>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-gray-400">
              <li><a href="#how-we-work" className="hover:text-[#8DE9CF] transition-colors">How We Work</a></li>
              <li><a href="#cases" className="hover:text-[#8DE9CF] transition-colors">Cases</a></li>
              <li><a href="#industry-focus" className="hover:text-[#8DE9CF] transition-colors">Industry Focus</a></li>
              <li><a href="#packages" className="hover:text-[#8DE9CF] transition-colors">Packages</a></li>
              <li><a href="#contact" className="hover:text-[#8DE9CF] transition-colors">Contact</a></li>
            </ul>

            <TrustedBySection />
          </nav>

          <div className="space-y-10">
            <h4 className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">Operations</h4>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Region</span>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                  UA & EU focused. Remote — DACH / Nordics / Benelux / UK / USA / Canada
                </p>
                <div className="mt-3 pt-3 border-t border-white/5">
                  <p className="text-[#8DE9CF]/90 text-[11px] font-semibold tracking-wide leading-relaxed">
                    GDPR-first. Transparent data handling. No blind outreach.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Focus</span>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">Executive & Tech Search</p>
              </div>

              <div className="pt-8 opacity-80 hover:opacity-100 transition-opacity">
                <a target="_blank" href="https://www.goodfirms.co/company/elevate-core" rel="noopener noreferrer" aria-label="Visit Elevate Core profile on GoodFirms">
                  <img
                    style={{ width: '243px' }}
                    src="https://assets.goodfirms.co/badges/color-badge/business-services.svg"
                    title="Top Business Services Company - Elevate Core"
                    alt="Top Business Services Company recognition for Elevate Core on GoodFirms"
                  />
                </a>
              </div>



            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">© 2024 Elevate Core. EU Operations.</p>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;