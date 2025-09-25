import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'crowmancloud — Cloud Developer Experience',
    template: '%s | crowmancloud',
  },
  description:
    'CrowmanCloud is an AI-powered pre-deployment platform. Analyze your repo, auto-provision cloud essentials, get cost-aware guidance, and check vulnerabilities — all from a secure, local-first app.',
  keywords: [
    'crowmancloud',
    'crow man cloud',
    'crowman cloud',
    'AI developer platform',
    'cloud deployment',
    'pre-deployment analysis',
    'infrastructure as code',
    'cost estimation',
    'vulnerability scanning',
    'DevOps automation',
    'Next.js',
    'AWS', 'GCP', 'Azure',
    'CICD',
  ],
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'crowmancloud',
    title: 'crowmancloud — Build, Deploy, and Scale Faster',
    description:
      'AI-powered pre-deployment platform: repo analysis, infra blueprints, cost guidance, and vulnerability checks.',
    images: [
      {
        url: '/img/crowman-sky-diving.jpeg',
        width: 1200,
        height: 630,
        alt: 'CrowmanCloud hero preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'crowmancloud — AI-Powered Cloud Developer Experience',
    description:
      'Analyze your repo, auto-provision cloud resources, estimate costs, and check vulnerabilities with crowmancloud.',
    images: ['/img/crowman-sky-diving.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: { icon: '/favicon.svg' },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      'bing': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'crowmancloud',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'crowmancloud',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CrowmanCloud',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    url: siteUrl,
    description:
      'AI-powered pre-deployment platform for repo analysis, infra blueprints, cost guidance, and vulnerability checks.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
          {children}
        </GoogleOAuthProvider>
        <Script id="ld-organization" type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </Script>
        <Script id="ld-website" type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </Script>
        <Script id="ld-application" type="application/ld+json">
          {JSON.stringify(appJsonLd)}
        </Script>
      </body>
    </html>
  );
}
