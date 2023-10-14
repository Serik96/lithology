import { TPricePlan } from '@/types';
import PlanItem from './item';
import s from './plans.module.scss';

type TProps = {
  plans: TPricePlan[];
};

const PlansList = ({ plans }: TProps) => (
  <ul className={s.plansContainer}>
    {plans.map((p, i) => (
      <PlanItem key={`plan_${i}`} plan={p} />
    ))}
  </ul>
);

export default PlansList;
