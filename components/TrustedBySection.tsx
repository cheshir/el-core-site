import React, { useEffect, useState } from 'react';
import DesignRushLogo from '@/assets/desingrush.png';

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

const TrustedBySection: React.FC = () => {
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
    <section id="trusted-by" className="py-4 flex flex-col justify-center items-center flex-wrap gap-4">
      {/* Original Clutch Widget */}
      <div
        className="clutch-widget min-h-[45px] flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity"
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
      {/* <div className="flex justify-center items-center">
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
      </div> */}

      {/* DesignRush Badge */}
      <div className="flex justify-center items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.designrush.com/agency/profile/elevate-core"
          aria-label="Elevate Core verified agency on DesignRush"
        >
          <img
            style={{ width: '120px', maxWidth: '100%' }}
            src={DesignRushLogo}
            title="Elevate Core verified agency on DesignRush"
            alt="Elevate Core verified agency on DesignRush"
          />
        </a>
      </div>

      {/* GoodFirms Badge */}
      {/* For now, it's placed inside footer */}
      {/* <div className="pt-8 opacity-80 hover:opacity-100 transition-opacity">
        <a target="_blank" href="https://www.goodfirms.co/company/elevate-core" rel="noopener noreferrer" aria-label="Visit Elevate Core profile on GoodFirms">
          <img
            style={{ width: '243px' }}
            src="https://assets.goodfirms.co/badges/color-badge/business-services.svg"
            title="Top Business Services Company - Elevate Core"
            alt="Top Business Services Company recognition for Elevate Core on GoodFirms"
          />
        </a>
      </div> */}
    </section>
  );
};

export default TrustedBySection;
