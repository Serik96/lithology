import { FC } from 'react';

export type TPricePlan = {
  id: number;
  slug: string;
  title: string;
  content: string;
  ru_title: string;
  ru_content: string;
  price: number;
  discount: number;
  period: string;
  pic: string;
  top: boolean;
  created_at: string;
  updated_at: string;
};

export type TAdvantage = {
  Icon: FC;
  label: string;
};
