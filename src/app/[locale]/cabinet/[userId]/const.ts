import { routes } from '@/const';
import { ESortDirection } from '@/enums';
import { TBreadcrumbs, TProjectSortField } from '@/types';

export const userBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.profile.company.members.main,
  },
  {
    label: 'navigation.other-page',
    href: routes.project.profile.main,
  },
];

export const sortInitialValue: TProjectSortField[] = [
  {
    label: 'company-members.filter-fields.role',
    name: 'role',
    direction: ESortDirection.ASC,
  },
  {
    label: 'company-members.filter-fields.rights',
    name: 'rights',
    direction: ESortDirection.ASC,
  },
];
