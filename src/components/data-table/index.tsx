import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';
import { TextField } from '@/components/ui';
import { ECardType } from '@/enums';
import { cn } from '@/helpers';
import { SearchIcon } from '@/icons';
import { rowsTypes } from './const';
import s from './data-table.module.scss';

type TProps = PropsWithChildren<{
  showTypeToggle?: boolean;
  rowType?: ECardType;
  setRowType?: (value: ECardType) => void;
}>;

export const DataTable = ({ showTypeToggle, rowType, setRowType, children }: TProps) => {
  const t = useTranslations();

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

      <div className={s.table}>{children}</div>
    </div>
  );
};
