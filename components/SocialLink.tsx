import React from 'react';

type Props = { network: 'instagram' | 'linkedin'; href: string; label?: string };
export default function SocialLink({ network, href, label }: Props) {
  const name = label || (network === 'instagram' ? 'Instagram' : 'LinkedIn');
  return <a className="social-icon-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {network === 'instagram' ? <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></> : <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10v7M11.5 17v-7m0 3a3 3 0 0 1 6 0v4"/><circle cx="7.5" cy="7" r="1" fill="currentColor" stroke="none"/></>}
    </svg>
  </a>;
}
