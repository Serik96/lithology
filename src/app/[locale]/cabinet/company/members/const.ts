import { routes } from '@/const';
import { ESortDirection } from '@/enums';
import { AddIcon, BuildsIcon, ProfileIcon } from '@/icons';
import { TBreadcrumbs, TProjectSortField, TSidebarLink } from '@/types';

export const membersBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.profile.company.main,
  },
  {
    label: 'navigation.other-page',
    href: routes.project.profile.company.members,
  },
];

export const membersSideLinks: TSidebarLink[] = [
  {
    label: 'navigation.company-members.user',
    Icon: ProfileIcon,
    href: routes.project.profile.main,
  },
  {
    label: 'navigation.company-members.company',
    Icon: BuildsIcon,
    href: routes.project.profile.company.main,
  },
  {
    label: 'navigation.company-members.add',
    Icon: AddIcon,
    isBottom: true,
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
