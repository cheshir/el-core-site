
export interface ServiceItem {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  impact: string;
}

export interface ProofPoint {
  id: string;
  text: string;
  icon?: React.ReactNode;
}

export interface CaseStudy {
  id: string;
  companyName: string;
  logoUrl?: string;
  result: string;
  detailsUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientCompany: string;
  serviceUsed: string;
  logoUrl?: string;
  photoUrl?: string;
}

export interface NavLink {
  id: string;
  href: string;
  label: string;
}
