import { TRowType } from '@/components/data-table/types';
import { ECardType } from '@/enums';
import { BlockIcon, FatrowsIcon } from '@/icons';

export const defaultRowsType = 0;

export const rowsTypes: TRowType[] = [
  {
    type: ECardType.ROW,
    Icon: FatrowsIcon,
  },
  {
    type: ECardType.ROW,
    Icon: BlockIcon,
  },
];
