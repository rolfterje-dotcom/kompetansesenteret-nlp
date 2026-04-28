import { useEffect, useState } from 'react';
import { sanity } from './sanity';

export interface SiteSettings {
  title?: string;
  tagline?: string;
  logo?: any;
  phone?: string;
  email?: string;
  address?: string;
  orgNumber?: string;
}

const QUERY = `*[_type == "siteSettings"][0]{
  title, tagline, logo, phone, email, address, orgNumber
}`;

let cached: SiteSettings | null = null;

export function useSiteSettings(): SiteSettings | null {
  const [settings, setSettings] = useState<SiteSettings | null>(cached);

  useEffect(() => {
    if (cached) return;
    sanity.fetch(QUERY).then((data) => {
      cached = data;
      setSettings(data);
    }).catch(() => {});
  }, []);

  return settings;
}
