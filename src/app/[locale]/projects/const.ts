import { routes } from '@/const';
import { ECardFilterType } from '@/enums';
import { BookIcon, CloudIcon, FolderAddIcon, StarIcon } from '@/icons';
import { TBreadcrumbs, TSidebarLink } from '@/types';

export const projectsBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.cabinet,
  },
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
  },
];

export const projectsSideLinks: TSidebarLink[] = [
  {
    label: 'navigation.all-projects.main',
    Icon: BookIcon,
    href: routes.project.allProjects.main,
  },
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
    label: 'navigation.all-projects.create',
    Icon: FolderAddIcon,
    href: routes.project.allProjects.create,
    isBottom: true,
  },
];
