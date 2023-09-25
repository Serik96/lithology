import s from '@/components/data-table/data-table.module.scss';
import { TFolder } from '@/types/project';
import { TableCard } from './table-card';

type TProps = {
  data: TFolder[];
  rowsType: number;
};

export const FoldersList = ({ data, rowsType }: TProps) => {
  return (
    <div className={s.tableBody}>
      {data.map(e => (
        <TableCard key={e.id} data={e} cardType={rowsType} />
      ))}
    </div>
  );
};
