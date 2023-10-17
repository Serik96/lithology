import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const changeEmailBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.change-email.main',
    href: routes.auth.changeEmail.main,
  },
];
