import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", light = false }) => {
  const accentColor = "#8DE9CF"; 
  const textColor = light ? "#FFFFFF" : "#102a43";

  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 320 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Elevate Core - Strategic Recruitment Agency Logo</title>
        <path 
          d="M30 65C30 45 90 25 150 55C210 85 270 65 270 45" 
          stroke={accentColor} 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
        <circle cx="275" cy="55" r="7" fill={accentColor} />
        <circle cx="145" cy="68" r="9" fill={accentColor} />
        <text 
          x="10" 
          y="56" 
          fontFamily="Inter, sans-serif" 
          fontSize="48" 
          fontWeight="800" 
          letterSpacing="1" 
          fill={textColor}
          style={{ textTransform: 'uppercase' }}
        >
          ELEVATE
        </text>
        <text 
          x="148" 
          y="82" 
          fontFamily="Inter, sans-serif" 
          fontSize="38" 
          fontWeight="400" 
          fill={textColor}
        >
          Core
        </text>
        <rect x="12" y="62" width="130" height="2" fill={textColor} opacity="0.3" />
      </svg>
    </div>
  );
};

export default Logo;