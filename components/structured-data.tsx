import { siteConfig, absoluteUrl } from '@/lib/site'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; there is no user input here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * Organization + LocalBusiness describing the business itself. This is what lets
 * Google associate the brand name "Kolkata Industrial Company" with this site,
 * its address, phone numbers and logo (eligible for a knowledge panel).
 */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'Store'],
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phones.map((p) => `+91${p}`),
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: { '@type': 'Country', name: 'India' },
    openingHoursSpecification: siteConfig.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    ...(siteConfig.sameAs.length ? { sameAs: siteConfig.sameAs } : {}),
  }
  return <JsonLd data={data} />
}

/** WebSite entity — reinforces the brand name and enables a sitelinks search box. */
export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/products?query={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
  return <JsonLd data={data} />
}

export type BreadcrumbItem = { name: string; url: string }

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return <JsonLd data={data} />
}

export function ProductJsonLd({
  name,
  description,
  image,
  category,
  url,
}: {
  name: string
  description: string
  image: string
  category: string
  url: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: absoluteUrl(image),
    category,
    url,
    brand: { '@type': 'Brand', name: 'JAG-PRO' },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${siteConfig.url}/#organization` },
    },
  }
  return <JsonLd data={data} />
}
