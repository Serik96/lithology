'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { routes } from '@/const';
import { EButtonVariant } from '@/enums';
import { ArrowSquareLeftIcon } from '@/icons';
import { confirmBreadcrumbs } from './const';
import s from './done.module.scss';

const Done = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={confirmBreadcrumbs} />
      <div className={s.doneChangePassword}>
        <h1 className={s.heading}>{t('change-password.done.main')}</h1>
        <section className={s.doneSection}>
          <div className={s.information}>
            <p className={s.description}>{t('change-password.done.use-new')}</p>
            <Button href={routes.auth.signIn} variant={EButtonVariant.back}>
              <ArrowSquareLeftIcon />
              {t('change-password.done.back')}
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
    </>
  );
};

export default Done;
