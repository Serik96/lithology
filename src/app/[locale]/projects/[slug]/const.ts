import { routes } from '@/const';
import { ECardFilterType } from '@/enums';
import { CloudIcon, FolderAddIcon, StarIcon } from '@/icons';
import { TBreadcrumbs, TSidebarLink } from '@/types';

export const projectBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.profile.main,
  },
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
  },
];

export const projectSideLinks: TSidebarLink[] = [
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
