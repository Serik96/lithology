'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { cn } from '@/helpers';
import { BookIcon, ProfileIcon } from '@/icons';
import { TUser } from '@/types';
import StatisticItem from './statistic-item/insex';
import s from './user-information.module.scss';

type TProps = {
  user: TUser;
};

const UserInformation = ({ user: { avatar, first_name, last_name } }: TProps) => {
  const t = useTranslations();

  return (
    <div className={s.userLine}>
      {avatar ? (
        <Image
          className={s.avatar}
          src={avatar}
          alt={`${first_name} ${last_name} profile image`}
          width={110}
          height={110}
        />
      ) : (
        // @todo: переделать отображение, если понадобится
        <div className={cn(s.avatar, s.withoutImage)}>
          <ProfileIcon />
        </div>
      )}

      <div className={s.information}>
        <h1 className={s.name}>{`${first_name} ${last_name.at(0)}.`}</h1>
        {/* @todo: убрать хардкод, во время подключения к беку */}
        <div className={s.statistics}>
          <StatisticItem Icon={BookIcon} label={'Viewer/Editor'} />
          <StatisticItem Icon={BookIcon} label={t('user.projects', { projects: 3 })} />
          <StatisticItem Icon={BookIcon} label={t('user.reports', { reports: 24 })} />
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
