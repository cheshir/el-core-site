
import React, { useEffect } from 'react';

const TrustStrip: React.FC = () => {
  useEffect(() => {
    const initWidgets = () => {
      // @ts-ignore - Trigger Clutch re-initialization
      if (window.CLUTCHCO && typeof window.CLUTCHCO.Init === 'function') {
        // @ts-ignore
        window.CLUTCHCO.Init();
      }
      
      // Dispatch events that many widget scripts listen to for auto-initialization
      window.dispatchEvent(new Event('load'));
      window.dispatchEvent(new Event('DOMContentLoaded'));
    };

    // Run initialization immediately and multiple times to account for script loading delays
    initWidgets();
    const timers = [500, 1500, 3000].map(delay => setTimeout(initWidgets, delay));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

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
          <div className="flex flex-row items-center justify-center lg:justify-end gap-10 md:gap-16 w-full overflow-x-auto no-scrollbar py-2">
            
            {/* Clutch Widget */}
            <div className="shrink-0 flex items-center min-w-[140px] justify-center transition-opacity hover:opacity-80">
              <div 
                className="clutch-widget" 
                data-url="https://widget.clutch.co" 
                data-widget-type="14" 
                data-height="50" 
                data-nofollow="false" 
                data-expandifr="true" 
                data-scale="100" 
                data-clutchcompany-id="2475120"
                style={{ minHeight: '50px' }}
                title="Elevate Core reviews on Clutch"
              ></div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden sm:block h-10 w-px bg-gray-100 shrink-0"></div>
            
            {/* GoodFirms Widget */}
            <div className="shrink-0 flex items-center min-w-[190px] justify-center transition-opacity hover:opacity-80">
              {/* Fix: Removed invalid 'alt' attribute from div as it is not supported on div elements */}
              <div 
                className="goodfirm-widget" 
                data-widget-type="goodfirms-widget-t9" 
                data-height="61" 
                data-widget-pattern="horizontal-inline" 
                data-company-id="176866"
                style={{ minHeight: '61px' }}
                title="Top Business Services Company on GoodFirms"
              ></div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden sm:block h-10 w-px bg-gray-100 shrink-0"></div>

            {/* DesignRush Widget */}
            <div className="shrink-0 flex items-center min-w-[150px] justify-center transition-opacity hover:opacity-80">
              <div 
                data-designrush-widget="" 
                data-agency-id="92463" 
                data-style="light" 
                aria-label="DesignRush agency reviews section"
                style={{ minHeight: '61px' }}
                title="Elevate Core verified agency on DesignRush"
              ></div>
              <noscript>
                <a 
                  href="https://www.designrush.com/agency/profile/elevate-core#reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-[#102a43]/40 uppercase tracking-widest hover:text-[#8DE9CF] transition-colors"
                  aria-label="Visit Elevate Core reviews on DesignRush"
                >
                  REVIEW US ON DESIGNRUSH
                </a>
              </noscript>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;