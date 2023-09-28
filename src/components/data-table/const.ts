import { TRowType } from '@/components/data-table/types';
import { ECardType, ESortBy } from '@/enums';
import { BlockIcon, FatrowsIcon } from '@/icons';
import { TSort } from '@/types/project';

export const defaultRowsType = 0;

export const rowsTypes: TRowType[] = [
  {
    type: ECardType.ROW,
    Icon: FatrowsIcon,
  },
  {
    type: ECardType.COLUMN,
    Icon: BlockIcon,
  },
];

export const sortInitialValue: TSort[] = [
  {
    label: 'table.fields.a_z',
    name: 'a_z',
    by: ESortBy.ASC,
  },
  {
    label: 'table.fields.creation_date',
    name: 'creation_date',
    by: ESortBy.ASC,
  },
  {
    label: 'table.fields.change_date',
    name: 'change_date',
    by: ESortBy.ASC,
  },
  {
    label: 'table.fields.comment_date',
    name: 'comment_date',
    by: ESortBy.ASC,
  },
];
