'use client';
import { useTranslations } from 'next-intl';
import { PlayIcon } from '@/icons';
import s from './main.module.scss';

const Main = () => {
  const t = useTranslations();

  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <h1 className={s.heading}>{t('main.title')}</h1>
        <p className={s.description}>{t('main.description')}</p>
        <div className={s.playImg}>
          <PlayIcon />
        </div>
      </div>
    </div>
  );
};

export default Main;
