import '@/styles/index.scss';

import { Inter, Poppins } from 'next/font/google';
import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Loader from '@/components/ui/loader';
import { RootLayoutProps } from '@/interfaces/RootLayoutProps';
// import { getDictionary } from './dictionaries';


const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-poppins',
});


export default function RootLayout({ children, params: {lang} }: RootLayoutProps) {
  const loading = false;

  return (
    <html lang={lang} className={[inter.variable, poppins.variable].join(' ')}>
      <body>{loading ? (
        <Loader />
      ) : (
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      )}
      </body>
    </html>
  );
}
