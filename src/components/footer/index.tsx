import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Socials } from '@/components/footer/socials';
import { config } from '@/config';
import { cleanPhone, isPageWithFooter } from '@/helpers';
import s from './footer.module.scss';

export const Footer = () => {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const footerNeeded = isPageWithFooter(pathname);

  return (
    footerNeeded && (
      <footer className={s.footer}>
        <div className={s.top}>
          <div className={s.heading}>
            {t('heading')}
            <Image
              src="/temp/triangle.svg"
              alt=" triangle icon"
              width={40}
              height={38}
              className={s.headingIcon}
            />
          </div>
        </div>
        <div className={s.bot}>
          <div>{t('privacy')}</div>
          <div className={s.contact}>
            <Link href={`mailto:${config.footer.email}`}>{config.footer.email}</Link>
            <Link href={`tel:${cleanPhone(config.footer.phone, '+')}`}>
              {config.footer.phone}
            </Link>
          </div>
          <div className={s.terms}>
            <Link href="#" className="link_active">
              {t('terms-of-use')}
            </Link>
            <Link href="#" className="link_active">
              {t('privacy-policy')}
            </Link>
          </div>
          <Socials />
        </div>
      </footer>
    )
  );
};
