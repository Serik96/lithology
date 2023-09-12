import './header.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { NOTIFICATION_URL } from '@/const/routes';
import { tempData } from '@/const/tmp-data';
import { NotificationIcon } from '@/icons';
import Avatar from './avatar';
import Navigation from './navigation';

const Header = () => {
  const t = useTranslations();

  return (
    <header className="header">
      <div className="header__wrapper">
        <Avatar
          avatar={tempData.avatar.img}
          folderImg={tempData.avatar.folderImg}
          name={tempData.avatar.name}
        />
        <Link className="header__notification" href={NOTIFICATION_URL}>
          <NotificationIcon />
          {t('notifications.title', { count: tempData.notifications.count })}
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
