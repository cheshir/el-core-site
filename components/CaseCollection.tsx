import React, { useState } from 'react';

const CaseCollection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const cases = [
    {
      id: "01",
      title: "Growth Infrastructure: From Hiring to Lead Gen",
      description: "A gambling product company scaling rapidly across multiple operational functions.",
      summary: "Integrated recruitment and sales systems.",
      context: [
        "Closed 7 strategic hires in 90 days.",
        "Stabilized fragmented coordination channels.",
        "Identified missing alignment between sales and marketing."
      ],
      insight: [
        "Hiring alone wasn't solving the revenue bottleneck.",
        "Internal teams were spending 40% of time on low-intent leads.",
        "Recruitment needs were reactive, not proactive."
      ],
      action: [
        "Built end-to-end outbound strategy.",
        "Integrated high-intent lead generation setup.",
        "Recruited SMM to bridge marketing gap."
      ],
      solution: [
        "Moved from 'filling roles' to 'owning functions'.",
        "Established managed lead-gen ecosystem.",
        "Transferred coordination to a unified leadership layer."
      ],
      outcome: "Turned recruitment into a business-wide performance engine—managed externally, but operating as an internal core unit."
    },
    {
      id: "02",
      title: "Tactical Team Scaling: Risk-Mitigated Growth",
      description: "Product startup needing a full team for a time-bound milestone without long-term overhead.",
      summary: "Milestone-based team architecture.",
      context: [
        "Required 5+ specialists for 6-9 month phase.",
        "Goal was purely achieving specific business milestones.",
        "Direct hiring would create future redundancy risks."
      ],
      insight: [
        "Traditional hiring would damage employer brand upon downsizing.",
        "Financial liability of permanent contracts was too high.",
        "Speed was the primary constraint for the milestone."
      ],
      action: [
        "Leveraged outstaffing partner network.",
        "Assembled specialized team in under 21 days.",
        "Designed clear handover/offboarding protocol."
      ],
      solution: [
        "Eliminated long-term employment obligations.",
        "Reduced hiring and overhead budget by ~40%.",
        "Insulated company culture from 'churn' perception."
      ],
      outcome: "Achieved critical business milestones with absolute strategic flexibility and zero structural risk to the parent brand."
    },
    {
      id: "03",
      title: "Executive Hire: Strategic HRD Alignment",
      description: "Large media corporation requiring a board-level HR Director to shape governance.",
      summary: "Board-level leadership placement.",
      context: [
        "Existing HR was operational/administrative only.",
        "Business required a strategic governance partner.",
        "Leadership felt a disconnect with people strategy."
      ],
      insight: [
        "This was not an HR vacancy; it was a leadership vacancy.",
        "Success required 'board-fluency' rather than just HR metrics.",
        "Internal perception of HR needed a complete reset."
      ],
      action: [
        "Reframed role as 'Strategic People Governance'.",
        "Ran targeted executive search across non-industry sectors.",
        "Facilitated board-candidate values alignment."
      ],
      solution: [
        "Moved search focus to P&L-accountable leaders.",
        "Designed 100-day integration roadmap for the board.",
        "Shifted HR from support function to decision layer."
      ],
      outcome: "Secured a leadership hire that operates at the decision-making table, directly influencing structural efficiency and culture."
    },
    {
      id: "04",
      title: "Process Over Headcount: Scaling Efficiency",
      description: "Tech company planning to triple recruitment staff to handle growing vacancy volume.",
      summary: "Operational process stabilization.",
      context: [
        "Volume was rising, but closing rate was stagnant.",
        "Hiring managers were exhausted by interview noise.",
        "Leadership plan: Hire more recruiters."
      ],
      insight: [
        "More recruiters would only scale the existing inefficiency.",
        "Problem was poor role prioritization, not 'lack of hands'.",
        "Fragmentation in decision rights was causing the lag."
      ],
      action: [
        "Audited end-to-end hiring sequence.",
        "Implemented strict role prioritization protocol.",
        "Defined clear 'Go/No-Go' criteria for managers."
      ],
      solution: [
        "Stabilized existing team instead of hiring new staff.",
        "Reduced time-to-hire through structural clarity.",
        "Decreased interview load on technical leadership."
      ],
      outcome: "Closed 100% of priority roles without scaling recruitment headcount or increasing operational costs."
    }
  ];

  const nextSlide = () => setActiveIdx((prev) => (prev + 1) % cases.length);
  const prevSlide = () => setActiveIdx((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section id="cases" className="py-24 bg-[#f9fafb] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Compact Header Row */}
        <div className="reveal mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-block py-1.5 px-4 bg-[#8DE9CF]/10 rounded-full text-[#5bb79c] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              Decisions in Practice
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102a43] tracking-tight">Case Collection</h2>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-4">
              {activeIdx + 1} / {cases.length}
            </span>
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#102a43] hover:border-[#8DE9CF] hover:text-[#5bb79c] transition-all"
              aria-label="Previous case"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#102a43] hover:border-[#8DE9CF] hover:text-[#5bb79c] transition-all"
              aria-label="Next case"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative reveal">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)]" 
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {cases.map((item, i) => (
              <div key={i} className="w-full shrink-0 px-1">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col gap-10">
                  
                  {/* Case Header: Compact row */}
                  <div className="grid md:grid-cols-[1fr_auto] items-start gap-8 pb-8 border-b border-gray-50">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-[#102a43] tracking-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-base text-slate-600 font-medium opacity-80 max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden lg:block bg-[#102a43]/5 py-3 px-6 rounded-2xl border border-[#102a43]/10">
                      <span className="text-[10px] font-bold text-[#102a43]/40 uppercase tracking-widest block mb-1">Impact Summary</span>
                      <span className="text-sm font-bold text-[#102a43]">{item.summary}</span>
                    </div>
                  </div>

                  {/* Case Body: 2-column grid for density */}
                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                    {/* Column 1: Context & Risks */}
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-[10px] font-black text-[#102a43]/30 uppercase tracking-[0.2em] mb-4">01. The Context</h4>
                        <ul className="space-y-3">
                          {item.context.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#8DE9CF] mt-2 shrink-0"></div>
                              <p className="text-sm md:text-[15px] text-slate-800 leading-snug font-medium opacity-90">{bullet}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-[#8DE9CF] uppercase tracking-[0.2em] mb-4">02. Strategic Risk / Insight</h4>
                        <ul className="space-y-3">
                          {item.insight.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 shrink-0"></div>
                              <p className="text-sm md:text-[15px] text-slate-800 leading-snug italic opacity-70">{bullet}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Column 2: Action & Solution */}
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-[10px] font-black text-[#102a43]/30 uppercase tracking-[0.2em] mb-4">03. Our Intervention</h4>
                        <ul className="space-y-3">
                          {item.action.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#8DE9CF] mt-2 shrink-0"></div>
                              <p className="text-sm md:text-[15px] text-slate-800 leading-snug font-medium opacity-90">{bullet}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-[#102a43]/30 uppercase tracking-[0.2em] mb-4">04. Structural Solution</h4>
                        <ul className="space-y-3">
                          {item.solution.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#8DE9CF] mt-2 shrink-0"></div>
                              <p className="text-sm md:text-[15px] text-slate-800 leading-snug font-medium opacity-90">{bullet}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Final Outcome: Highlighted single message */}
                  <div className="mt-4 pt-8 border-t border-gray-50 flex items-center justify-between gap-8">
                    <div className="flex-grow">
                      <div className="text-[10px] font-bold text-[#5bb79c] uppercase tracking-[0.3em] mb-2">Long-term Outcome</div>
                      <p className="text-lg md:text-xl font-bold text-[#102a43] tracking-tight leading-tight">
                        {item.outcome}
                      </p>
                    </div>
                    <div className="hidden sm:block">
                       <div className="w-12 h-12 rounded-2xl bg-[#f8fafc] flex items-center justify-center text-[#8DE9CF]">
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                       </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - More compact */}
        <div className="mt-20 reveal flex flex-col items-center">
          <div className="max-w-2xl text-center">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-8 opacity-60">
              We look for patterns, not just profiles.
            </p>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-6 bg-[#102a43] text-[#8DE9CF] font-bold py-4 px-10 rounded-2xl transition-all hover:bg-[#1a3a5a] active:scale-95 shadow-md"
            >
              <span className="uppercase tracking-[0.2em] text-[11px]">Discuss a similar situation</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseCollection;