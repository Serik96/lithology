import { ECardType } from '@/enums';
import { TFolder } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TFolder;
  type: ECardType;
};

export const TableCard = ({ data, type }: TProps) => {
  if (type === ECardType.ROW) {
    return <RowsCard folder={{ ...data }} />;
  }

  if (type === ECardType.COLUMN) {
    return <ColsCard folder={{ ...data }} />;
  }
};
