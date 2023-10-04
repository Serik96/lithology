import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ECardFilterType } from '@/enums';
import { cn } from '@/helpers';
import { TSidebarLink } from '@/types';
import s from './sidebar.module.scss';

type TProps = {
  links: TSidebarLink[];
  onClick?: (value?: ECardFilterType) => void;
};

export const Sidebar = ({ links, onClick }: TProps) => {
  const t = useTranslations();

  return (
    <nav className={s.sidebar}>
      <ul className={s.list}>
        {links.map(({ Icon, href, isBottom, label, type }, i) => (
          <li
            key={`sidebar__link_${i}`}
            className={cn(s.listItem, isBottom && s.listItemActive)}
          >
            {href ? (
              <Link
                href={href}
                onClick={() => onClick?.(type)}
                className={cn(s.link, isBottom && 'link_active')}
              >
                <Icon />
                {t(label)}
              </Link>
            ) : (
              <div
                onClick={() => onClick?.(type)}
                className={cn(s.link, isBottom && 'link_active')}
              >
                <Icon />
                {t(label)}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
