import type { Metadata } from 'next';

import './globals.css';

import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import { cn } from '@/lib/utils';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Andrii Pasiura | Frontend Developer',
  description:
    'Portfolio of Andrii Pasiura, a Frontend Developer specializing in React, Next.js, and modern web development. Explore my projects and skills.',
  keywords: [
    'frontend developer',
    'react',
    'nextjs',
    'typescript',
    'web development',
    'portfolio',
    'andrii pasiura',
  ],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'Andrii Pasiura | Frontend Developer Portfolio',
    description:
      'Explore the portfolio of Andrii Pasiura - Frontend Developer creating modern web applications with React, Next.js and TypeScript.',
    url: BASE_URL,
    siteName: 'Andrii Pasiura Portfolio',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Andrii Pasiura Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrii Pasiura | Frontend Developer',
    description:
      'Frontend Developer creating modern web applications with React, Next.js and TypeScript. Check out my portfolio!',
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.variable, 'antialiased')}>
        {children}
        <ToastContainer
          position="bottom-right"
          limit={3}
          toastClassName="bg-toast"
        />
      </body>
    </html>
  );
}
