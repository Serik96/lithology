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
      <div className={s.confirmChangeEmail}>
        <div className={s.wrapper}>
          <h1 className={s.heading}>{t('change-email.confirm.main')}</h1>
          <p className={s.description}>{t('change-email.confirm.sent')}</p>
          <Button href={routes.auth.signIn} variant={EButtonVariant.BACK}>
            <ArrowSquareLeftIcon />
            {t('change-email.confirm.back')}
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
