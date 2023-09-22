import { routes } from '@/const';
import { BookIcon, CloudIcon, FolderAddIcon, StarIcon } from '@/icons';
import { TBreadcrumbs, TSidebarLink } from '@/types';

export const projectsNav: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.cabinet,
  },
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
  },
];

export const sidebarNav: TSidebarLink[] = [
  {
    label: 'navigation.all-projects.main',
    icon: BookIcon,
    href: routes.project.allProjects.main,
  },
  {
    label: 'navigation.all-projects.archived',
    icon: CloudIcon,
    href: routes.project.allProjects.archived,
  },
  {
    label: 'navigation.all-projects.favourites',
    icon: StarIcon,
    href: routes.project.allProjects.favourites,
  },
  {
    label: 'navigation.all-projects.create',
    icon: FolderAddIcon,
    href: routes.project.allProjects.create,
    isBottomLink: true,
  },
];
