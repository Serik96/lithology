import { TFolder } from '@/types/project';
import s from './folders-list.module.scss';
import { TableCard } from './table-card';

type TProps = {
  data: TFolder[];
  type: number;
};

export const FoldersList = ({ data, type }: TProps) => {
  return (
    <div className={s.list}>
      {data.map(e => (
        <TableCard key={e.id} data={e} type={type} />
      ))}
    </div>
  );
};
