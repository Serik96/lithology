import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { ArrowLeft } from '@/icons';
import { TBreadcrumbs } from '@/types';
import s from './breadcrumbs.module.scss';

type TProps = {
  navLinks: TBreadcrumbs[];
};

const Breadcrumbs = ({ navLinks }: TProps) => {
  const t = useTranslations();
  const backLink = navLinks[navLinks.length - 2].href;

  return (
    <nav className={s.breadcrumbs}>
      <Button href={backLink} variant={'outlined'}>
        <ArrowLeft />
        {t('navigation.back')}
      </Button>
      <ul className={s.list}>
        {navLinks.map((e, i) => {
          return (
            <li className={s.listItem} key={`breadcrumbs-link_${e.href}_${i}`}>
              <Link href={e.href} className={s.listLink}>
                {t(e.label)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
