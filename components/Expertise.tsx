import React from 'react';

const Expertise: React.FC = () => {
  const sectors = [
    {
      title: "IT & Tech",
      description: "For product and service companies, startups, and scale-ups where technology directly impacts growth.",
      tags: ["SaaS", "iGaming", "AI / Data", "Startups", "FinTech", "MarTech"],
      sectionLabel: "Typical client challenges",
      sectionItems: [
        "Building or rebuilding a core team",
        "Hiring Tech Lead, CTO, or Head-level roles",
        "Strengthening product or delivery capabilities",
        "Taking recruitment pressure off the CEO / CTO"
      ],
      outcome: "Structured hiring, realistic timelines, and teams that can sustain growth."
    },
    {
      title: "Performance Marketing",
      description: "A dedicated direction with a deep understanding of traffic economics, performance metrics, and team dynamics.",
      tags: ["Product", "Affiliate projects"],
      sectionLabel: "Roles",
      sectionItems: [
        "Media Buyers",
        "Affiliate Managers",
        "Team Leads",
        "Heads of Media Buying",
        "Technical Operations"
      ],
      outcome: "People who think in numbers, work systematically, and scale performance."
    },
    {
      title: "Non-IT & Business Roles",
      description: "For companies where operational stability and sales performance are business-critical.",
      tags: ["Agencies", "Logistics", "Sales"],
      sectionLabel: "Roles",
      sectionItems: [
        "Sales & Business Development",
        "Marketing & Account Management",
        "Logistics · Finance · Accounting",
        "Operations · Administration"
      ],
      outcome: "Reliable professionals who hold processes together."
    }
  ];

  return (
    <section id="industry-focus" className="py-24 md:py-32 bg-[#102a43]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="reveal mb-16 md:mb-20">
          <div className="inline-block py-1.5 px-5 border border-[#8DE9CF]/30 rounded-full text-[#8DE9CF] text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
            Specialization
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Industry Focus</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
            Nuanced hiring where understanding the business context is just as important as reading the CV.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 reveal">
          {sectors.map((sector, i) => (
            <div key={i} className="flex flex-col bg-white p-7 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl text-left group transition-all duration-500 hover:-translate-y-1">
              {/* Card Header Indicator */}
              <div className="w-10 h-10 rounded-[14px] bg-[#102a43] flex items-center justify-center mb-6 group-hover:bg-[#8DE9CF] transition-colors">
                <span className="text-[#8DE9CF] group-hover:text-[#102a43] font-bold text-[10px]">0{i + 1}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#102a43] tracking-tight leading-tight">{sector.title}</h3>
              <p className="text-[#486581] text-sm leading-relaxed mb-5 font-medium opacity-90">
                {sector.description}
              </p>
              
              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mb-6">
                {sector.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold text-[#102a43] bg-gray-50 border border-gray-100 py-1.5 px-3 rounded-lg uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Roles / Challenges Section */}
              <div className="flex-grow">
                <div className="text-[9px] font-black text-[#102a43]/30 uppercase tracking-[0.3em] mb-4">
                  {sector.sectionLabel}
                </div>
                <div className="space-y-2.5">
                  {sector.sectionItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8DE9CF] mt-1.5 shrink-0"></div>
                      <p className="text-sm text-[#102a43] font-medium leading-snug opacity-80">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome Section - Anchored and distinctive */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-[9px] font-bold text-[#5bb79c] uppercase tracking-[0.3em] mb-2.5">Outcome</div>
                <p className="text-[15px] font-bold text-[#102a43] tracking-tight leading-snug">
                  {sector.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;