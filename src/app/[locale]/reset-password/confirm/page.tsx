'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { routes } from '@/const';
import { EButtonVariant } from '@/enums';
import { ArrowSquareLeftIcon } from '@/icons';
import s from './confirm.module.scss';
import { confirmBreadcrumbs } from './const';

const Confirm = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={confirmBreadcrumbs} />
      <div className={s.confirmEmail}>
        <div className={s.wrapper}>
          <h1 className={s.heading}>{t('reset-page-heading')}</h1>
          <p className={s.description}>{t('email-sent')}</p>
          <Button href={routes.auth.signIn} variant={EButtonVariant.BACK}>
            <ArrowSquareLeftIcon />
            {t('back-to-sign-in')}
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

export default Confirm;
