import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const navChangePassword: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.change-password',
    href: routes.auth.changePassword,
  },
];
