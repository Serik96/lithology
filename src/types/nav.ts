import { FC } from 'react';
import { ECardSortType } from '@/enums';

export type TBreadcrumbs = {
  label: string;
  href: string;
};

export type TSidebarLink = {
  label: string;
  href?: string;
  Icon: FC;
  type?: ECardSortType;
  isBottom?: boolean;
};
