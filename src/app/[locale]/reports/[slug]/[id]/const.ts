import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const reportBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.dashboard,
  },
  {
    label: 'navigation.reports.main',
    href: routes.project.allProjects.main,
  },
];
