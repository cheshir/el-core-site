import { useLanguage } from '../LanguageContext';
import React from 'react';

const Expertise: React.FC = () => {
  const { t } = useLanguage();
  const sectors = [
    {
      title: t("IT & Tech"),
      description: t("For product and service companies, startups, and scale-ups where technology directly impacts growth."),
      tags: [t("SaaS"), t("iGaming"), t("AI / Data"), t("Startups"), t("FinTech"), t("MarTech")],
      sectionLabel: t("Typical client challenges"),
      sectionItems: [
        t("Building or rebuilding a core team"),
        t("Hiring Tech Lead, CTO, or Head-level roles"),
        t("Strengthening product or delivery capabilities"),
        t("Taking recruitment pressure off the CEO / CTO")
      ],
      outcome: t("Structured hiring, realistic timelines, and teams that can sustain growth.")
    },
    {
      title: t("Performance Marketing"),
      description: t("A dedicated direction with a deep understanding of traffic economics, performance metrics, and team dynamics."),
      tags: [t("Product"), t("Affiliate projects")],
      sectionLabel: t("Roles"),
      sectionItems: [
        t("Media Buyers"),
        t("Affiliate Managers"),
        t("Team Leads"),
        t("Heads of Media Buying"),
        t("Technical Operations")
      ],
      outcome: t("People who think in numbers, work systematically, and scale performance.")
    },
    {
      title: t("Non-IT & Business Roles"),
      description: t("For companies where operational stability and sales performance are business-critical."),
      tags: [t("Agencies"), t("Logistics"), t("Sales")],
      sectionLabel: t("Roles"),
      sectionItems: [
        t("Sales & Business Development"),
        t("Marketing & Account Management"),
        t("Logistics · Finance · Accounting"),
        t("Operations · Administration")
      ],
      outcome: t("Reliable professionals who hold processes together.")
    }
  ];

  return (
    <section id="industry-focus" className="py-24 md:py-32 bg-[#102a43]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="reveal mb-16 md:mb-20">
          <div className="inline-block py-1.5 px-5 border border-[#8DE9CF]/30 rounded-full text-[#8DE9CF] text-[10px] font-bold tracking-[0.4em] uppercase mb-6">{t("Specialization")}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">{t("Industry Focus")}</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">{t("Nuanced hiring where understanding the business context is just as important as reading the CV.")}</p>
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
                <div className="text-[9px] font-bold text-[#5bb79c] uppercase tracking-[0.3em] mb-2.5">{t("Outcome")}</div>
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