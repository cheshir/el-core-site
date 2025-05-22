
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-slate-100">
    <div className="mb-6 text-brand-accent">
      {item.icon ? item.icon : <div className="w-10 h-10 bg-brand-accent rounded-md" />}
    </div>
    <h3 className="text-2xl font-bold text-brand-primary mb-3">{item.title}</h3>
    <p className="text-slate-600 mb-4 text-sm">{item.description}</p>
    <p className="text-brand-secondary font-semibold mt-auto text-base">{item.impact}</p>
  </div>
);

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-4">
            How We Elevate Your Hiring
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Precision-driven recruitment solutions designed for high-impact roles and transformative teams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map(service => (
            <ServiceCard key={service.id} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
