import { routes } from '@/const';
import { ECardSortType } from '@/enums';
import { CloudIcon, FolderAddIcon, StarIcon } from '@/icons';
import { TBreadcrumbs, TSidebarLink } from '@/types';

export const projectNav: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.cabinet,
  },
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
  },
];

export const projectSidebarNav: TSidebarLink[] = [
  {
    label: 'navigation.all-projects.archived',
    Icon: CloudIcon,
    href: routes.project.allProjects.archived,
    type: ECardSortType.ARCHIVED,
  },
  {
    label: 'navigation.all-projects.favourites',
    Icon: StarIcon,
    href: routes.project.allProjects.favourites,
    type: ECardSortType.FAVOURITES,
  },
  {
    label: 'navigation.all-projects.create',
    Icon: FolderAddIcon,
    href: routes.project.allProjects.create,
    isBottomLink: true,
  },
];
