import { FC } from 'react';
import s from './stats-item.module.scss';

type TProps = {
  Icon: FC;
  label: string;
};

const StatsItem = ({ Icon, label }: TProps) => (
  <div className={s.statsItem}>
    <Icon />
    <p className={s.label}>{label}</p>
  </div>
);

export default StatsItem;
