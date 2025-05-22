
import React from 'react';
import { PROOF_POINTS_DATA } from '../constants';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Using Heroicons

export const ProofBlock: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-brand-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Why Partner with El-Core?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Results, not just promises. We deliver talent that drives your business forward.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {PROOF_POINTS_DATA.map(point => (
              <li key={point.id} className="bg-brand-primary/50 p-6 rounded-lg shadow-lg flex items-start transition-all duration-300 hover:scale-105 hover:bg-brand-primary/70">
                <CheckCircleIcon className="w-8 h-8 text-brand-accent mr-4 flex-shrink-0 mt-1" />
                <p className="text-xl text-gray-200 leading-relaxed">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
