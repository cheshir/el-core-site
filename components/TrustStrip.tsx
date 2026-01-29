
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

const TrustStrip: React.FC = () => {
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

  return (
    <div className="bg-white py-16 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Main Statement Pill */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="bg-[#102a43]/5 py-4 px-10 rounded-full border border-[#102a43]/10">
              <span className="text-[11px] md:text-[12px] font-bold text-[#102a43] uppercase tracking-[0.5em] whitespace-nowrap">
                Verified. Rated. Trusted.
              </span>
            </div>
            <div className="hidden xl:block h-px w-16 bg-gray-100"></div>
          </div>

          {/* Widgets Row - One continuous line */}
          {/* <div className="flex flex-row items-center justify-center lg:justify-end gap-10 md:gap-16 w-full overflow-x-auto no-scrollbar py-2"> */}

          <div
            className="goodfirm-widget shrink-0 flex items-center min-w-[140px] justify-center transition-opacity hover:opacity-80"
            data-widget-type="goodfirms-widget-t3"
            data-widget-pattern="star-basic"
            data-height="100"
            data-company-id="176866"
          ></div>

          {/* Vertical Separator */}
          <div className="hidden sm:block h-10 w-px bg-gray-100 shrink-0"></div>

          {/* Original Clutch Widget */}
          <div
            className="clutch-widget shrink-0 flex items-center min-w-[140px] justify-center transition-opacity hover:opacity-80"
            style={{ width: '190px' }}
            data-url="https://widget.clutch.co"
            data-widget-type="2"
            data-height="45"
            data-nofollow="true"
            data-expandifr="true"
            data-clutchcompany-id="2475120"
            aria-live="polite"
          ></div>

          {/* Vertical Separator */}
          <div className="hidden sm:block h-10 w-px bg-gray-100 shrink-0"></div>

          {/* DesignRush Widget */}
          <div className="shrink-0 flex items-center min-w-[150px] justify-center transition-opacity hover:opacity-80">
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

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;