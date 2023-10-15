'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { routes } from '@/const';
import { tempData } from '@/const/tmp-data';
import { formatDate } from '@/helpers';
import { ArrowSquareRightIcon } from '@/icons';
import { TPricePlan } from '@/types';
import { purchaseBreadcrumbs } from './const';
import s from './purchase.module.scss';

const Purchase = () => {
  const t = useTranslations();
  const [plan, setPlan] = useState<TPricePlan>();

  // @todo: тут будет функция с беком
  const getPlan = () => {
    setPlan(tempData.pricePlans[0]);
  };

  useEffect(() => {
    getPlan();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={purchaseBreadcrumbs} />
      {plan && (
        <div className={s.purchase}>
          <h1 className={s.heading}>
            {t('subscription-purchase.bought', { name: plan?.title })}
          </h1>
          <section className={s.subscriptionSection}>
            <div className={s.information}>
              <p className={s.description}>
                {/* @todo: поменять дату, когда будет бек */}
                {t('subscription-purchase.expires-at', { date: formatDate(Date()) })}
              </p>
              <Button href={routes.project.profile.main} className={s.backButton}>
                <ArrowSquareRightIcon />
                {t('subscription-purchase.back')}
              </Button>
            </div>
            <div className={s.sticker}>
              <Image
                className={s.stickerImg}
                width={221}
                height={226}
                alt={t('icons.sticker')}
                src="/img/stickers/mail-sticker.png"
              />

              <Image
                className={s.stickerLine}
                width={971}
                height={123}
                alt={t('icons.line')}
                src="/img/stickers/sticker-line.svg"
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Purchase;
