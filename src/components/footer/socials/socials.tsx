import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { config } from '@/config';
import s from './socials.module.scss';

const Socials = () => {
  const t = useTranslations();
  return (
    <div className={s.footer__social_wrapper}>
      <ul className={s.footer__social_list}>
        <li>{t('footer.check-socials')}</li>
        {config.footer.mediaLinks.map((e, i) => (
          <li key={`footer__social-link_${e.href}_${i}`}>
            <Link href={e.href} target={'_blank'} className={s.footer__social_link}>
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
