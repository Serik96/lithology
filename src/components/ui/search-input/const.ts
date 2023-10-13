import { ESortDirection } from '@/enums';
import { TProjectSortField } from '@/types/project';

export const sortInitialValue: TProjectSortField[] = [
  {
    label: 'table.filter-fields.all-notification',
    name: 'all-notification',
    direction: ESortDirection.ASC,
  },
  {
    label: 'table.filter-fields.all-users',
    name: 'all-users',
    direction: ESortDirection.ASC,
  },
  {
    label: 'table.filter-fields.all-date',
    name: 'all-date',
    direction: ESortDirection.ASC,
  },
];
