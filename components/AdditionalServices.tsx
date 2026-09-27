import { useLanguage } from '../LanguageContext';
import React from 'react';

const AdditionalServices: React.FC = () => {
  const { t } = useLanguage();
  const services = [
    {
      name: t("Strategic Outbound Setup"),
      price: t("from €1,500"),
      what: t("We design and manage a high-intent lead generation process focused on conversion, not volume. We take ownership of messaging, channel selection, and initial engagement to ensure your team only spends time on qualified business conversations."),
      context: t("Relevant when the sales pipeline is unstable, founders are overloaded with weak lead qualification, or growth depends on reaching a highly specific, niche audience."),
      result: t("A controlled, predictable flow of high-intent opportunities with significantly reduced noise for the leadership team.")
    },
    {
      name: t("People Operations Audit"),
      price: t("from €500"),
      what: t("An objective assessment of how your HR function supports current business milestones. We review roles, processes, and priorities to ensure the people function is a catalyst for growth rather than a source of administrative friction."),
      context: t("Best when scaling headcount isn't solving operational bottlenecks, or when there is a clear disconnect between business goals and HR output."),
      result: t("A structural roadmap that aligns people operations with business strategy—without adding unnecessary headcount.")
    },
    {
      name: t("Hiring Process Review"),
      price: t("from €500"),
      what: t("An end-to-end diagnostic of your recruitment cycle—from role definition to offer acceptance. We identify structural bottlenecks, misaligned candidate expectations, and hidden risks in your selection logic."),
      context: t("Typical when time-to-hire is increasing, conversion rates at the offer stage are low, or hiring managers feel overwhelmed by the process."),
      result: t("A faster, more predictable hiring cycle that improves candidate quality and reduces the management load on senior leadership.")
    },
    {
      name: t("Integration Frameworks"),
      price: t("from €1,000"),
      what: t("We architect onboarding systems that set clear expectations and define decision-making logic from day one. This goes beyond a 'Welcome Box' to focus on cultural alignment and operational clarity for new leadership hires."),
      context: t("Necessary when early-stage attrition is a risk, or when new hires struggle to navigate the reality of ownership and responsibility in your specific culture."),
      result: t("New hires reach full productivity faster, require less early-stage management, and make fewer costly structural mistakes.")
    },
    {
      name: t("Executive Mentoring"),
      price: t("€150 / session"),
      what: t("Decision-support for internal HR and recruitment leaders. We focus on high-stakes judgment, team dynamics, and navigating business constraints rather than theoretical frameworks or generic best practices."),
      context: t("Ideal when an internal leader is stepping into a more complex role, or when leadership feels isolated in making high-weight people decisions."),
      result: t("Sharper leadership judgment, reduced management oversight from the CEO, and a more mature internal people function.")
    },
    {
      name: t("Functional Team Design"),
      price: t("from €1,000"),
      what: t("We help design HR or recruitment teams tailored to your current scale and velocity. We move away from generic department structures toward lean, high-output systems that match your business pace."),
      context: t("Best when you are moving from 'intuitive' hiring to a structured system, or when existing internal teams are struggling to keep up with growth demands."),
      result: t("A scalable, transparent people system that provides clarity for founders and predictability for the entire organization.")
    },
    {
      name: t("Integrated Support"),
      price: t("Individual"),
      what: t("We embed a senior specialist directly into your organization to manage high-stakes hiring spikes or confidential searches. You get expert execution within your system without the long-term risk of an internal hire."),
      context: t("Relevant for temporary high-volume phases, entry into new markets, or sensitive roles that require external handling."),
      result: t("Increased hiring capacity and immediate results without increasing permanent headcount or operational overhead.")
    },
    {
      name: t("Structural Advisory"),
      price: t("Individual"),
      what: t("Focused diagnostic sessions for founders and CEOs facing high-stakes decisions around organization structure, role necessity, or leadership changes where the cost of error is high."),
      context: t("When leadership is uncertain about a role's impact, or when business-critical decisions regarding the core team feel heavy and unresolved."),
      result: t("Absolute clarity on the path forward, significantly reducing the risk of downstream structural corrections and lost momentum.")
    }
  ];

  return (
    <section id="additional-services" className="py-32 bg-[#f9fafb] text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-24">
          <div className="inline-block py-2 px-6 border border-[#8DE9CF] rounded-full text-[#8DE9CF] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">{t("Strategic Advisory")}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#102a43] mb-8 tracking-tight">{t("Additional Services")}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">{t("We don’t measure effort—we measure impact. Solutions designed for businesses where")}{" "}<span className="text-[#102a43] font-medium italic">{t("decision quality")}</span>{" "}{t("matters more than operational activity.")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 text-left reveal">
          {services.map((s, i) => (
            <div key={i} className="group bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="flex justify-between items-baseline mb-10">
                <h4 className="text-2xl font-bold text-[#102a43] tracking-tight">{s.name}</h4>
                <div className="bg-[#8DE9CF]/10 px-4 py-1 rounded-full">
                   <span className="text-[10px] font-bold text-[#8DE9CF] uppercase tracking-widest">{s.price}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-500 leading-relaxed text-sm">
                  <span className="text-[#102a43] font-bold uppercase text-[10px] tracking-widest block mb-2 opacity-40">{t("What we do")}</span>
                  {s.what}
                </p>
                
                <p className="text-gray-400 italic text-xs leading-relaxed">
                   <span className="text-[#102a43] font-bold uppercase text-[10px] tracking-widest not-italic block mb-2 opacity-40">{t("Context")}</span>
                  {s.context}
                </p>

                <div className="pt-8 border-t border-gray-100">
                   <div className="text-[10px] font-bold text-[#8DE9CF] uppercase tracking-[0.2em] mb-1">{t("Result")}</div>
                   <p className="text-base font-bold text-[#102a43] tracking-tight leading-tight">{s.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-16 reveal">
          <div className="max-w-4xl mx-auto bg-[#102a43] rounded-[3.5rem] py-24 px-10 md:px-20 text-white shadow-2xl">
            <p className="text-xl text-gray-300 font-light italic mb-12 max-w-xl mx-auto leading-relaxed">{t("Not sure which support fits your situation? Let’s talk it through.")}</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <a href="#contact" className="group inline-flex items-center gap-4 bg-[#8DE9CF] text-[#102a43] font-black py-5 px-12 rounded-2xl transition-all hover:bg-white active:scale-95">
                <span className="uppercase tracking-[0.2em] text-[13px]">{t("Discuss your needs")}</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <div className="flex flex-col items-center md:items-start text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DE9CF]"></span>
                  <span>{t("First conversation on us.")}</span>
                </div>
                <span className="opacity-50 ml-3.5">{t("Clarity before commitments.")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;