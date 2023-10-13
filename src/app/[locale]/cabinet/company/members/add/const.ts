import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const membersBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.profile.company.members.main,
  },
  {
    label: 'navigation.other-page',
    href: routes.project.profile.company.members.add,
  },
];
