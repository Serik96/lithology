import { ECardType } from '@/enums';
import { TFolder } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TFolder;
  type: ECardType;
};

export const TableCard = ({ data, type }: TProps) => {
  return (
    <>
      {type === ECardType.ROW && <RowsCard {...data} />}
      {type === ECardType.COLUMN && <ColsCard {...data} />}
    </>
  );
};
