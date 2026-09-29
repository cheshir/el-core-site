import { useLanguage } from '../LanguageContext';
import DarkLogo from '../assets/brand/elevate-core-logo-dark.svg';
import LightLogo from '../assets/brand/elevate-core-logo-light.svg';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = 'h-8', light = false }: LogoProps) {
  const { t } = useLanguage();
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={light ? LightLogo : DarkLogo}
        alt={t('Elevate Core — Recruiting Partner')}
        width="940"
        height="560"
        draggable={false}
      />
    </div>
  );
}
