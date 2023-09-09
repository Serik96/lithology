import Link from 'next/link';
import { useTranslations } from 'use-intl';
import { config } from '@/config';

const Socials = () => {
  const t = useTranslations();

  return (
    <div className="footer__social-wrapper">
      <ul className="footer__social-list">
        <li>{t('footer.check-socials')}</li>
        {config.footer.mediaLinks.map((e, i) => (
          <li key={`footer__social-link_${e.href}_${i}`}>
            <Link href={e.href} target={'_blank'} className="footer__social-link">
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
