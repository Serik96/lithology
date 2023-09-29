import { ECardType } from '@/enums';
import { TReport } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TReport;
  type: ECardType;
  foldersSlug: string;
};

export const TableCard = ({ data, type, foldersSlug }: TProps) => {
  return (
    <>
      {type === ECardType.ROW && (
        <RowsCard foldersSlug={foldersSlug} report={{ ...data }} />
      )}
      {type === ECardType.COLUMN && (
        <ColsCard foldersSlug={foldersSlug} report={{ ...data }} />
      )}
    </>
  );
};
