import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const confirmBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.reset-password',
    href: routes.auth.resetPassword.main,
  },
  {
    label: 'navigation.reset-confirm',
    href: routes.auth.resetPassword.confirm,
  },
];
