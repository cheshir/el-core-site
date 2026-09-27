import { useLanguage } from '../LanguageContext';
import { BOOKING_URL } from '../siteConfig';
import React from 'react';

const HowWeWork: React.FC = () => {
  const { t } = useLanguage();
  const principles = [
    {
      title: t("Strategic Intent"),
      text: t("We move away from transactional filling to deliberate strategic choices. We take responsibility for every profile we present to leadership.")
    },
    {
      title: t("Deep Immersion"),
      text: t("We deeply immerse ourselves in your specific business context, culture, and long-term goals to ensure every leadership hire is aligned.")
    },
    {
      title: t("Market Honesty"),
      text: t("We speak honestly about market reality and provide strategic input rather than just hiring feedback. Clarity is our primary deliverable.")
    },
    {
      title: t("True Partnership"),
      text: t("We share the weight of the decision-making process. We don't just find people; we build the infrastructure that allows your business to scale.")
    },
    {
      title: t("Structural Stability"),
      text: t("Hiring is a tool for stability, not just growth. We design processes that reduce operational friction and improve long-term outcomes.")
    }
  ];

  const CAL_LINK = BOOKING_URL;

  return (
    <section id="how-we-work" className="py-32 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-24">
          <div className="inline-block py-1 px-4 border border-[#8DE9CF] rounded-full text-[#8DE9CF] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">{t("Methodology")}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#102a43] mb-12 tracking-tight">{t("How We Work")}</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-[#102a43] mb-6 tracking-tight">{t("Strategic Partnership")}</h3>
              <p className="text-xl text-gray-400 font-light leading-relaxed">{t("Our approach is built on accountability, precision, and depth. We focus on qualitative outcomes rather than recruitment volume.")}</p>
            </div>
            <div className="hidden lg:block h-px bg-gray-200 mt-8"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {principles.map((p, i) => (
            <div key={i} className="group relative bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col gap-6">
                <div className="w-10 h-10 rounded-full bg-[#f8fafc] border border-gray-100 flex items-center justify-center text-[10px] font-bold text-[#8DE9CF] group-hover:bg-[#8DE9CF] group-hover:text-[#102a43] transition-all duration-500">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#102a43] tracking-tight group-hover:text-[#8DE9CF] transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm transition-all duration-300 group-hover:scale-[1.025] group-hover:leading-[1.75] origin-left">
                    {p.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="hidden lg:flex flex-col items-center justify-center p-10 bg-[#102a43] rounded-[2rem] text-center shadow-lg group">
             <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#8DE9CF] mb-4">{t("Focus Protocol")}</p>
             <p className="text-gray-400/80 text-xs font-medium leading-relaxed transition-all duration-300 group-hover:text-gray-200 group-hover:scale-[1.02] origin-center">{t("Strategic Intent · Qualitative")}{" "}<br/>{t("Shortlists Only · Context First")}</p>
          </div>
        </div>

        <div className="mt-32 reveal pt-20 border-t border-gray-200 flex flex-col items-center text-center">
          <p className="text-gray-400 text-sm italic max-w-xl mx-auto mb-10">{t("We don't play volume games. We build the people infrastructure that allows your business to scale with clarity.")}</p>
          <a 
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 bg-[#102a43] text-[#8DE9CF] font-bold py-5 px-12 rounded-2xl transition-all hover:shadow-2xl active:scale-95"
          >
            <span className="uppercase tracking-[0.2em] text-xs">{t("Discuss your situation")}</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;