import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Socials from '@/components/footer/socials/socials';
import { config } from '@/config';
import { cleanPhone } from '@/helpers/phone-helper';
import s from './footer.module.scss';

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className={s.footer}>
      <div className={s.footer__top}>
        <div className={s.footer__heading}>
          {t('heading')}
          <Image
            src={'/temp/triangle.svg'}
            alt={'triangle icon'}
            width={40}
            height={38}
            className={s.footer__heading_icon}
          />
        </div>
      </div>
      <div className={s.footer__bot}>
        <div className={s.footer__privacy}>{t('footer.privacy')}</div>
        <div className={s.footer__contact}>
          <Link href={`mailto:${config.footer.email}`}>{config.footer.email}</Link>
          <Link href={`tel:${cleanPhone(config.footer.phone, '+')}`}>
            {config.footer.phone}
          </Link>
        </div>
        <Socials />
      </div>
    </footer>
  );
};
export default Footer;
