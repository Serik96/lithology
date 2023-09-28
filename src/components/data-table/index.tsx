import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { TextField } from '@/components/ui';
import { ECardType, ESortBy } from '@/enums';
import { cn } from '@/helpers';
import { DropIcon, SearchIcon } from '@/icons';
import { TFolder, TProject } from '@/types/project';
import { rowsTypes, sortInitialValue } from './const';
import s from './data-table.module.scss';
import { FoldersList } from './folders-list';
import { TableHeader } from './table-header';

type TProps = {
  showTypeToggle?: boolean;
  rowType?: ECardType;
  setRowType?: (value: ECardType) => void;
  folders?: TFolder[];
  projects?: TProject[];
};

export const DataTable = ({ showTypeToggle, rowType, setRowType, folders }: TProps) => {
  const t = useTranslations();
  const [filters, setFilters] = useState(sortInitialValue);

  const handleChangeFilter = (name: string) => {
    setFilters(prevState => {
      const arr = [...prevState];
      const index = arr.findIndex(e => e.name === name);
      if (typeof index !== 'undefined') {
        arr[index] = {
          ...arr[index],
          by: arr[index].by === ESortBy.ASC ? ESortBy.DESC : ESortBy.ASC,
        };
      }

      return arr;
    });
  };

  return (
    <div className={s.dataTable}>
      <div className={s.searchWrapper}>
        <form className={s.form}>
          <TextField Icon={SearchIcon} placeholder={t('search')} />
        </form>
        {showTypeToggle && (
          <div className={s.viewBtns}>
            {rowsTypes.map(({ Icon, type }, i) => (
              <div
                key={`rows_type_${i}`}
                className={cn(s.viewBtn, type === rowType && s.viewBtnActive)}
                onClick={() => setRowType && setRowType(type)}
              >
                <Icon />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={s.filters}>
        {filters.map((e, i) => (
          <div
            key={`sort_by_filter_${i}`}
            className={s.filter}
            onClick={() => handleChangeFilter(e.name)}
          >
            {t(e.label)}
            <div
              className={cn(s.filterIcon, filters[i].by === ESortBy.DESC && s.reversed)}
            >
              <DropIcon />
            </div>
          </div>
        ))}
      </div>
      <div className={s.table}>
        {rowType === ECardType.ROW && <TableHeader />}
        {folders && rowType && <FoldersList folders={folders} type={rowType} />}
      </div>
    </div>
  );
};
