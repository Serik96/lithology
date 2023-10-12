'use client';

import { useTranslations } from 'next-intl';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { historyBreadcrumbs } from './const';
import s from './history.module.scss';

const Created = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={historyBreadcrumbs} />
      <div className={s.historyProject}>
        <div className={s.wrapper}>
          <h1 className={s.heading}>{t('projects.history-report')}</h1>
        </div>
      </div>
    </>
  );
};

export default Created;
