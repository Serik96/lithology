import { routes } from '@/const';
import { DiscountIcon, FlashIcon } from '@/icons';
import { TAdvantage, TBreadcrumbs } from '@/types';

export const subscriptionBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.subscription.main',
    href: routes.project.subscription.main,
  },
];

export const subscriptionAdvantages: TAdvantage[] = [
  {
    Icon: FlashIcon,
    label: 'subscription.advantages.free-projects'
  },
  {
    Icon: DiscountIcon,
    label: 'subscription.advantages.money-back'
  },
]