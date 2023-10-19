import { routes } from '@/const';
import { FolderAddIcon } from '@/icons';
import { TBreadcrumbs, TSidebarLink } from '@/types';

export const editBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
  },
  {
    label: 'navigation.all-projects.edit',
    href: routes.project.allProjects.edit,
  },
];

export const editSideLinks: TSidebarLink[] = [
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
    Icon: FolderAddIcon,
    isBottom: true,
  },
];
