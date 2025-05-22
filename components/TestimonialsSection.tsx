
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl flex-shrink-0 w-full sm:w-[400px] md:w-[450px] flex flex-col h-full snap-center">
    {testimonial.photoUrl && (
      <img 
        src={testimonial.photoUrl} 
        alt={testimonial.clientName} 
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
      />
    )}
    <blockquote className="text-slate-700 italic text-lg mb-6 text-center flex-grow">
      "{testimonial.quote}"
    </blockquote>
    <div className="text-center mt-auto">
      <p className="font-bold text-brand-primary">{testimonial.clientName}</p>
      <p className="text-sm text-brand-secondary">{testimonial.clientCompany}</p>
      <p className="text-xs text-brand-accent-dark mt-1">Service: {testimonial.serviceUsed}</p>
    </div>
  </div>
);

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real feedback from leaders and founders we've partnered with.
          </p>
        </div>
        <div className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-brand-accent scrollbar-track-slate-200">
          {TESTIMONIALS_DATA.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Basic scrollbar styling via CSS might be needed if tailwind plugin is not available
// You could add this to your styles.css or a style tag if needed.
/*
.scrollbar-thin { scrollbar-width: thin; }
.scrollbar-thumb-brand-accent::-webkit-scrollbar-thumb { background-color: #6EE7B7; border-radius: 4px; }
.scrollbar-track-slate-200::-webkit-scrollbar-track { background-color: #E2E8F0; border-radius: 4px; }
.scrollbar-thumb-brand-accent { scrollbar-color: #6EE7B7 #E2E8F0; }
*/
