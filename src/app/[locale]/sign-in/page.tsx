'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@/components/ui';
import { routes } from '@/const';
import s from './signin.module.scss';

const SignIn = () => {
  const t = useTranslations();

  return (
    <div className={s.signin__wrapper}>
      <form className={s.signin__form}>
        <h1 className={s.signin__heading}>{t('navigation.signin')}</h1>
        <div className={s.signin__form_fields}>
          <TextField label={t('auth.email')} placeholder={t('auth.email')} />
          <TextField
            type="password"
            label={t('auth.password')}
            placeholder={t('auth.password')}
          />
        </div>
        <Button className={s.signin__btn}>{t('navigation.signin')}</Button>

        <div className={s.signin__register}>
          {t('auth.questionForReg')}
          &nbsp;
          <Link
            className={[s.signin__reset, 'link_active'].join(' ')}
            href={routes.project.register}
          >
            {t('navigation.register')}
          </Link>
        </div>
        <Link
          href={routes.project.reset_pswd}
          className={[s.signin__reset_pswd, 'link_active'].join(' ')}
        >
          {t('auth.forgotPswd')}
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
