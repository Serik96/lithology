'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ArrowSquareRightIcon } from '@/icons';
import { resetPasswordBreadcrumbs } from './const';
import s from './reset-password.module.scss';

const ResetPassword = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={resetPasswordBreadcrumbs} />
      <div className={s.resetPassword}>
        <form className={s.form}>
          <h1 className={s.heading}>{t('navigation.reset-password')}</h1>
          <div className={s.formBody}>
            <div className={s.formFields}>
              <TextField label={t('auth.email')} placeholder={t('auth.email')} />
            </div>
            <Button>
              {t('reset-password.reset')}
              <ArrowSquareRightIcon />
            </Button>
          </div>
        </form>
        <div className={s.sticker}>
          <Image
            className={s.stickerImg}
            width={326}
            height={326}
            alt={t('icons.sticker')}
            src="/img/stickers/man-sticker-1.gif"
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

export default ResetPassword;
