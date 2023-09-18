import { useTranslations } from 'next-intl';

const Main = () => {
  const t = useTranslations('home');

  return <div>{t('title')}</div>;
};

export default Main;
