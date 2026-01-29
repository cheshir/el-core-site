import React, { useRef } from 'react';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/elevate-core', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/> },
    { name: 'Instagram', href: 'https://www.instagram.com/elevate.core_zen', icon: <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z"/> },
    { name: 'Telegram', href: 'https://t.me/elevate_core', icon: <path d="M21.13 2.92a.5.5 0 0 0-.58.07L2.43 11.23a.5.5 0 0 0 .04.9l4.5 2.14 2 6.5a.5.5 0 0 0 .91.08l2.92-4.14 5.37 3.86a.5.5 0 0 0 .8-.32l3-17a.5.5 0 0 0-.76-.43z"/> },
    { name: 'WhatsApp', href: 'https://wa.me/385919497822', icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.3 8.38 8.38 0 0 1 3.8.9l5.7-1.4z"/> }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const situation = formData.get('situation') as string;

    const subject = `Inquiry: Elevate Core Engagement — ${name} (${company})`;
    const body = `Name: ${name}\nCompany / Role: ${company}\nEmail: ${email}\n\nCurrent Situation & Needs:\n${situation}\n\n--- Sent via El-Core Feedback Form ---`;
    
    // Construct mailto link
    const mailtoUrl = `mailto:hello@el-core.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Trigger email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <h2 className="text-5xl md:text-6xl font-bold text-[#102a43] mb-12 leading-[1.05] tracking-tight">
              Hiring is a decision, <br/><span className="text-[#5bb79c] italic font-medium">not a transaction.</span>
            </h2>
            <p className="text-xl text-[#486581] mb-16 leading-relaxed font-medium">
              If you’re facing a role where clarity matters more than speed — let’s talk it through. We help scale leadership teams with intent.
            </p>
            
            <div className="space-y-10 mb-20">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#8DE9CF]/10 flex items-center justify-center text-[#5bb79c]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-lg font-bold text-[#102a43] tracking-tight">Strategic business context</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#8DE9CF]/10 flex items-center justify-center text-[#5bb79c]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-lg font-bold text-[#102a43] tracking-tight">Collaborative search methodology</span>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100 grid md:grid-cols-2 gap-12">
              <div>
                <span className="text-[10px] font-bold text-[#102a43]/20 uppercase tracking-[0.4em] block mb-4">Direct Line</span>
                <a href="tel:+385919497822" className="text-xl font-bold text-[#102a43] hover:text-[#8DE9CF] transition-colors tracking-tight">+385 91 949 7822</a>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#102a43]/20 uppercase tracking-[0.4em] block mb-4">Electronic Mail</span>
                <a href="mailto:hello@el-core.eu" className="text-xl font-bold text-[#102a43] hover:text-[#8DE9CF] transition-colors tracking-tight uppercase">hello@el-core.eu</a>
              </div>
            </div>
          </div>

          <div className="bg-[#102a43] p-12 md:p-16 rounded-3xl shadow-2xl reveal">
            <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">Let’s talk</h3>
            <p className="text-white/40 mb-12 text-xs font-bold uppercase tracking-widest">Focused operations for growing teams.</p>
            
            <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <input name="name" type="text" placeholder="Name" required className="w-full bg-white/5 border-b border-white/10 py-4 px-4 rounded-lg focus:border-[#8DE9CF] focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-white font-medium text-sm" />
                <input name="company" type="text" placeholder="Company / Role" required className="w-full bg-white/5 border-b border-white/10 py-4 px-4 rounded-lg focus:border-[#8DE9CF] focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-white font-medium text-sm" />
              </div>
              <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white/5 border-b border-white/10 py-4 px-4 rounded-lg focus:border-[#8DE9CF] focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-white font-medium text-sm" />
              <textarea name="situation" rows={3} placeholder="Current Situation" required className="w-full bg-white/5 border-b border-white/10 py-4 px-4 rounded-lg focus:border-[#8DE9CF] focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-white font-medium text-sm resize-none"></textarea>
              <div className="space-y-6">
                <button type="submit" className="w-full bg-[#8DE9CF] text-[#102a43] font-bold py-5 rounded-xl text-[11px] uppercase tracking-[0.3em] shadow-lg hover:bg-white transition-all active:scale-[0.98]">
                  Start the conversation
                </button>
                <div className="text-[10px] text-white/30 text-center uppercase tracking-widest leading-relaxed">
                  <p>Clarity before commitments.</p>
                  <p>Direct professional communication only.</p>
                </div>
                
                {/* Social Networks Duplication */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/5">
                  {socials.map((s) => (
                    <a 
                      key={s.name} 
                      href={s.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;