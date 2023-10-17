import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { EButtonVariant } from '@/enums';
import { ArrowLeftIcon } from '@/icons';
import { TBreadcrumbs } from '@/types';
import s from './breadcrumbs.module.scss';

type TProps = {
  navLinks: TBreadcrumbs[];
};

export const Breadcrumbs = ({ navLinks }: TProps) => {
  const t = useTranslations();
  const backLink = navLinks[navLinks.length - 2].href;

  return (
    <nav className={s.breadcrumbs}>
      <Button href={backLink} variant={EButtonVariant.outlined}>
        <ArrowLeftIcon />
        {t('navigation.back')}
      </Button>
      <ul className={s.list}>
        {navLinks.map((e, i) => (
          <li className={s.listItem} key={`breadcrumbs-link_${e.href}_${i}`}>
            <Link href={e.href} className={s.listLink}>
              {t(e.label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
