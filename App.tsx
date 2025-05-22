
import React, { useState, useEffect } from 'react';
import { PromoBar } from './components/PromoBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProofBlock } from './components/ProofBlock';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TrustedBySection } from './components/TrustedBySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { TermsOfUsePage } from './components/TermsOfUsePage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';

const App: React.FC = () => {
  const [showPromo, setShowPromo] = useState(true);
  const [currentPage, setCurrentPage] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash || '#');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange, false);
    // Set initial page based on hash and scroll to top
    if (window.location.hash) {
      setCurrentPage(window.location.hash);
    }
    window.scrollTo(0, 0);


    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Smooth scroll for in-page anchor links
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash) {
        const pageRoutes = ['#terms-of-use', '#privacy-policy'];
        const normalizedAnchorHash = anchor.hash.toLowerCase();
        
        // If it's a link to a different "page", let hashchange handle it
        if (pageRoutes.includes(normalizedAnchorHash)) {
          // Only prevent default if it's already the current page hash, to avoid duplicate navigation
          if (normalizedAnchorHash === currentPage.toLowerCase()) {
             event.preventDefault(); // Prevent native jump
             window.scrollTo(0,0); // Ensure top of page
          }
          // Otherwise, allow normal hash change to trigger routing
          return;
        }

        // For in-page anchors - check if we need to navigate to home page first
        if (!pageRoutes.includes(normalizedAnchorHash)) {
          // If we're on a different page (terms/privacy) and clicking an in-page anchor
          const isOnDifferentPage = pageRoutes.includes(currentPage.toLowerCase());
          
          if (isOnDifferentPage) {
            // Navigate to home page first, then scroll to section
            event.preventDefault();
            window.location.hash = '#';
            // Use setTimeout to allow page to render before scrolling
            setTimeout(() => {
              try {
                const element = document.querySelector(anchor.hash);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              } catch (e) {
                console.warn("Smooth scroll failed for hash:", anchor.hash, e);
              }
            }, 100);
          } else if (anchor.pathname === window.location.pathname) {
            // We're already on the home page, just scroll
            try {
              const element = document.querySelector(anchor.hash);
              if (element) {
                event.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
              }
            } catch (e) {
              console.warn("Smooth scroll failed for hash:", anchor.hash, e);
            }
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, [currentPage]); // Re-attach if currentPage changes, for context

  const renderPageContent = () => {
    switch (currentPage.toLowerCase()) {
      case '#terms-of-use':
        return <TermsOfUsePage />;
      case '#privacy-policy':
        return <PrivacyPolicyPage />;
      default:
        // Check if hash is for an in-page section
        if (currentPage && currentPage !== '#' && !currentPage.startsWith('/#')) {
           // The smooth scroll effect handles this for the default view.
           // No special rendering needed here, just show main content.
        }
        return (
          <>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ProofBlock />
            <CaseStudiesSection />
            <TrustedBySection />
            <TestimonialsSection />
            <CtaSection />
          </>
        );
    }
  };

  return (
    <div className="bg-white text-brand-primary min-h-screen font-sans">
      {showPromo && <PromoBar onClose={() => setShowPromo(false)} />}
      <Navbar />
      <main>
        {renderPageContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
