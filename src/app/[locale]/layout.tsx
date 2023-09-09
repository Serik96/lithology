'use client';

import '@/app/[locale]/variables.scss';
import '@/app/[locale]/globals.scss';

import { Inter, Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { RootLayoutProps } from '@/interfaces/RootLayoutProps';

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

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const locale = useLocale();
  let messages;

  if (params.locale !== locale) notFound();

  try {
    messages = (await import(`../../locales/${locale}/translation.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={[inter.variable, poppins.variable].join(' ')}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <div className="container">
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
