import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const subscriptionBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'subscription.title',
    href: routes.project.subscription.main,
  },
];
