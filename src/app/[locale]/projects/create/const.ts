import { routes } from '@/const';
import { FolderAddIcon } from '@/icons';
import { TBreadcrumbs, TSidebarLink } from '@/types';

export const createBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
  },
  {
    label: 'navigation.all-projects.create',
    href: routes.project.allProjects.create,
  },
];

export const createSideLinks: TSidebarLink[] = [
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
    Icon: FolderAddIcon,
    isBottom: true,
  },
];
