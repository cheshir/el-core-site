
import React from 'react';
import { CASE_STUDIES_DATA } from '../constants';
import { CaseStudy } from '../types';
import { Button } from './ui/Button';
import { ChevronRightIcon } from '../constants';

const CaseStudyCard: React.FC<{ caseItem: CaseStudy }> = ({ caseItem }) => (
  <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105 group">
    {caseItem.logoUrl && (
      <div className="bg-slate-100 p-6 flex justify-center items-center h-32">
        <img 
          src={caseItem.logoUrl} 
          alt={`${caseItem.companyName} logo`} 
          className="max-h-16 max-w-[150px] object-contain" 
        />
      </div>
    )}
    <div className="p-6 md:p-8 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-brand-secondary mb-2 group-hover:text-brand-accent transition-colors">
        {caseItem.companyName}
      </h3>
      <p className="text-xl font-bold text-brand-primary mb-4 flex-grow">{caseItem.result}</p>
      {/* <Button 
        href={caseItem.detailsUrl} 
        variant="link" 
        className="mt-auto self-start !px-0 !py-0"
        rightIcon={<ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      >
        Learn More
      </Button> */}
    </div>
  </div>
);

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-brand-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-4">
            Built Teams. Not Just Closed Roles.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how we've helped ambitious companies achieve their hiring goals and scale effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {CASE_STUDIES_DATA.map(study => (
            <CaseStudyCard key={study.id} caseItem={study} />
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <Button href="#explore-cases" variant="primary" size="lg">
            Explore All Case Studies
          </Button>
        </div> */}
      </div>
    </section>
  );
};
