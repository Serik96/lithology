import { PropsWithChildren } from 'react';

export type TPage = PropsWithChildren<{
  params: {
    locale: string;
  };
}>;
