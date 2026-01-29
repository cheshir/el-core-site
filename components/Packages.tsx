import React from 'react';

const Packages: React.FC = () => {
  const plans = [
    {
      name: "Structured Hiring",
      originalLabel: "Essential",
      desc: "For clearly defined roles with predictable market dynamics.",
      bestFor: [
        "Well-scoped positions",
        "Stable hiring needs",
        "Clear expectations from the start"
      ],
      fee: "10% of annual gross",
      features: "Benchmarking, Analytics, Pre-screening, Process mapping",
      guarantee: "1 month / 1 replacement",
      cta: "Start with Essential",
      highlight: false
    },
    {
      name: "Targeted Headhunting",
      originalLabel: "Advanced",
      desc: "For selective roles where the right profile is not actively on the market.",
      bestFor: [
        "Leadership or niche specialists",
        "Competitive sectors",
        "When speed matters, but precision matters more"
      ],
      fee: "15% of annual gross",
      features: "Active Headhunting, Selective reach, Performance analytics, References",
      guarantee: "3 months / 1 replacement",
      cta: "Choose Advanced",
      highlight: true
    },
    {
      name: "Executive & Business-Critical Hiring",
      originalLabel: "Strategic",
      desc: "For board-level, executive, or mission-critical roles that shape strategy and culture.",
      bestFor: [
        "C-level & senior leadership",
        "High-impact decisions",
        "Long-term organizational outcomes"
      ],
      fee: "20% of annual gross",
      features: "Executive assessment, Tailored profiles, Global search, Strategy alignment",
      guarantee: "6–9 months / 1 replacement",
      cta: "Discuss Strategic Engagement",
      highlight: false
    }
  ];

  const CAL_LINK = "https://cal.com/tetiana-borysova-elevate-core/30min";

  return (
    <section id="packages" className="py-32 bg-[#102a43] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="reveal mb-24">
          {/* Refined Section Label - Unified with Methodology Style - Now H2 for SEO */}
          <h2 className="inline-block py-1 px-4 border border-[#8DE9CF] rounded-full text-[#8DE9CF] text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
            Engagement Models
          </h2>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Service Packages</h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Clear scope. Transparent terms. Payment for outcomes — not promises.
          </p>

          {/* Strengthened Principles Statement */}
          <div className="mt-10 py-3 px-8 bg-[#8DE9CF]/5 border border-[#8DE9CF]/20 rounded-full inline-flex flex-col sm:flex-row items-center gap-4 md:gap-8">
            <span className="text-[#8DE9CF] text-[10px] font-black uppercase tracking-[0.25em]">No prepayments</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#8DE9CF]/30"></span>
            <span className="text-[#8DE9CF] text-[10px] font-black uppercase tracking-[0.25em]">No hidden charges</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#8DE9CF]/30"></span>
            <span className="text-[#8DE9CF] text-[10px] font-black uppercase tracking-[0.25em]">Decisions first</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-white/10 rounded-[3rem] overflow-hidden reveal mb-32 shadow-2xl">
          {plans.map((plan, i) => (
            <div key={i} className={`flex flex-col p-12 transition-all duration-700 ${plan.highlight ? 'bg-white/[0.03] border-x border-white/10 relative z-10' : 'bg-transparent'} min-h-full group`}>
              <div className="flex-grow text-left">
                <div className="mb-10">
                  <div className="text-[10px] font-bold text-[#8DE9CF] uppercase tracking-[0.3em] mb-4 opacity-60">
                    {plan.originalLabel}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-[#8DE9CF] transition-colors duration-500">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-10">
                    {plan.desc}
                  </p>
                </div>

                <div className="mb-12">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Best for:</div>
                  <ul className="space-y-4">
                    {plan.bestFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#8DE9CF] mt-1.5 shrink-0"></div>
                        <span className="text-sm text-gray-300 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-12 pt-8 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Investment Context</div>
                  <div className="text-3xl font-bold text-[#8DE9CF]">{plan.fee}</div>
                </div>

                <div className="mb-12">
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-6">Process includes:</div>
                  <div className="flex flex-wrap gap-2">
                    {plan.features.split(', ').map(feat => (
                      <span key={feat} className="text-[9px] font-bold uppercase tracking-wider py-2 px-4 bg-white/5 border border-white/10 rounded-xl text-gray-400">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10">
                <div className="flex justify-between items-center text-xs mb-8">
                  <span className="text-gray-500 font-bold uppercase tracking-widest">Guarantee</span>
                  <span className="font-bold text-gray-300">{plan.guarantee}</span>
                </div>
                <div className="mt-8">
                  <a href="#contact" className={`block w-full text-center py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${plan.highlight ? 'bg-[#8DE9CF] text-[#102a43]' : 'border border-[#8DE9CF]/30 text-[#8DE9CF] hover:bg-[#8DE9CF] hover:text-[#102a43]'}`}>
                    {plan.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Anchor Statement */}
        <div className="max-w-4xl mx-auto reveal pt-16 border-t border-white/5 flex flex-col items-center">
          <div className="bg-white/5 p-12 rounded-[28px] border border-white/10 w-full mb-8">
            <h3 className="text-xl md:text-2xl font-light text-gray-300 italic mb-8">
              Not sure which level applies? <br className="md:hidden" />
              <span className="text-white font-normal not-italic">Clarity before commitments. First conversation on us.</span>
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a 
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8DE9CF] font-bold uppercase tracking-[0.3em] text-[11px] hover:text-white transition-colors border-b border-[#8DE9CF]/30 pb-2"
              >
                Strategic hiring partner
              </a>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10"></span>
              <div className="bg-white/5 py-2 px-6 rounded-full border border-white/10">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                  Startups · Scaleups · Growth
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 reveal max-w-2xl mx-auto">
          <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10">
            <p className="text-sm md:text-base text-gray-300 font-medium italic leading-relaxed">
              Our methodology is designed for businesses where outcomes matter more than activity. 
              If you are facing a role where a wrong hire changes the company's trajectory, we speak the same language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;