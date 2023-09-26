'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { routes } from '@/const';
import { cn, getFormValue } from '@/helpers';
import { ArrowSquareRightIcon } from '@/icons';
import { login } from '@/store/reducers/auth';
import { navSignIn } from './const';
import s from './sign-in.module.scss';

const SignIn = () => {
  const t = useTranslations();
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = getFormValue('email', e);
    const password = getFormValue('password', e);
    const data = {
      login: email,
      password,
    };

    dispatch(login(data));
  };

  return (
    <>
      <Breadcrumbs navLinks={navSignIn} />
      <div className={s.signIn}>
        <form className={s.form} onSubmit={handleSubmit}>
          <h1 className={s.heading}>{t('navigation.sign-in')}</h1>
          <div className={s.formFields}>
            <TextField
              name="email"
              label={t('auth.email')}
              placeholder={t('auth.email')}
            />
            <TextField
              name="password"
              type="password"
              label={t('auth.password')}
              placeholder={t('auth.password')}
            />
          </div>
          <Button className={s.btn}>
            {t('navigation.sign-in')}
            <ArrowSquareRightIcon />
          </Button>

          <div className={s.registration}>
            {t('auth.sign-in.question-for-reg')}
            &nbsp;
            <Link className={cn(s.reset, 'link_active')} href={routes.auth.registration}>
              {t('navigation.registration')}
            </Link>
          </div>
          <Link
            href={routes.auth.resetPassword.main}
            className={cn(s.resetPassword, 'link_active')}
          >
            {t('auth.sign-in.forgot-password')}
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
