'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { sortInitialValue } from '@/app/[locale]/projects/history/const';
import { NotificationList } from '@/components/notification-list';
import { TextField } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { tempData } from '@/const/tmp-data';
import { ESortDirection } from '@/enums';
import { cn } from '@/helpers';
import { DropIcon, SearchIcon } from '@/icons';
import { TNotification } from '@/types';
import { historyBreadcrumbs } from './const';
import s from './history.module.scss';

const Created = () => {
  const t = useTranslations();
  const [filters, setFilters] = useState(sortInitialValue);
  const [notifications, setNotifications] = useState<TNotification[]>();

  /* todo: тут будет функция с подключенным бэком  */
  const getNotifications = () => {
    setNotifications(tempData.notificationList);
  };

  /* todo: тут будет функция с подключенным бэком  */
  useEffect(() => {
    getNotifications();
  }, []);

  const handleChangeFilter = (name: string) => {
    setFilters(prevState => {
      const arr = [...prevState];
      const index = arr.findIndex(e => e.name === name);
      if (typeof index !== 'undefined') {
        arr[index] = {
          ...arr[index],
          direction:
            arr[index].direction === ESortDirection.ASC
              ? ESortDirection.DESC
              : ESortDirection.ASC,
        };
      }

      return arr;
    });
  };
  return (
    <>
      <Breadcrumbs navLinks={historyBreadcrumbs} />
      <div className={s.historyWrapper}>
        <form className={s.form}>
          <TextField Icon={SearchIcon} placeholder={t('search')} />
        </form>
        <div className={s.filters}>
          {filters.map((e, i) => (
            <div
              key={`sort_by_filter_${i}`}
              className={s.filter}
              onClick={() => handleChangeFilter(e.name)}
            >
              {t(e.label)}
              <div
                className={cn(
                  s.filterIcon,
                  filters[i].direction === ESortDirection.DESC && s.reversed,
                )}
              >
                <DropIcon />
              </div>
            </div>
          ))}
        </div>
        {notifications && notifications.length > 0 && (
          <NotificationList notifications={notifications} />
        )}
      </div>
    </>
  );
};

export default Created;
