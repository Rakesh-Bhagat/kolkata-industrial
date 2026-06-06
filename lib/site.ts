// Single source of truth for site-wide SEO / business (NAP) data.
// Update values here and they propagate to metadata, sitemap, and JSON-LD.

export const siteConfig = {
  name: 'Kolkata Industrial Company',
  shortName: 'Kolkata Industrial',
  // Canonical origin (no trailing slash). www should 301-redirect to this apex at the host level.
  url: 'https://kolkataindustrialcompany.in',
  description:
    'Kolkata Industrial Company is a trusted supplier of industrial lifting & material handling equipment in Kolkata, India — chain pulley blocks, electric hoists, winches, wire ropes, slings and rigging hardware.',
  tagline: 'Industrial Lifting & Material Handling Solutions',
  locale: 'en_IN',
  // Open Graph / Twitter share image (1200x630 recommended). Falls back to the logo.
  ogImage: '/products/electric-hoist.jpeg',
  logo: '/products/logo.png',
  email: 'kolindustrial8@gmail.com',
  phones: ['8777619134', '8274057437'],
  address: {
    street: 'Santoshpur Station Road',
    locality: 'Kolkata',
    region: 'West Bengal',
    postalCode: '700141',
    country: 'IN',
  },
  // Add your Google Business Profile, Facebook, Instagram, etc. URLs here — they
  // strengthen brand-entity signals (sameAs) for Google's Knowledge Graph.
  sameAs: [] as string[],
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { days: ['Saturday'], opens: '10:00', closes: '16:00' },
  ],
  keywords: [
    'Kolkata Industrial Company',
    'industrial equipment Kolkata',
    'lifting equipment Kolkata',
    'material handling equipment',
    'chain pulley block',
    'electric chain hoist',
    'wire rope hoist',
    'winches',
    'wire ropes and slings',
    'rigging hardware',
    'industrial equipment supplier India',
  ],
} as const

export function absoluteUrl(path = ''): string {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}
