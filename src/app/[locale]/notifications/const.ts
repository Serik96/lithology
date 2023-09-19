import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const navNotifications: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.notifications',
    href: routes.project.notifications,
  },
];
