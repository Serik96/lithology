import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import { navLinks, unsignedNavLinks } from '@/components/header/navigation/const';
import s from './navigation.module.scss';

type TProps = {
  isUnsigned?: boolean;
};

const Navigation = ({ isUnsigned = false }: TProps) => {
  const links = isUnsigned ? unsignedNavLinks : navLinks;
  const t = useTranslations();

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {links.map(e => {
          const Icon = e.icon;

          return (
            <li key={`header__list-item_${e.href}`}>
              <Link href={e.href} className={s.link}>
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
