import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/helpers';
import { TSidebarLink } from '@/types';
import s from './sidebar.module.scss';

type TProps = {
  links: TSidebarLink[];
};

export const Sidebar = ({ links }: TProps) => {
  const t = useTranslations();

  return (
    <nav className={s.sidebar}>
      <ul className={s.list}>
        {links.map((e, i) => {
          const Icon = e.icon;

          return (
            <li
              key={`sidebar__link_${e.href}_${i}`}
              className={cn(s.listItem, e.isBottomLink && s.listItemActive)}
            >
              <Link href={e.href} className={cn(s.link, e.isBottomLink && 'link_active')}>
                <Icon />
                {t(e.label)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
