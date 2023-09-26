import { FC } from 'react';

export type TBreadcrumbs = {
  label: string;
  href: string;
};

export type TSidebarLink = {
  label: string;
  href: string;
  icon: FC;
  isBottomLink?: boolean;
};
