import { TPictures } from '@/app/[locale]/reports/create/types';
import { routes } from '@/const';
import { TBreadcrumbs } from '@/types';

export const reportsCreateBreadcrumbs: TBreadcrumbs[] = [
  {
    label: 'navigation.home',
    href: routes.project.cabinet,
  },
  {
    label: 'navigation.reports.create',
    href: routes.project.allProjects.create,
  },
];

export const picturesInitialValue: TPictures = {
  pic1: null,
  pic2: null,
};