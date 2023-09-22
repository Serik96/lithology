import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { TableCard } from '@/components/data-table/table-card';
import { TextField } from '@/components/ui';
import { cn } from '@/helpers';
import { SearchIcon } from '@/icons';
import { TFolder } from '@/types/project';
import { defaultRowsType, rowsTypes, tableHeaderFields } from './const';
import s from './data-table.module.scss';

type TProps = {
  data: TFolder[];
};

export const DataTable = ({ data }: TProps) => {
  const t = useTranslations();

  const [rowsType, setRowsType] = useState(defaultRowsType);

  return (
    <div className={s.dataTable}>
      <div className={s.searchWrapper}>
        <form className={s.form}>
          <TextField icon={SearchIcon} placeholder={t('search')} />
        </form>
        <div className={s.viewBtns}>
          {rowsTypes.map((e, i) => {
            const Icon = e.icon;

            return (
              <div
                key={`rows_type_${e.type}_${i}`}
                className={cn(s.viewBtn, rowsType === e.type && s.viewBtnActive)}
                onClick={() => setRowsType(e.type)}
              >
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.table}>
        {rowsType === 0 && (
          <div className={s.tableHeader}>
            {tableHeaderFields.map((e, i) => (
              <div key={`table_header_item_${e}_${i}`} className={s.tableHeaderItem}>
                {t(e)}
              </div>
            ))}
          </div>
        )}
        <div className={s.tableBody}>
          {data.map(e => (
            <TableCard key={e.id} data={e} cardType={rowsType} />
          ))}
        </div>
      </div>
    </div>
  );
};
