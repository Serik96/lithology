'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { navResetPassword } from '@/app/[locale]/reset-password/const';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Button, TextField } from '../../../components/ui';
import { ArrowSquareRight } from '../../../icons';
import s from './reset-password.module.scss';

const ResetPassword = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={navResetPassword} />
      <div className={s.resetPassword}>
        <form className={s.form}>
          <h1 className={s.heading}>{t('navigation.change-password')}</h1>
          <div className={s.formBody}>
            <div className={s.formFields}>
              <TextField label={t('auth.email')} placeholder={t('auth.email')} />
            </div>
            <Button>
              {t('navigation.change-password')}
              <ArrowSquareRight />
            </Button>
          </div>
        </form>
        <Image
          className={s.stickerImg}
          width={326}
          height={326}
          alt={t('litholog')}
          src='/img/stickers/man-sticker-1.gif'
        />
        <Image
          className={s.stickerBg}
          width={894}
          height={395}
          alt={t('litholog')}
          src='/img/stickers/sticker-bg-1.svg'
        />
      </div>
    </>
  );
};

export default ResetPassword;