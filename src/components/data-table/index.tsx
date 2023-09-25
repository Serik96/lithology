import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';
import { TextField } from '@/components/ui';
import { cn } from '@/helpers';
import { SearchIcon } from '@/icons';
import { rowsTypes } from './const';
import s from './data-table.module.scss';

type TProps = PropsWithChildren<{
  hasTypes: boolean;
  type?: number;
  setType?: (value: number) => void;
}>;

export const DataTable = ({ hasTypes, type, setType, children }: TProps) => {
  const t = useTranslations();

  return (
    <div className={s.dataTable}>
      <div className={s.searchWrapper}>
        <form className={s.form}>
          <TextField icon={SearchIcon} placeholder={t('search')} />
        </form>
        {hasTypes && (
          <div className={s.viewBtns}>
            {rowsTypes.map((e, i) => {
              const Icon = e.icon;

              return (
                <div
                  key={`rows_type_${i}`}
                  className={cn(s.viewBtn, type === e.type && s.viewBtnActive)}
                  onClick={() => setType && setType(e.type)}
                >
                  <Icon />
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className={s.table}>{children}</div>
    </div>
  );
};
