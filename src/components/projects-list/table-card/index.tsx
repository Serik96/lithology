import { ECardType } from '@/enums';
import { TProject } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TProject;
  type: ECardType;
};

export const TableCard = ({ data, type }: TProps) => {
  return (
    <>
      {type === ECardType.ROW && <RowsCard project={{ ...data }} />}
      {type === ECardType.COLUMN && <ColsCard project={{ ...data }} />}
    </>
  );
};
