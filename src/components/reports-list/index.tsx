import { ECardType } from '@/enums';
import { TReport } from '@/types/project';
import s from './reports-list.module.scss';
import { TableCard } from './table-card';

type TProps = {
  reports: TReport[];
  type: ECardType;
};
 
export const ReportsList = ({ reports, type }: TProps) => {
  return (
    <div className={s.list}>
      {reports.map(r => (
        <TableCard key={r.slug} data={r} type={type} />
      ))}
    </div>
  );
};
