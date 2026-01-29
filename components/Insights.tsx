import React from 'react';

const Insights: React.FC = () => {
  return (
    <section className="py-32 bg-[#102a43]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto reveal">
          <div className="text-center mb-24">
            <div className="inline-block py-2 px-6 bg-white/5 border border-white/10 rounded-full text-[#8DE9CF] text-[10px] font-bold tracking-[0.4em] uppercase mb-8">
              Analysis
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">Strategic Insights</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                Foundational perspectives on scaling leadership and engineering teams.
            </p>
          </div>
          
          <div className="grid gap-10">
            {[
              {
                title: "Complexity as a Stage of Growth",
                text: "As companies scale, the 'founding team' intuition breaks. Roles become more specialized, and the instinct used to hire the first 10 people doesn't always scale to the next 50. We help identify the specific leadership judgment needed for this new level."
              },
              {
                title: "Context Over CVs",
                text: "A candidate might be a star in a corporate environment but a disaster in a high-speed environment. We don't just look for skills; we look for the ability to operate in your specific context, under your level of uncertainty."
              },
              {
                title: "The Cost of Clarity Gaps",
                text: "Most hiring failures start with a poorly defined role. If you aren't 100% clear on what success looks like, you can't hire for it. We spend significant time at the start defining the 'Business Problem' the hire is meant to solve."
              }
            ].map((insight, idx) => (
              <div key={idx} className="group p-12 bg-white rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-[#102a43] group-hover:text-[#5bb79c] transition-colors tracking-tight">{insight.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-lg opacity-80">
                  {insight.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-24 p-12 md:p-20 bg-white/5 border border-white/10 rounded-[3.5rem] text-center shadow-2xl">
            <h4 className="text-2xl font-bold mb-10 text-white tracking-tight">If this feels familiar — let’s talk it through.</h4>
            <a href="#contact" className="inline-block bg-[#8DE9CF] text-[#102a43] font-bold py-5 px-14 rounded-2xl transition-all hover:bg-white shadow-xl active:scale-95 text-[11px] uppercase tracking-widest">
              Get an external perspective
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;