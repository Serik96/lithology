'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { routes } from '@/const';
import { cn } from '@/helpers';
import { ArrowSquareRightIcon } from '@/icons';
import { registrationBreadcrumbs } from './const';
import s from './registration.module.scss';

const Registration = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={registrationBreadcrumbs} />
      <div className={s.signUp}>
        <form className={s.form}>
          <h1 className={s.heading}>{t('navigation.registration')}</h1>
          <div className={s.formFields}>
            <TextField label={t('auth.email')} placeholder={t('auth.email')} />
            <TextField
              type="password"
              label={t('auth.password')}
              placeholder={t('auth.password')}
            />
          </div>
          <Button className={s.btn}>
            {t('auth.sign-up')} <ArrowSquareRightIcon />
          </Button>

          <div className={s.signIn}>
            {t('auth.has-account')}
            &nbsp;
            <Link className={cn(s.reset, 'link_active')} href={routes.auth.signIn}>
              {t('navigation.sign-in')}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
