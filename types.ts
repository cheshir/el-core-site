
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface DomainItem {
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  icon: React.ReactNode;
  href: string;
}
