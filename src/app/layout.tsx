import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextAuthProvider } from './provider';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '$/components/commons';
import { Footer } from '$/components/commons/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keeply - Gardez vos collections au même endroit',
  description: `Gérez vos collections en un clin d&apos;œil! Keeply vous aide à suivre, trier et partager vos collections précieuses. Que vous soyez amateur de vinyles, de cartes ou de timbres !`,
  openGraph: {
    type: 'website',
    countryName: 'FR',
    title: 'Keeply - Gardez vos collections au même endroit',
    images: [
      {
        url: '/app.png',
        width: 1000,
        height: 1000,
        alt: 'Keeply',
      },
    ],
    url: 'https://keeply-neon.vercel.app',
    description: `Gérez vos collections en un clin d'œil! Keeply vous aide à suivre, trier et partager vos collections précieuses. Que vous soyez amateur de vinyles, de cartes ou de timbres !`,
    siteName: 'Keeply',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keeply - Gardez vos collections au même endroit',
    images: [
      {
        url: '/app.png',
        width: 1000,
        height: 1000,
        alt: 'Keeply',
      },
    ],
    description: `Gérez vos collections en un clin d'œil! Keeply vous aide à suivre, trier et partager vos collections précieuses. Que vous soyez amateur de vinyles, de cartes ou de timbres !`,
  },
  robots: 'follow, index',
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
          <Toaster />
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
