import { ECardType } from '@/enums';
import { TProject } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  project: TProject;
  type: ECardType;
};

export const TableCard = ({ project, type }: TProps) => {
  if (type === ECardType.ROW) {
    return <RowsCard project={project} />;
  }

  if (type === ECardType.COLUMN) {
    return <ColsCard project={project} />;
  }
};
