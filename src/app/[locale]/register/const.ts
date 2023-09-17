import { routes } from '@/const';
import { TBreacrumbs } from '@/types';

export const navRegister: TBreacrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.register',
    href: routes.auth.register,
  },
];
