import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const navRegistration: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.registration',
    href: routes.auth.registration,
  },
];
