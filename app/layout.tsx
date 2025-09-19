import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
    'CrowmanCloud is an AI-powered developer experience platform for building, deploying, and scaling apps faster. Try CrowmanCloud tools, docs, and community.',
  keywords: [
    'crowmancloud',
    'crow man cloud',
    'crowman cloud',
    'ai developer platform',
    'next.js',
    'cloud devex',
    'developer experience',
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
      'AI-powered developer experience platform. Explore features, docs, pricing and join the crowmancloud community.',
    images: [
      {
        url: '/application.png',
        width: 1200,
        height: 630,
        alt: 'crowmancloud application preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'crowmancloud — AI-Powered Cloud Developer Experience',
    description:
      'Build, deploy, and scale faster with crowmancloud. Tools, docs, and community for modern app development.',
    images: ['/application.png'],
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

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Script id="ld-org" type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </Script>
        <Script id="ld-website" type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </Script>
      </body>
    </html>
  );
}
