import React, { useEffect, useState } from 'react';

const GOODFIRMS_SCRIPT_URL = "https://assets.goodfirms.co/assets/js/widget.min.js";
const CLUTCH_SCRIPT_URL = "https://widget.clutch.co/static/js/widget.js";

// Helper to load a script and ensure it's only added once
const loadScript = (src: string, id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve(); // Script already loaded or loading
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = (error) => {
      console.error(`Failed to load script: ${src}`, error);
      reject(new Error(`Failed to load script: ${src}`));
    };
    document.body.appendChild(script);
  });
};

export const TrustedBySection: React.FC = () => {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true; // To prevent state updates on unmounted component

    const loadAllScripts = async () => {
      try {
        await Promise.all([
          loadScript(GOODFIRMS_SCRIPT_URL, "goodfirms-widget-script"),
          loadScript(CLUTCH_SCRIPT_URL, "clutch-widget-script")
        ]);
        if (isMounted) {
          setScriptsLoaded(true);
          // Note: Some widget systems might offer a global function to re-initialize widgets
          // e.g., if (window.Clutch && typeof window.Clutch.init === 'function') window.Clutch.init();
          // For GoodFirms and Clutch, they typically scan the DOM upon script execution.
        }
      } catch (error) {
        console.error("Error loading one or more widget scripts:", error);
        // Optionally handle this error in the UI
      }
    };

    loadAllScripts();

    return () => {
      isMounted = false;
      // Script tags are generally added to the body and might not need removal
      // if they are intended to be globally available for the widgets.
      // If strict cleanup is needed:
      // const gfScript = document.getElementById("goodfirms-widget-script");
      // if (gfScript) gfScript.remove();
      // const clScript = document.getElementById("clutch-widget-script");
      // if (clScript) clScript.remove();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Placeholders are rendered immediately. The scripts will populate them when loaded.
  return (
    <section id="trusted-by" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary">
            Verified. Rated. Trusted.
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-8 md:gap-10 lg:gap-12">
          {/* Original Clutch Widget */}
          <div 
            className="clutch-widget min-h-[45px] flex justify-center items-center" 
            style={{ width: '190px' }}
            data-url="https://widget.clutch.co" 
            data-widget-type="2" 
            data-height="45" 
            data-nofollow="true" 
            data-expandifr="true" 
            data-clutchcompany-id="2475120"
            aria-live="polite"
          ></div>

          {/* GoodFirms Badge */}
          <div className="flex justify-center items-center">
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.goodfirms.co/business-services/recruiting?location=hr&rate%5B1%5D=%3C+%2425"
              aria-label="Elevate Core on GoodFirms"
            >
              <img 
                style={{ width: '243px', maxWidth: '100%' }} 
                src="https://assets.goodfirms.co/badges/color-badge/business-services.svg" 
                title="Top Business Services Company" 
                alt="Top Business Services Company on GoodFirms" 
              />
            </a>
          </div>

          {/* New GoodFirms Star Widget */}
          <div 
            className="goodfirm-widget min-h-[150px] flex justify-center items-center md:mx-5 -m-5"
            style={{ width: '170px'}}
            data-widget-type="goodfirms-widget-t3" 
            data-widget-pattern="star-basic" 
            data-height="150" 
            data-company-id="176866"
            aria-live="polite"
          ></div>
        </div>
      </div>
    </section>
  );
};
