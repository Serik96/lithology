import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const successBreadcrumbs: TBreadcrumbs[] = [
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
  {
    label: 'navigation.all-projects.created',
    href: routes.project.allProjects.success,
  },
];
