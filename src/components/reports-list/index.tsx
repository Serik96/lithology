import { ECardType } from '@/enums';
import { TReport } from '@/types/project';
import s from './projects-list.module.scss';
import { TableCard } from './table-card';

type TProps = {
  reports: TReport[];
  type: ECardType;
  foldersSlug: string;
};

export const ReportsList = ({ reports, type, foldersSlug }: TProps) => {
  return (
    <div className={s.list}>
      {reports.map(r => (
        <TableCard foldersSlug={foldersSlug} key={r.slug} data={r} type={type} />
      ))}
    </div>
  );
};
