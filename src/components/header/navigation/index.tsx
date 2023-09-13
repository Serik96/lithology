import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import { navLinks, unsignedNavLinks } from '@/components/header/navigation/const';
import s from './navigation.module.scss';

type TProps = {
  isUnsignedNav?: boolean;
};

const Navigation = ({ isUnsignedNav = false }: TProps) => {
  const links = isUnsignedNav ? unsignedNavLinks : navLinks;
  const t = useTranslations();

  return (
    <nav className={s.header__nav}>
      <ul className={s.header__list}>
        {links.map(e => {
          const Icon = e.icon;

          return (
            <li key={`header__list-item_${e.href}`}>
              <Link href={e.href} className={s.header__list_link}>
                {Icon && <Icon />}
                {t(e.label)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
