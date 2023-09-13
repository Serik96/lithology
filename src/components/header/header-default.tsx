import './header.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { routes } from '@/const/routes';
import { tempData } from '@/const/tmp-data';
import { NotificationIcon } from '@/icons';
import Avatar from './avatar';
import Navigation from './navigation';

export const HeaderDefault = () => {
  const t = useTranslations();

  return (
    <>
      <Avatar
        avatar={tempData.avatar.img}
        folderImg={tempData.avatar.folderImg}
        name={tempData.avatar.name}
      />
      <Link className="header__notification" href={routes.project.notifications}>
        <NotificationIcon />
        {t('notifications.title', { count: tempData.notifications.count })}
      </Link>
      <Navigation />
    </>
  );
};
