import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const navSubscription: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'subscription.title',
    href: routes.subscription.main,
  },
];
