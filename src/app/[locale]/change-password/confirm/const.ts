import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const confirmBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.change-password',
    href: routes.auth.changePassword.main,
  },
  {
    label: 'navigation.email-confirm',
    href: routes.auth.changePassword.confirm,
  },
];
