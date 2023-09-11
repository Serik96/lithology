'use client';

import '@/styles/index.scss';
import { Inter, Poppins } from 'next/font/google';
import React from 'react';
import { Provider } from 'react-redux';
import AppProvider from '@/app/[lang]/app-provider';
import { RootLayoutProps } from '@/interfaces';
import { store } from '@/store/store';

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

export default function RootLayout({ children, params: { lang } }: RootLayoutProps) {
  return (
    <html lang={lang} className={[inter.variable, poppins.variable].join(' ')}>
      <body>
        <Provider store={store}>
          <AppProvider params={{ lang }}>{children}</AppProvider>
        </Provider>
      </body>
    </html>
  );
}
