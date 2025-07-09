import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: 'Jared Williams | Building Honest Systems',
    template: '%s | Jared Williams'
  },
  description: "I build honest systems and better workflows for real people. No fluff, just solutions that work.",
  keywords: ['web development', 'automation', 'systems integration', 'healthcare IT', 'process improvement'],
  authors: [{ name: 'Jared Williams' }],
  creator: 'Jared Williams',
  publisher: 'Jared Williams',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jaredwilliams.dev'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jaredwilliams.dev',
    siteName: 'Jared Williams',
    title: 'Jared Williams | Building Honest Systems',
    description: 'I build honest systems and better workflows for real people. No fluff, just solutions that work.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jared Williams - Building Honest Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jared Williams | Building Honest Systems',
    description: 'I build honest systems and better workflows for real people. No fluff, just solutions that work.',
    images: ['/og-image.jpg'],
    creator: '@jaredwilliams',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jared Williams",
              "jobTitle": "Building Honest Systems",
              "description": "I build honest systems and better workflows for real people. No fluff, just solutions that work.",
              "url": "https://jaredwilliams.dev"
            }
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
