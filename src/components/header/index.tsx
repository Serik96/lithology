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
  const endings = {
    s1: t('notifications.endings.s1'),
    s2: t('notifications.endings.s2'),
    s3: t('notifications.endings.s3'),
  };

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
          {`${tempData.notifications.count} ${
            t('notifications.notification') +
            digitCase(
              tempData.notifications.count,
              endings.s1,
              endings.s2,
              endings.s3,
              true, 
            )
          }`}
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
