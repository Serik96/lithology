import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const changePasswordBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.change-password.main',
    href: routes.auth.changePassword.main,
  },
];
