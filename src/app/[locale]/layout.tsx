'use client';
import '@/app/[locale]/globals.scss';
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { RootLayoutProps } from '@/interfaces/RootLayoutProps';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
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
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
