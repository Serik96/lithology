import '@/components/header/header.scss';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'use-intl';
import Avatar from '@/components/header/components/avatar';
import Navigation from '@/components/header/components/navigation';
import { NOTIFICATION_URL } from '@/const/routes';
import { tempData } from '@/const/tmp-data';
import { digitCase } from '@/helpers';
import { NotificationIcon } from '@/icons';

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
          <Image className={'icon'} alt={t('icons.notification')} {...NotificationIcon} />
          {`${tempData.notifications.count} ${digitCase(
            t('notifications.notification'),
            tempData.notifications.count,
          )}`}
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
