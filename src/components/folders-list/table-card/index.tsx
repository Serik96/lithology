import { TFolder } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TFolder;
  cardType: number;
};
export const TableCard = ({ data, cardType }: TProps) => {
  return (
    <>
      {cardType === 0 && <ColsCard {...data} />}
      {cardType === 1 && <RowsCard {...data} />}
    </>
  );
};
