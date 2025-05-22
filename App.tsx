
import React, { useState, useEffect } from 'react';
import { PromoBar } from './components/PromoBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProofBlock } from './components/ProofBlock';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TrustedBySection } from './components/TrustedBySection'; // Added import
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [showPromo, setShowPromo] = useState(true);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          event.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);


  return (
    <div className="bg-white text-brand-primary min-h-screen font-sans">
      {showPromo && <PromoBar onClose={() => setShowPromo(false)} />}
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProofBlock />
        <CaseStudiesSection />
        <TrustedBySection /> 
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
