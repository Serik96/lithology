import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const confirmBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.change-password.main',
    href: routes.auth.changePassword.main,
  },
  {
    label: 'navigation.change-password.done',
    href: routes.auth.changePassword.done,
  },
];
