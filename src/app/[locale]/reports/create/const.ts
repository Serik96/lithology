import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const reportsCreateBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.cabinet,
  },
  {
    label: 'navigation.reports.create',
    href: routes.project.allProjects.create,
  },
];
