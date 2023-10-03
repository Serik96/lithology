import { routes } from '@/const';
import { ECardSortType } from '@/enums';
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
    type: ECardSortType.ARCHIVED,
  },
  {
    label: 'navigation.all-projects.favourites',
    Icon: StarIcon,
    type: ECardSortType.FAVOURITES,
  },
  {
    label: 'navigation.reports.create',
    Icon: FolderAddIcon,
    href: routes.project.allProjects.create,
    isBottom: true,
  },
];
