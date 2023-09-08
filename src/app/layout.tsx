import '@/app/globals.scss';
import { Roboto } from 'next/font/google';
import React from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
