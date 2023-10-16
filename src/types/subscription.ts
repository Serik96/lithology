import { FC } from 'react';

// @todo: уточнить тип данных для плана и переделать после
export type TPricePlan = {
  // id: number;
  // slug: string;
  // title: string;
  // content: string;
  // ru_title: string;
  // ru_content: string;
  // price: number;
  // discount: number;
  // period: string;
  // pic: string;
  // top: boolean;
  // created_at: string;
  id: number;
  slug: string;
  title: string;
  content: string;
  price: number;
  top?: boolean;
};

export type TAdvantage = {
  Icon: FC;
  label: string;
};
