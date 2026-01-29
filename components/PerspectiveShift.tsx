import React from 'react';

const PerspectiveShift: React.FC = () => {
  const stages = [
    {
      label: "Stage 01",
      subtitle: "The Starting Point",
      observations: [
        {
          text: "The initial request is framed as recruitment support.",
          highlight: null
        },
        {
          text: "Underneath, the real challenge is unclear priorities, roles, and expectations.",
          highlight: "unclear priorities"
        }
      ]
    },
    {
      label: "Stage 02",
      subtitle: "The Immersion",
      observations: [
        {
          text: "Discussions move from individual vacancies to constraints, trade-offs, and business impact.",
          highlight: "business impact"
        },
        {
          text: "Market honesty becomes a strategic input — not just hiring feedback.",
          highlight: "strategic input"
        }
      ]
    },
    {
      label: "Stage 03",
      subtitle: "The Outcome",
      observations: [
        {
          text: "Hiring becomes a system that supports growth instead of a recurring source of friction.",
          highlight: "system"
        },
        {
          text: "The relationship evolves into a functional partnership embedded in business decisions.",
          highlight: "partnership"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#f1f5f9] border-y border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Consistent Labeling - Now H2 for SEO */}
        <div className="max-w-4xl mx-auto reveal text-center mb-20">
          <h2 className="inline-block py-1 px-4 border border-[#8DE9CF] rounded-full text-[#8DE9CF] text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
            Structural Progression
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#102a43] mb-6 tracking-tight">
            The Strategic Shift
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            When recruitment stops being transactional, the entire <span className="text-[#102a43] font-bold">decision-making logic</span> transforms.
          </p>
        </div>

        {/* Timeline Structure - Increased Density */}
        <div className="max-w-5xl mx-auto reveal relative">
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-[140px] top-0 bottom-0 w-px bg-gray-300"></div>
          
          <div className="space-y-12 md:space-y-16">
            {stages.map((stage, idx) => (
              <div key={idx} className="relative grid grid-cols-[48px_1fr] md:grid-cols-[280px_1fr] gap-6 md:gap-12 items-start group">
                
                {/* Stage Marker & Label - Aligned Typography */}
                <div className="relative flex md:flex-col items-center md:items-end md:text-right pt-2 md:pt-4">
                  {/* Timeline Node */}
                  <div className="absolute left-[24px] md:left-auto md:right-[-140px] w-2.5 h-2.5 rounded-full bg-white border-2 border-[#8DE9CF] z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#8DE9CF]"></div>
                  
                  <div className="pl-12 md:pl-0">
                    <div className="text-[11px] font-bold text-[#102a43] tracking-[0.2em] uppercase mb-1">
                      {stage.label}
                    </div>
                    <div className="text-[10px] font-bold text-[#8DE9CF] uppercase tracking-[0.1em] opacity-80 whitespace-nowrap">
                      {stage.subtitle}
                    </div>
                  </div>
                </div>

                {/* Content Block - Unified Style with Service Cards */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-gray-200/50">
                  <div className="space-y-6 max-w-2xl">
                    {stage.observations.map((obs, oIdx) => {
                      const parts = obs.text.split(obs.highlight || "");
                      return (
                        <p key={oIdx} className="text-lg md:text-xl text-[#102a43] leading-snug font-medium tracking-tight opacity-90">
                          {obs.highlight ? (
                            <>
                              {parts[0]}
                              <span className="text-[#5bb79c] font-bold underline decoration-[#8DE9CF]/40 underline-offset-4">{obs.highlight}</span>
                              {parts[1]}
                            </>
                          ) : obs.text}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer Statement - More Integrated */}
        <div className="mt-24 text-center reveal">
          <div className="inline-block bg-[#102a43] text-white px-8 py-10 rounded-[2.5rem] shadow-xl max-w-2xl w-full">
             <p className="text-base md:text-lg font-bold tracking-tight mb-4">
              This shift allows us to build teams that scale — <span className="text-[#8DE9CF] italic font-normal">not just fill roles.</span>
            </p>
            <div className="h-px w-12 bg-[#8DE9CF]/20 mx-auto mb-4"></div>
            <p className="text-[#8DE9CF]/40 text-[9px] font-bold uppercase tracking-[0.4em]">
              Observation-Based Methodology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerspectiveShift;