import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/helpers';
import { TSidebarLink } from '@/types';
import s from './sidebar.module.scss';

type TProps = {
  links: TSidebarLink[];
  onClick?: (value: string) => void;
};

export const Sidebar = ({ links, onClick }: TProps) => {
  const t = useTranslations();

  return (
    <nav className={s.sidebar}>
      <ul className={s.list}>
        {links.map(({ Icon, href, isBottomLink, label, type }, i) => {
          return (
            <li
              key={`sidebar__link_${href}_${i}`}
              className={cn(s.listItem, isBottomLink && s.listItemActive)}
            >
              {type ? (
                <div
                  onClick={() => onClick?.(type)}
                  className={cn(s.link, isBottomLink && 'link_active')}
                >
                  <Icon />
                  {t(label)}
                </div>
              ) : (
                <Link href={href} className={cn(s.link, isBottomLink && 'link_active')}>
                  <Icon />
                  {t(label)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
