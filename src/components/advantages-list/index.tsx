import { TAdvantage } from '@/types';
import s from './advantages.module.scss';
import AdvantageItem from './item';

type TProps = {
  advantages: TAdvantage[];
};

const AdvantagesList = ({ advantages }: TProps) => (
  <ul className={s.advantagesWrapper}>
    {advantages.map((a, i) => (
      <AdvantageItem key={`advantage_${i}`} item={a} />
    ))}
  </ul>
);

export default AdvantagesList;
