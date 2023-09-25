import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Breadcrumbs, Button } from '@/components/ui';
import { currencySigns } from '@/const';
import { tempData } from '@/const/tmp-data';
import { ECurrencySign } from '@/enums';
import { ArrowSquareRightIcon } from '@/icons';
import { navSubscription } from './const';
import s from './subscription.module.scss';

const Subscription = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={navSubscription} />
      <div className={s.subscription}>
        <h1 className={s.heading}>{t('subscription.title')}</h1>
        <div className={s.offers}>
          <div className={s.card}>
            <Image width={48} height={48} alt={t('icons.line')} src="/icons/flash.svg" />
            <p className={s.description}>{t('subscription.offers.free-projects')}</p>
          </div>
          <div className={s.card}>
            <Image
              width={48}
              height={48}
              alt={t('icons.line')}
              src="/icons/discount.svg"
            />
            <p className={s.description}>{t('subscription.offers.money-back')}</p>
          </div>
        </div>
        <ul className={s.pricePlanList}>
          {tempData.pricePlans.map(e => (
            <li className={s.card} key={e.id}>
              <p className={s.slug}>{e.slug}</p>
              <h2 className={s.title}>{e.title}</h2>
              <p className={s.content}>{e.content}</p>
              <Button>
                {t('subscription.buy')} {currencySigns[ECurrencySign.usd]}
                {e.price}
                <ArrowSquareRightIcon />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Subscription;
