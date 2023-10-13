import { FC } from 'react';
import s from './statistic.module.scss';

type TProps = {
  Icon: FC;
  label: string;
};

const StatisticItem = ({ Icon, label }: TProps) => {
  return (
    <div className={s.statisticItem}>
      <Icon />
      <p className={s.label}>{label}</p>
    </div>
  );
};

export default StatisticItem;
