import React from 'react';

/** Shared model signs: embedded teammate, added capacity, targeted person search. */
export default function ModelIcon({ model }: { model: string }) {
  return <svg className="model-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {model === 'hiring-core' ? <>
      <circle cx="16" cy="11" r="3" />
      <path d="M10.5 24v-3a5.5 5.5 0 0 1 11 0v3" />
      <path d="M8 8a3 3 0 0 0 0 6M24 8a3 3 0 0 1 0 6M7 18a4 4 0 0 0-4 4v2M25 18a4 4 0 0 1 4 4v2" />
    </> : model === 'hiring-sprint' ? <>
      <circle cx="11" cy="10" r="3" />
      <path d="M5 25v-4a6 6 0 0 1 12 0v4M22 10h7M25.5 6.5v7" />
    </> : <>
      <circle cx="14" cy="14" r="10" />
      <circle cx="14" cy="11" r="2.5" />
      <path d="M9.5 19a4.5 4.5 0 0 1 9 0M21.5 21.5 28 28" />
    </>}
  </svg>;
}
