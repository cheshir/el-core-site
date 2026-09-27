export const BOOKING_URL = 'https://calendar.app.google/7CrnbHTGv7e2DzvJA';

export const CONTACT_SERVICES = {
  'hiring-core': { en: 'Hiring Core', uk: 'Hiring Core' },
  'hiring-sprint': { en: 'Hiring Sprint', uk: 'Hiring Sprint' },
  'search-partnership': { en: 'Search Partnership', uk: 'Search Partnership' },
  'hr-audit': { en: 'HR Audit & Diagnostics', uk: 'HR-аудит і діагностика' },
  'people-sessions': { en: 'Strategic People Sessions', uk: 'Стратегічні сесії щодо команди' },
  verification: { en: 'Candidate & Company Verification', uk: 'Перевірка кандидатів і компаній' },
  'it-outstaffing': { en: 'IT Outstaffing', uk: 'IT Outstaffing' },
} as const;

export type ContactService = keyof typeof CONTACT_SERVICES;
export type OpenContact = (service?: ContactService) => void;
