'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { routes } from '@/const';
import { tempData } from '@/const/tmp-data';
import { formatDate } from '@/helpers';
import { ArrowSquareRightIcon } from '@/icons';
import { navPurchase } from './const';
import s from './purchase.module.scss';

const Purchase = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={navPurchase} />
      <div className={s.purchase}>
        <div className={s.wrapper}>
          <h1 className={s.heading}>
            {`${t('you-bought-the')} ${tempData.pricePlans?.[0].title} ${t('tariff')}`}
          </h1>
          <p className={s.description}>
            {/* @todo: Date() must be replaced */}
            {`${t('subscription-expiration-date')} ${formatDate(Date())}`}
          </p>
          <Button href={routes.auth.signIn} className={s.btn}>
            <ArrowSquareRightIcon />
            {t('back-to-settings')}
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
      </div>
    </>
  );
};

export default Purchase;
