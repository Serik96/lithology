import { TRowType } from '@/components/data-table/types';
import { ECardType, ESortDirection } from '@/enums';
import { BlockIcon, FatrowsIcon } from '@/icons';
import { TProjectSortField } from '@/types/project';

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

export const sortInitialValue: TProjectSortField[] = [
  {
    label: 'table.filter-fields.a-z',
    name: 'a-z',
    direction: ESortDirection.ASC,
  },
  {
    label: 'table.filter-fields.creation-date',
    name: 'creation-date',
    direction: ESortDirection.ASC,
  },
  {
    label: 'table.filter-fields.change-date',
    name: 'change-date',
    direction: ESortDirection.ASC,
  },
  {
    label: 'table.filter-fields.comment-date',
    name: 'comment-date',
    direction: ESortDirection.ASC,
  },
];
