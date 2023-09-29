import { ECardType } from '@/enums';
import { TProject } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TProject;
  type: ECardType;
  foldersSlug: string;
};

export const TableCard = ({ data, type, foldersSlug }: TProps) => {
  return (
    <>
      {type === ECardType.ROW && (
        <RowsCard foldersSlug={foldersSlug} project={{ ...data }} />
      )}
      {type === ECardType.COLUMN && (
        <ColsCard foldersSlug={foldersSlug} project={{ ...data }} />
      )}
    </>
  );
};
