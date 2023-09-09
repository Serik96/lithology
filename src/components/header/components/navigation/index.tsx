import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navLinks } from '@/const/navigation';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {navLinks.map(e => (
          <li key={`header__list-item_${e.href}`}>
            <Link href={e.href} className="header__list-link">
              <Image className={'icon'} alt={'icon'} {...e.icon} />
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
