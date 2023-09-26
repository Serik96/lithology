import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import { navLinks, unsignedNavLinks } from '@/components/header/navigation/const';
import { cn } from '@/helpers';
import s from './navigation.module.scss';

type TProps = {
  isUnsigned?: boolean;
};

export const Navigation = ({ isUnsigned = false }: TProps) => {
  const links = isUnsigned ? unsignedNavLinks : navLinks;
  const t = useTranslations();

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {links.map(e => {
          const Icon = e.icon;

          return (
            <li key={`header__list-item_${e.href}`}>
              <Link
                href={e.href}
                className={cn(s.link, e.isActive && s.active, !e.label && s.onlyIcon)}
              >
                {Icon && <Icon />}
                {e.label && t(e.label)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
