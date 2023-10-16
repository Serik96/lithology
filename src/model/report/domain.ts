import { routes } from '@/const';

type TProps = {
  reportId: number;
};

export function getReportHref({ reportId }: TProps): string {
  return `${routes.project.reports.main}/${reportId}`;
}
