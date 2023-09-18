import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const navConfirm: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.reset-password',
    href: routes.auth.reset_password,
  },
  {
    label: 'navigation.reset-confirm',
    href: routes.auth.reset_password + routes.auth.confirm,
  },
];
