import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const registrationBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.registration',
    href: routes.auth.registration,
  },
];
