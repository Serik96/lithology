import { routes } from '@/const';
import { ECardFilterType } from '@/enums';
import { CloudIcon, FolderAddIcon, StarIcon } from '@/icons';
import { TBreadcrumbs, TSidebarLink } from '@/types';

export const reportsBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.cabinet,
  },
  {
    label: 'navigation.reports.main',
    href: routes.project.allProjects.main,
  },
];

export const reportsSideLinks: TSidebarLink[] = [
  {
    label: 'navigation.all-projects.archived',
    Icon: CloudIcon,
    type: ECardFilterType.ARCHIVED,
  },
  {
    label: 'navigation.all-projects.favourites',
    Icon: StarIcon,
    type: ECardFilterType.FAVOURITES,
  },
  {
    label: 'navigation.reports.create',
    Icon: FolderAddIcon,
    href: routes.project.allProjects.create,
    isBottom: true,
  },
];
