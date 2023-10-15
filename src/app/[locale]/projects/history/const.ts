import { routes } from '@/const';
import { ESortDirection } from '@/enums';
import { TBreadcrumbs, TProjectSortField } from '@/types';

export const historyBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
  },
  {
    label: 'navigation.all-projects.history',
    href: routes.project.allProjects.history,
  },
];

export const sortInitialValue: TProjectSortField[] = [
  {
    label: 'table.filter-fields.all-notification',
    name: 'all-notification',
    direction: ESortDirection.ASC,
  },
  {
    label: 'table.filter-fields.all-users',
    name: 'all-users',
    direction: ESortDirection.ASC,
  },
  {
    label: 'table.filter-fields.all-date',
    name: 'all-date',
    direction: ESortDirection.ASC,
  },
];
