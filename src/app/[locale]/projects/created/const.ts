import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const createdBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.public.main,
  },
  {
    label: 'navigation.all-projects.main',
    href: routes.project.allProjects.main,
  },
  {
    label: 'navigation.all-projects.created',
    href: routes.project.allProjects.created,
  },
];
