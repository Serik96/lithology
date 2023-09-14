'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@/components/ui';
import { routes } from '@/const';
import { cn } from '@/helpers';
import s from './sign-in.module.scss';

const SignIn = () => {
  const t = useTranslations();

  return (
    <div className={s.signIn}>
      <form className={s.form}>
        <h1 className={s.heading}>{t('navigation.sign-in')}</h1>
        <div className={s.formFields}>
          <TextField label={t('auth.email')} placeholder={t('auth.email')} />
          <TextField
            type="password"
            label={t('auth.password')}
            placeholder={t('auth.password')}
          />
        </div>
        <Button className={s.btn}>{t('navigation.sign-in')}</Button>

        <div className={s.register}>
          {t('auth.sign-in.question-for-reg')}
          &nbsp;
          <Link className={cn(s.reset, 'link_active')} href={routes.project.register}>
            {t('navigation.register')}
          </Link>
        </div>
        <Link
          href={routes.project.reset_password}
          className={cn(s.resetPassword, 'link_active')}
        >
          {t('auth.sign-in.forgot-password')}
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
