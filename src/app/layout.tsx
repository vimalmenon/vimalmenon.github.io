import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { ThemeProvider } from '@common';
import { IReactChildren } from '@types';

import '../../styles/globals.css';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  authors: [{ name: 'Vimal Menon', url: 'https://vimalmenon.dev' }],
  creator: 'Vimal Menon',
  description:
    'Professional portfolio of Vimal Menon, a passionate full-stack developer with 6+ years of experience crafting digital experiences that blend cutting-edge technology with intuitive design.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'TypeScript',
    'Next.js',
    'Web Development',
    'Portfolio',
    'Vimal Menon',
    'Kerala',
    'India',
  ],
  openGraph: {
    description: 'Professional portfolio showcasing modern web development projects and expertise.',
    images: [
      {
        alt: 'Vimal Menon - Full Stack Developer',
        height: 630,
        url: '/og-image.jpg',
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: 'Vimal Menon Portfolio',
    title: 'Vimal Menon - Full Stack Developer',
    type: 'website',
    url: 'https://vimalmenon.dev',
  },
  publisher: 'Vimal Menon',
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: {
    default: 'Vimal Menon - Full Stack Developer',
    template: '%s | Vimal Menon',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Professional portfolio showcasing modern web development projects and expertise.',
    images: ['/og-image.jpg'],
    title: 'Vimal Menon - Full Stack Developer',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => (
  <html lang="en" className={inter.variable} suppressHydrationWarning>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body className="min-h-screen antialiased">
      <ThemeProvider
        defaultTheme={{ colorTheme: 'default', mode: 'light' }}
        storageKey="vimal-menon-theme"
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
