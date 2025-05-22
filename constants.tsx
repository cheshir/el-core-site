
import React from 'react';
import { ServiceItem, ProofPoint, CaseStudy, Testimonial, NavLink } from './types';

// SVG Icons
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path clipRule="evenodd" fillRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0012.053 3 8.926 8.926 0 003.18 11.598c0 1.79.73 3.572 2.136 4.948l-1.355 4.93 5.074-1.332a8.908 8.908 0 004.018.998h.003c4.943 0 8.949-3.978 8.949-8.897a8.888 8.888 0 00-2.602-6.612zm-6.35 13.812h-.001a7.443 7.443 0 01-3.798-.971l-.272-.16-2.825.741.753-2.753-.175-.282a7.46 7.46 0 01-1.136-3.971c0-4.082 3.348-7.399 7.476-7.399a7.42 7.42 0 015.282 2.188 7.394 7.394 0 012.193 5.258c-.001 4.082-3.35 7.4-7.478 7.4zm4.094-5.586c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.019-.354.094-.467c.104-.104.225-.28.338-.42s.15-.224.225-.374.038-.281-.019-.396c-.057-.112-.505-1.217-.692-1.666-.177-.42-.354-.363-.504-.37-.141-.006-.302-.005-.463-.005s-.42.056-.644.28c-.225.224-.863.84-.863 2.049s.884 2.379 1.006 2.549.732.937 1.793 1.594c.271.174.488.258.688.347.272.12.525.104.712.019.206-.097.862-.354.984-.697s.123-.654.086-.73c-.038-.075-.149-.112-.302-.19z" />
  </svg>
);

export const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20.665 3.717l-17.73 6.837c-1.21.48-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.61c.498-.322.953-.144.554.193l-8.609 7.67H9.62l-.326 4.646c.455 0 .657-.212.91-.48l2.279-2.241 4.532 3.324c.84.482 1.446.234 1.662-.793l3.251-15.438c.254-1.087-.444-1.554-1.245-1.22z"/>
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25v-4.073M3.75 6.073A2.25 2.25 0 0 1 6 3.823h12a2.25 2.25 0 0 1 2.25 2.25v4.073M12 12.75V3.823m0 8.927a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25m-2.25-2.25a2.25 2.25 0 0 0-2.25-2.25V15a2.25 2.25 0 0 0 2.25 2.25m4.5 0V15a2.25 2.25 0 0 1-2.25-2.25m0-4.5v4.5m0-4.5a2.25 2.25 0 0 1 2.25 2.25M12 12.75a2.25 2.25 0 0 0-2.25 2.25M3.75 9h16.5" />
</svg>
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>
);

export const UserGroupIcon: React.FC<{ className?: string }> = ({ className }) => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.742-.585 9.98 9.98 0 0 0-1.902-3.787 3 3 0 0 0-2.607-.972H13.065a3 3 0 0 0-2.607.972 9.98 9.98 0 0 0-1.902 3.787 9.094 9.094 0 0 0 3.742.585M12 12.473a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm-4.505 4.48a7.5 7.5 0 1 0 9.01 0M10.263 21.42a9.025 9.025 0 0 1-4.133-1.123 9.954 9.954 0 0 1-2.305-3.044 3.008 3.008 0 0 1 .057-3.165 3.009 3.009 0 0 1 2.048-1.386C7.09 12.386 8.06 12 9 12h6c.94 0 1.91.386 3.056.782a3.009 3.009 0 0 1 2.048 1.386 3.008 3.008 0 0 1 .057 3.165 9.954 9.954 0 0 1-2.305 3.044 9.025 9.025 0 0 1-4.133 1.123" />
</svg>
);

export const RocketLaunchIcon: React.FC<{ className?: string }> = ({ className }) => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a6 6 0 0 1-2.08 5.83m0 0V15.32a6 6 0 0 1 5.49-5.06m-5.49 5.06a6 6 0 0 1-5.84-7.38m5.84 7.38a6 6 0 0 1-5.84 7.38m0-12.21a6 6 0 0 1 5.84-7.38m5.84 7.38a6 6 0 0 1 5.84 7.38M18.75 9.75a6 6 0 0 1-5.49 5.06M18.75 9.75L21 7.5m-2.25 2.25L15 3.75M21 7.5L15 3.75m6 3.75L18.75 9.75M9 12.75a6 6 0 0 1-5.49-5.06M9 12.75L6 15m3-2.25L3.75 9.75m5.25 3L6 15m3-2.25L3.75 9.75" />
</svg>
);


