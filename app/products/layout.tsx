import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Product Catalog — Industrial Lifting & Material Handling Equipment',
  description:
    'Browse 50+ industrial lifting and material handling products from Kolkata Industrial Company — chain pulley blocks, electric hoists, winches, wire ropes, slings, rigging hardware and safety equipment.',
  keywords: [...siteConfig.keywords],
  alternates: { canonical: '/products' },
  openGraph: {
    title: `Product Catalog | ${siteConfig.name}`,
    description:
      'Browse 50+ industrial lifting and material handling products — hoists, winches, wire ropes, slings and rigging hardware.',
    url: `${siteConfig.url}/products`,
    type: 'website',
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
