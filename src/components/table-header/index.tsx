import { useTranslations } from 'next-intl';
import { tableHeaderFields } from './const';
import s from './table-header.module.scss';

export const TableHeader = () => {
  const t = useTranslations();

  return (
    <div className={s.tableHeader}>
      {tableHeaderFields.map((f, i) => (
        <div key={`table_header_item_${f}_${i}`} className={s.tableHeaderItem}>
          {t(f)}
        </div>
      ))}
    </div>
  );
};
