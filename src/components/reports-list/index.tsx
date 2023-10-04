import { ECardType } from '@/enums';
import { TSpecimen } from '@/types';
import s from './reports-list.module.scss';
import { TableCard } from './table-card';

type TProps = {
  reports: TSpecimen[];
  type: ECardType;
};

export const ReportsList = ({ reports, type }: TProps) => {
  return (
    <div className={s.list}>
      {reports.map(r => (
        <TableCard key={r.slug} report={r} type={type} />
      ))}
    </div>
  );
};