export const SERVICES_DATA: ServiceItem[] = [
  { id: 'exec-search', icon: <BriefcaseIcon className="w-10 h-10 text-brand-accent" />, title: 'Executive Search', description: 'C-Level, VP, and Strategic Roles', impact: 'Secure visionary leaders who drive transformative growth.' },
  { id: 'tech-hiring', icon: <CodeBracketIcon className="w-10 h-10 text-brand-accent" />, title: 'Tech Hiring', description: 'Engineering, DevOps, Blockchain Devs, etc.', impact: 'Assemble elite tech talent that ships impactful products, faster.' },
  { id: 'embedded-rpo', icon: <UserGroupIcon className="w-10 h-10 text-brand-accent" />, title: 'Embedded / RPO Model', description: 'Full lifecycle recruitment partnership', impact: 'Integrate our expertise seamlessly, becoming your dedicated hiring engine.' },
  { id: 'startup-scaleup', icon: <RocketLaunchIcon className="w-10 h-10 text-brand-accent" />, title: 'Startup & Scale-Up Hiring', description: 'Building foundational teams', impact: 'Build foundational teams that turn bold visions into market realities.' },
];

export const PROOF_POINTS_DATA: ProofPoint[] = [
  { id: 'markets', text: '20+ European markets covered: Global Reach, Local Expertise.' },
  { id: 'acceptance', text: '85% offer acceptance rate: Candidates We Find, Say Yes.' },
  { id: 'speed', text: 'Built engineering teams in <2 months: Speed Without Sacrificing Quality.' },
  { id: 'partner', text: 'Strategic partner, not just "CV pushers": Your Goals, Our Mission.' },
  { id: 'transparent', text: 'Transparent, fast, and accountable: Hiring You Can Trust.' },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  { id: 'cs1', companyName: 'FinTech', logoUrl: 'https://picsum.photos/seed/fintechlogo/150/75?grayscale&blur=1', result: 'Scaled to 5 Senior Rust Devs in 6 Weeks for Critical Launch.', detailsUrl: '#case-studies' },
  { id: 'cs2', companyName: 'AI SaaS', logoUrl: 'https://picsum.photos/seed/deeptechlogo/150/75?grayscale&blur=1', result: 'Recruited Lead AI Researcher, Unlocking New IP & Research Directions.', detailsUrl: '#case-studies' },
  { id: 'cs3', companyName: 'BlockChain', logoUrl: 'https://picsum.photos/seed/blocklogo/150/75?grayscale&blur=1', result: 'Assembled Core Blockchain Team for MVP in 8 Weeks, Securing Funding.', detailsUrl: '#case-studies' },
  { id: 'cs4', companyName: 'iGaming', logoUrl: 'https://picsum.photos/seed/gaminglogo/150/75?grayscale&blur=1', result: 'Hired VP Engineering to Triple Platform Throughput & Player Capacity.', detailsUrl: '#case-studies' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 't1', quote: "El-Core didn't just find candidates; they understood our DNA. The CTO they placed has been pivotal for our growth.", clientName: 'Alex Johnson', clientCompany: 'FutureTech Inc.', serviceUsed: 'Executive Search (CTO)', photoUrl: 'https://picsum.photos/seed/person1/100/100?face' },
  { id: 't2', quote: 'The speed and quality of engineers El-Core delivered for our blockchain project were outstanding. True partners.', clientName: 'Sarah Chen', clientCompany: 'CryptoLedger Solutions', serviceUsed: 'Tech Hiring (Blockchain Devs)', photoUrl: 'https://picsum.photos/seed/person2/100/100?face' },
  { id: 't3', quote: 'Working with El-Core on an RPO basis felt like having an internal expert team. Highly recommend for scaling.', clientName: 'Michael Schmidt', clientCompany: 'ScaleUp GmbH', serviceUsed: 'Embedded / RPO Model', photoUrl: 'https://picsum.photos/seed/person3/100/100?face' },
  { id: 't4', quote: "Their understanding of the iGaming tech landscape is unparalleled. They found us niche talent we couldn't source ourselves.", clientName: 'Maria Rodriguez', clientCompany: 'SpinWin Gaming', serviceUsed: 'Tech Hiring (iGaming)', photoUrl: 'https://picsum.photos/seed/person4/100/100?face' },
];

export const NAV_LINKS: NavLink[] = [
  { id: 'services', href: '#services', label: 'Services' },
  { id: 'about', href: '#about', label: 'About Us' },
  { id: 'why-us', href: '#why-us', label: 'Why El-Core' },
  { id: 'cases', href: '#case-studies', label: 'Case Studies' },
  { id: 'contact', href: '#contact', label: 'Contact' },
];

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/385919497822',
  telegram: 'https://t.me/elevate_core',
  linkedin: 'https://www.linkedin.com/company/elevate-core',
  email: 'mailto:hello@el-core.eu',
  calendly: 'https://cal.com/tetiana-borysova-elevate-core/30min',
};
