import { TColsCard, TRowsCard } from '@/types';
import { TFolder } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TFolder;
  type: number;
};

export const TableCard = ({ data, type }: TProps) => {
  return (
    <>
      {type === TColsCard && <ColsCard {...data} />}
      {type === TRowsCard && <RowsCard {...data} />}
    </>
  );
};
