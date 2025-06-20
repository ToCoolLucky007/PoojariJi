import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Book Puja Services | Book Pandits For Puja | PoojariJi',
  description: 'Book qualified Pandits online for Havan, Marriage, Satyanarayan, office/festival pujas & more across India. Schedule verified Vedic rituals with prasad delivery.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
