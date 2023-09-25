import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const navPurchase: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.subscription.main',
    href: routes.subscription.main,
  },
  {
    label: 'navigation.subscription.purchase',
    href: routes.subscription.purchase,
  },
];
