import { useTranslations } from 'next-intl';
import { TAdvantage } from '@/types';
import s from './advantage-item.module.scss';

type TProps = {
  item: TAdvantage;
};

const AdvantageItem = ({ item: { Icon, label } }: TProps) => {
  const t = useTranslations();

  return (
    <li className={s.advantageItem}>
      <Icon />
      <p className={s.label}>{t(label)}</p>
    </li>
  );
};

export default AdvantageItem;
