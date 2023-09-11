'use client';

import '@/styles/index.scss';
import { Inter, Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import AppProvider from '@/app/[locale]/app-provider';
import { locales } from '@/const';
import { dictionaries } from '@/dictionaries';
import { store } from '@/store/store';

// @todo вынести это в /src/styles/fonts
const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin', 'cyrillic'],
  // @todo назови --font-primary
  variable: '--font-inter',
});

// @todo вынести это в /src/styles/fonts
const poppins = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
  // @todo назови --font-secondary
  variable: '--font-poppins',
});

type TProps = PropsWithChildren<{
  params: {
    locale: string;
  };
}>;

export default function RootLayout({ children, params: { locale } }: TProps) {
  const lang = useLocale();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const messages = dictionaries[lang];

  if (!messages || locale !== lang) {
    notFound();
  }

  return (
    <html lang={locale} className={[inter.variable, poppins.variable].join(' ')}>
      <body>
        <Provider store={store}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <AppProvider>{children}</AppProvider>
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}
