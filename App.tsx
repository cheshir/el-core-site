
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Philosophy from './components/Philosophy';
import Expertise from './components/Expertise';
import HowWeWork from './components/HowWeWork';
import PerspectiveShift from './components/PerspectiveShift';
import CaseCollection from './components/CaseCollection';
import Packages from './components/Packages';
import AdditionalServices from './components/AdditionalServices';
import Insights from './components/Insights';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased overflow-x-hidden bg-white text-[#102a43]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <Philosophy />
        <Expertise />
        <HowWeWork />
        <PerspectiveShift />
        <Packages />
        <AdditionalServices />
        <Insights />
        <CaseCollection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
