import Link from 'next/link';
import React from 'react';
import { navLinks } from '@/components/header/navigation/const';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {navLinks.map(e => {
          const Icon = e.icon;

          return (
            <li key={`header__list-item_${e.href}`}>
              <Link href={e.href} className="header__list-link">
                <Icon />
                {e.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
