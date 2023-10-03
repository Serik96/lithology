import { FC } from 'react';
import { ECardFilterType } from '@/enums';

export type TBreadcrumbs = {
  label: string;
  href: string;
};

export type TSidebarLink = {
  label: string;
  href?: string;
  Icon: FC;
  type?: ECardFilterType;
  isBottom?: boolean;
};
