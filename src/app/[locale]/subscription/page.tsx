'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { AdvantagesList } from '@/components/advantages-list';
import { PlansList } from '@/components/plans-list';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { TPricePlan } from '@/types';
import { subscriptionAdvantages, subscriptionBreadcrumbs } from './const';
import s from './subscription.module.scss';

const Subscription = () => {
  const t = useTranslations();
  const [plans, setPlans] = useState<TPricePlan[]>();

  /* todo: тут будет функция с подключенным бэком  */
  const getPlans = () => {
    setPlans(tempData.pricePlans);
  };

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={subscriptionBreadcrumbs} />
      <div className={s.subscriptionContainer}>
        <h1 className={s.heading}>{t('navigation.subscription.main')}</h1>
        <AdvantagesList advantages={subscriptionAdvantages} />
        {plans && <PlansList plans={plans} />}
      </div>
    </>
  );
};

export default Subscription;
