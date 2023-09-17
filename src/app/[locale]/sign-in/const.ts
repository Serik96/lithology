import { routes } from '@/const';
import { TBreacrumbs } from '@/types';

export const navSignIn: TBreacrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.sign-in',
    href: routes.auth.register,
  },
];
