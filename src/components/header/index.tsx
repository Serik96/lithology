import { HeaderUnsigned } from '@/components/header/header-unsigned';
import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <HeaderUnsigned />
      </div>
    </header>
  );
};

export default Header;
