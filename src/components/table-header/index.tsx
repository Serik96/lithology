import { useTranslations } from 'next-intl';
import { tableHeaderFields } from './const';
import s from './table-header.module.scss';

export const TableHeader = () => {
  const t = useTranslations();

  return (
    <div className={s.tableHeader}>
      {tableHeaderFields.map((e, i) => (
        <div key={`table_header_item_${e}_${i}`} className={s.tableHeaderItem}>
          {t(e)}
        </div>
      ))}
    </div>
  );
};
