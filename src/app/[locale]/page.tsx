import { useTranslations } from 'next-intl';
import s from './main.module.scss';
import Image from 'next/image';

const Main = () => {
  const t = useTranslations();

  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <h1 className={s.heading}>{t('main.title')}</h1>
        <p className={s.description}>{t('main.description')}</p>
        <Image
          className={s.playImg}
          width={220}
          height={220}
          alt={t('main.play-img-label')}
          src="/icons/play.svg"
        />
      </div>
    </div>
  );
};

export default Main;
