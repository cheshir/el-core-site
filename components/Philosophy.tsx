import React from 'react';

const Philosophy: React.FC = () => {
  const triggers = [
    { 
      title: "Transformation", 
      text: "Growing or transforming business units where existing leadership models no longer scale." 
    },
    { 
      title: "Velocity", 
      text: "Scaling under pressure, where hiring faster cannot mean hiring wrong." 
    },
    { 
      title: "Impact", 
      text: "Roles that shape culture, carry decision weight, and directly impact P&L." 
    }
  ];

  return (
    <section id="why" className="py-32 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="reveal mb-24">
          <div className="inline-block py-2 px-6 border border-[#8DE9CF]/30 rounded-full text-[#5bb79c] text-[10px] font-bold tracking-[0.4em] uppercase mb-8">
            Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#102a43] mb-8 leading-tight tracking-tight">
            Where We Are <span className="text-[#5bb79c]">Mission-Critical</span>
          </h2>
          <p className="text-xl text-[#486581] max-w-3xl mx-auto font-medium leading-relaxed">
            Elevate Core works in high-stakes environments where a wrong hire doesn’t just slow growth — <span className="text-[#102a43] font-bold italic">it changes outcomes.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 reveal">
          {triggers.map((item, i) => (
            <div key={i} className="group p-12 bg-white rounded-[2rem] transition-all hover:shadow-xl text-left border border-gray-100/50 shadow-sm">
              <div className="w-12 h-1 bg-[#8DE9CF] rounded-full mb-8 transition-all group-hover:w-20"></div>
              <h4 className="text-2xl font-bold text-[#102a43] mb-4 tracking-tight">{item.title}</h4>
              <p className="text-[#486581] leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-40 max-w-4xl mx-auto reveal">
          <div className="bg-[#102a43] p-12 md:p-24 rounded-[3rem] text-white shadow-2xl relative overflow-hidden text-left">
            <div className="text-[#8DE9CF] font-bold text-[10px] uppercase tracking-[0.4em] mb-8 opacity-60">Strategic Focus</div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-12 leading-tight tracking-tight">C-Level & Board-Impact Hiring</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 mb-16">
              {["COO / Ops", "HR Director", "CTO / Engineering", "General Manager", "Product Lead", "CPO / Sales"].map(role => (
                <div key={role} className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase opacity-80">
                  <div className="w-2 h-2 rounded-full bg-[#8DE9CF]"></div>
                  {role}
                </div>
              ))}
            </div>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
              <p className="text-gray-300 text-lg font-medium leading-relaxed italic border-l-2 border-[#8DE9CF] pl-8">
                "We don't hire directors for structure. We look for people who can carry board-level responsibility and shape strategy under uncertainty."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;