import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Socials from '@/components/footer/socials';
import { config } from '@/config';
import { isPageWithoutFooter } from '@/helpers';
import { cleanPhone } from '@/helpers/phone-helper';
import s from './footer.module.scss';

const Footer = () => {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const isHidden = isPageWithoutFooter(pathname);

  if (isHidden) {
    return <></>;
  }

  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div className={s.heading}>
          {t('heading')}
          <Image
            src={'/temp/triangle.svg'}
            alt={'triangle icon'}
            width={40}
            height={38}
            className={s.headingIcon}
          />
        </div>
      </div>
      <div className={s.bot}>
        <div className={s.privacy}>{t('privacy')}</div>
        <div className={s.contact}>
          <Link href={`mailto:${config.footer.email}`}>{config.footer.email}</Link>
          <Link href={`tel:${cleanPhone(config.footer.phone, '+')}`}>
            {config.footer.phone}
          </Link>
        </div>
        <div className={s.terms}>
          <Link href={'#'} className="link_active">
            {t('terms-of-use')}
          </Link>
          <Link href={'#'} className="link_active">
            {t('privacy-policy')}
          </Link>
        </div>
        <Socials />
      </div>
    </footer>
  );
};
export default Footer;
