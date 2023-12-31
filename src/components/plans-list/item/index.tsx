import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { currencySigns } from '@/const';
import { EButtonVariant, ECurrencySign } from '@/enums';
import { cn, separateThousands } from '@/helpers';
import { ArrowSquareRightIcon } from '@/icons';
import { TPricePlan } from '@/types';
import s from './plan-item.module.scss';

type TProps = {
  plan: TPricePlan;
};

const PlanItem = ({ plan: { slug, title, content, price, top } }: TProps) => {
  const t = useTranslations();

  return (
    <li className={cn(s.planCard, top && s.active)}>
      <div className={s.content}>
        <h6 className={s.popular}>{slug}</h6>
        <h2 className={s.name}>{title}</h2>
        <p className={s.description}>{content}</p>
      </div>

      <Button variant={!top ? EButtonVariant.BORDERED : undefined}>
        {t('subscription.buy', {
          sign: currencySigns[ECurrencySign.usd],
          price: separateThousands(price, ','),
        })}
        <ArrowSquareRightIcon />
      </Button>
    </li>
  );
};

export default PlanItem;
