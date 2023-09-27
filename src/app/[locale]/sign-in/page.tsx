'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { routes } from '@/const';
import { cn, getFormValue } from '@/helpers';
import { ArrowSquareRightIcon } from '@/icons';
import { AuthModel } from '@/model';
import { TAuthLoginAction } from '@/model/auth/types';
import { navSignIn } from './const';
import s from './sign-in.module.scss';

const SignIn = () => {
  const t = useTranslations();
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(AuthModel.store.selectors.isAuthenticated);
  const isPending = useSelector(AuthModel.store.selectors.isPending);
  // @todo проверять get-параметр back, если он задан, то после логина редиректить на него
  // если не задан, то оставляем редирект на главную
  const redirectUrl = '/';

  useEffect(() => {
    if (isAuthenticated) {
      void router.push(redirectUrl);
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isPending) {
      return;
    }

    const data: TAuthLoginAction = {
      login: getFormValue('email', e),
      password: getFormValue('password', e),
    };

    dispatch(AuthModel.store.actions.login.trigger(data));
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
          <Button className={s.btn} disabled={isPending}>
            {t('navigation.sign-in')}
            <ArrowSquareRightIcon />
          </Button>
          {/* @todo isPending && <Loader /> */}

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
