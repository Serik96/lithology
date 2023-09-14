import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { routes } from '@/const/routes';
import { NotificationIcon } from '@/icons';
import { TUser } from '@/types';
import Avatar from './avatar';
import s from './header.module.scss';
import Navigation from './navigation';

type TProps = {
  user: TUser;
  folderImg: string;
  notificationCount: number;
};

export const HeaderDefault = ({ user, folderImg, notificationCount }: TProps) => {
  const t = useTranslations();

  return (
    <>
      <Avatar avatar={user.avatar} folderImg={folderImg} name={user.first_name} />
      <Link className={s.notification} href={routes.project.notifications}>
        <NotificationIcon />
        {t('notifications.title', { count: notificationCount })}
      </Link>
      <Navigation />
    </>
  );
};
