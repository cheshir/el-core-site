import React from 'react';

const Hero: React.FC = () => {
  const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/elevate-core', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/> },
    { name: 'Instagram', href: 'https://www.instagram.com/elevate.core_zen', icon: <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z"/> },
    { name: 'Telegram', href: 'https://t.me/elevate_core', icon: <path d="M21.13 2.92a.5.5 0 0 0-.58.07L2.43 11.23a.5.5 0 0 0 .04.9l4.5 2.14 2 6.5a.5.5 0 0 0 .91.08l2.92-4.14 5.37 3.86a.5.5 0 0 0 .8-.32l3-17a.5.5 0 0 0-.76-.43z"/> },
    { name: 'WhatsApp', href: 'https://wa.me/385919497822', icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.3 8.38 8.38 0 0 1 3.8.9l5.7-1.4z"/> }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#102a43] overflow-hidden text-center">
      {/* Hidden SEO H1 - Strategic Requirement */}
      <h1 className="sr-only">Strategic Recruitment & Hiring Consulting for Growing Teams</h1>

      {/* Refined Atmospheric Background with Visible Photo Texture */}
      <div className="absolute inset-0 z-0">
        {/* Lighter midtones, reduced contrast, softer atmospheric presence */}
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Professional modern office environment representing Elevate Core's strategic recruitment services" 
          className="w-full h-full object-cover opacity-[0.22] saturate-[0.6] brightness-[1.15] contrast-[0.75] blur-[1px]"
        />
        
        {/* Layered Overlay for Depth - Calm & Spacing-focused */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(circle at 50% 40%, rgba(16, 42, 67, 0) 0%, rgba(16, 42, 67, 0.85) 90%)' 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#102a43]/40 via-transparent to-[#102a43]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-48 pb-24 reveal flex flex-col items-center">
        {/* Context Label - Larger and clearer spacing */}
        <div className="inline-flex items-center py-2 px-8 bg-white/5 border border-white/10 rounded-full text-[#8DE9CF] text-[12px] font-bold tracking-[0.4em] uppercase mb-16 select-none shadow-sm">
          Strategic Recruitment — UA & EU focused.
        </div>
        
        {/* Headline: Crisp, floating high-contrast text */}
        <h2 className="text-4xl md:text-[4.25rem] font-bold text-white leading-[1.2] tracking-tight mb-16 max-w-4xl drop-shadow-xl">
          Who You Hire Is <br/>
          <span className="text-[#8DE9CF]">Who You Become.</span>
        </h2>

        {/* Supporting Copy - Breathable leading and soft neutral color */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-[1.8] font-medium mb-24 opacity-90">
          We step in when hiring affects revenue, structure, and long-term decisions — not just headcount. Let’s find the people you’ll be proud to grow with.
        </p>

        {/* Action & Manifesto Grouping */}
        <div className="flex flex-col items-center justify-center gap-12 mb-20">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-[#8DE9CF] hover:bg-white text-[#102a43] font-bold py-6 px-20 rounded-2xl text-[12px] uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-95"
          >
            Start the conversation
          </a>
          
          {/* Static Principle Statement: Minimalistic Manifesto - Grounded and visible */}
          <div className="flex flex-col items-center gap-6">
            <div className="h-px w-10 bg-[#8DE9CF]/30"></div>
            <p className="text-white/50 text-[11px] font-bold uppercase tracking-[0.4em] select-none cursor-default leading-relaxed max-w-sm">
              No sales pitch. Just structure.
            </p>
          </div>
        </div>

        {/* Quiet Social Presence */}
        <div className="flex items-center justify-center gap-12 mt-4">
          {socials.map((s) => (
            <a 
              key={s.name} 
              href={s.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Follow Elevate Core on ${s.name}`}
              className="text-[#8DE9CF]/75 hover:text-[#8DE9CF] transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(141,233,207,0.5)]" 
              title={s.name}
            >
              <svg className="w-[1.25rem] h-[1.25rem]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;