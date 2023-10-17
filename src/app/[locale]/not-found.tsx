'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { Button } from '@/components/ui';
import { routes } from '@/const';
import { EButtonVariant } from '@/enums';
import { ArrowCircleLeftIcon } from '@/icons';
import s from './not-found.module.scss';

const NotFound = () => {
  const t = useTranslations();

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.classList.add('not-found-page');
    }
  }, []);

  return (
    <div className={s.notFound}>
      <Image
        width={1920}
        height={1080}
        className={s.bg}
        src="/img/not-found-bg.svg"
        alt={t('not-found.heading')}
      />
      <div className={s.wrapper}>
        <Image
          src="/img/stickers/not-found.png"
          width={329}
          height={254}
          alt={t('not-found.heading')}
        />
        <div className={s.titleWrapper}>
          <h1 className={s.heading}>{t('not-found.404')}</h1>
          <p className={s.description}>{t('not-found.heading')}</p>
          <Button variant={EButtonVariant.SECONDARY} href={routes.public.main}>
            <ArrowCircleLeftIcon />
            {t('not-found.back')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
