'use client';

import '@/styles/index.scss';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AppProvider from '@/app/[locale]/app-provider';
import { locales } from '@/const';
import { dictionaries } from '@/dictionaries';
import { store } from '@/store';

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

  const persistor = persistStore(store);

  return (
    <html lang={locale}>
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <AppProvider>{children}</AppProvider>
            </NextIntlClientProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}
