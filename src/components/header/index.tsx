import './header.scss';
import { HeaderUnsigned } from '@/components/header/header-unsigned';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <HeaderUnsigned />
      </div>
    </header>
  );
};

export default Header;
