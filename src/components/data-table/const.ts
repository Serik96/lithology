import { TRowType } from '@/components/data-table/types';
import { BlockIcon, FatrowsIcon } from '@/icons';

export const defaultRowsType = 0;

export const rowsTypes: TRowType[] = [
  {
    type: 0,
    icon: FatrowsIcon,
  },
  {
    type: 1,
    icon: BlockIcon,
  },
];
