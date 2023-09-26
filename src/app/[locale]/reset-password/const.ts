import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const navResetPassword: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.reset-password',
    href: routes.auth.resetPassword.main,
  },
];
