import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const signInBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.sign-in',
    href: routes.auth.registration,
  },
];
