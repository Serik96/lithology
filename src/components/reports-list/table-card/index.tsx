import { ECardType } from '@/enums';
import { TSpecimen } from '@/types';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  report: TSpecimen;
  type: ECardType;
};

export const TableCard = ({ report, type }: TProps) => {
  if (type === ECardType.ROW) {
    return <RowsCard report={report} />;
  }

  if (type === ECardType.COLUMN) {
    return <ColsCard report={report} />;
  }
};
