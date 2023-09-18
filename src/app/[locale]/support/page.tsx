'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@/components/ui';
import { ArrowSquareRight } from '@/icons';
import s from './support.module.scss';

const Support = () => {
  const t = useTranslations();

  return (
    <>
      <div className={s.support}>
        <div className={s.form}>
          <h1 className={s.heading}>{t('navigation.support')}</h1>
          <div className={s.formBody}>
            <div className={s.formFields}>
              <TextField label={t('support.name')} placeholder={t('support.name')} />
              <TextField label={t('auth.email')} placeholder={t('auth.email')} />
            </div>
            <TextField
              className={s.textArea}
              label={t('support.description')}
              type="textarea"
            />
            <Button className={s.formBtn}>
              {t('support.send')}
              <ArrowSquareRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
