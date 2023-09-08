import '@/components/header/header.scss';
import Link from 'next/link';

import Avatar from '@/components/header/components/avatar';
import Navigation from '@/components/header/components/navigation';
import { NOTIFICATION_URL } from '@/const/routes';
import { tempData } from '@/const/tmp-data';
import { NotificationIcon } from '@/icons';

const Header = () => {
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
          {`${tempData.notifications.count} notification${
            tempData.notifications.count > 1 ? 's' : ''
          }`}
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
