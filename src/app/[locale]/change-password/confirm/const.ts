import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const navConfirm: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.change-password',
    href: routes.auth.change_password,
  },
  {
    label: 'navigation.email-confirm',
    href: routes.auth.change_password + routes.auth.confirm,
  },
];
