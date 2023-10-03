import { ECardType } from '@/enums';
import { TProject } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TProject;
  type: ECardType;
};

export const TableCard = ({ data, type }: TProps) => {
  if (type === ECardType.ROW) {
    return <RowsCard project={{ ...data }} />;
  }

  if (type === ECardType.COLUMN) {
    return <ColsCard project={{ ...data }} />;
  }
};
