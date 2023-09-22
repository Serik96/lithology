import { PropsWithChildren } from 'react';

type TProps = PropsWithChildren<{
  params: {
    locale: string;
  };
}>;
export default function RootLayout({ children, params: { locale } }: TProps) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
