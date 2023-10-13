import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { TextField } from '@/components/ui';
import { ESortDirection } from '@/enums';
import { cn } from '@/helpers';
import { DropIcon, SearchIcon } from '@/icons';
import { sortInitialValue } from './const';
import s from './search-input.module.scss';

export const SeacrhType = () => {
  const t = useTranslations();
  const [filters, setFilters] = useState(sortInitialValue);

  const handleChangeFilter = (name: string) => {
    setFilters(prevState => {
      const arr = [...prevState];
      const index = arr.findIndex(e => e.name === name);
      if (typeof index !== 'undefined') {
        arr[index] = {
          ...arr[index],
          direction:
            arr[index].direction === ESortDirection.ASC
              ? ESortDirection.DESC
              : ESortDirection.ASC,
        };
      }
      return arr;
    });
  };

  return (
    <div className={s.searchInput}>
      <form className={s.form}>
        <TextField Icon={SearchIcon} placeholder={t('search')} />
      </form>
      <div className={s.filters}>
        {filters.map((e, i) => (
          <div
            key={`sort_by_filter_${i}`}
            className={s.filter}
            onClick={() => handleChangeFilter(e.name)}
          >
            {t(e.label)}
            <div
              className={cn(
                s.filterIcon,
                filters[i].direction === ESortDirection.DESC && s.reversed,
              )}
            >
              <DropIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
