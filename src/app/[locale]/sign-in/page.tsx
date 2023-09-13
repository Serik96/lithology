'use client';
import './signin.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@/components/ui';
import { routes } from '@/const';

const SignIn = () => {
  const t = useTranslations();

  return (
    <div className="signin__wrapper">
      <form className="signin__form">
        <h1 className="signin__heading">{t('navigation.signin')}</h1>
        <div className="signin__form-fields">
          <TextField label={t('auth.email')} placeholder={t('auth.email')} />
          <TextField
            type="password"
            label={t('auth.password')}
            placeholder={t('auth.password')}
          />
        </div>
        <Button className="signin__btn">{t('navigation.signin')}</Button>
      </form>
      <div className="signin__register">
        {t('auth.questionForReg')}
        <Link className={'link_active'} href={routes.project.register}>
          {t('navigation.register')}
        </Link>
      </div>
      <Link href={routes.project.reset_pswd} className="signin__forgot link_active">
        {t('auth.forgotPswd')}
      </Link>
    </div>
  );
};

export default SignIn;
