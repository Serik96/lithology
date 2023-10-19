import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const confirmBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.change-email.main',
    href: routes.auth.changeEmail.main,
  },
  {
    label: 'navigation.change-email.confirm',
    href: routes.auth.changeEmail.confirm,
  },
];
