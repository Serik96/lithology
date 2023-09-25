import { TFolder } from '@/types/project';
import s from './folders-list.module.scss';
import { TableCard } from './table-card';

type TProps = {
  folders: TFolder[];
  type: number;
};

export const FoldersList = ({ folders, type }: TProps) => {
  return (
    <div className={s.list}>
      {folders.map(f => (
        <TableCard key={f.id} data={f} type={type} />
      ))}
    </div>
  );
};
