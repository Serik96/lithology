import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const navRegister: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.register',
    href: routes.auth.register,
  },
];
