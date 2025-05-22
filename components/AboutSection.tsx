
import React from 'react';

export const AboutSection: React.FC = () => {
  const industries = [
    'Technology: IT, Software Development, Web3, FinTech, DeepTech',
    'Blockchain & Crypto',
    'Gambling & iGaming',
    'Defense & Military Tech',
    'Manufacturing & Engineering',
    'B2B Services & Outsourcing',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-6">
              Strategic Partner in High-Stakes Hiring. Not Just a Vendor.
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              At Elevate Core, we build high-performing, tailored teams across Europe — specializing in industries where precision, speed, and trust matter most. Whether you’re scaling a startup or strengthening a legacy system, we act as your strategic partner in hiring.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Our mission is to transform hiring from a risk into your strategic advantage.
            </p>
            <div className="bg-brand-light-bg p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-secondary mb-3">Why "Elevate Core"?</h3>
              <p className="text-slate-600 mb-2"><strong className="text-brand-primary">Elevate</strong> — because growth starts with the right people.</p>
              <p className="text-slate-600 mb-4"><strong className="text-brand-primary">Core</strong> — because we strengthen your foundation: your team, your process, your values.</p>
              <p className="text-brand-accent-dark font-semibold italic">This isn’t just our name — it’s our promise: To lift your business from where you are to where you could be.</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <img 
              src="https://picsum.photos/seed/teamwork/600/400" 
              alt="El-Core team collaborating on a strategic hiring plan" 
              className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[400px]" 
            />
            <div className="mt-8 bg-brand-primary text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-brand-accent mb-4">We Operate In High-Stakes Domains:</h3>
              <ul className="space-y-2">
                {industries.map((industry, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
