import { DefaultCard } from '@/components/data-table/table-card/default-card';
import { TFolder } from '@/types/project';

type TProps = {
  data: TFolder;
  cardType: number;
};
export const TableCard = ({ data, cardType }: TProps) => {
  return <>{cardType === 0 && <DefaultCard {...data} />}</>;
};
