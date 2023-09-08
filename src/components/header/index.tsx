import '@/components/header/header.css';
import Link from 'next/link';

import NotificationIcon from '@/icons/NotificationIcon';
import Avatar from '@/components/header/components/Avatar';
import Navigation from '@/components/header/components/Navigation';

const Header = () => {
  const count = 7;

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Avatar
          avatar={'/img/avatar.png'}
          folderImg={'/img/folderImage.png'}
          name={'Anastasya L.'}
        />
        <Link className='header__notification' href='/notifications'>
          <NotificationIcon />
          {`${count} notifications`}
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
