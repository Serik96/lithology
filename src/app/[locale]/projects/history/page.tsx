'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SeacrhType } from '@/components/ui/search-input';
import { TUser } from '@/types';
import { historyBreadcrumbs } from './const';
import s from './history.module.scss';

const Created = () => {
  const t = useTranslations();
  const [data, setData] = useState<TUser[]>();

  const getUsers = () => {
    setData(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={historyBreadcrumbs} />
      <div className={s.historyProject}>
        <div className={s.wrapper}>
          <h1 className={s.heading}>{t('projects.history-report')} 15</h1>
          <SeacrhType></SeacrhType>
        </div>
      </div>
    </>
  );
};

export default Created;
