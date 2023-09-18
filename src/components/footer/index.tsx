import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Socials from '@/components/footer/socials';
import { config } from '@/config';
import { cleanPhone } from '@/helpers/phone-helper';
import s from './footer.module.scss';

const Footer = () => {
  const t = useTranslations('footer');

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
          <Link href={'#'}>{t('terms-of-use')}</Link>
          <Link href={'#'}>{t('privacy-policy')}</Link>
        </div>
        <Socials />
      </div>
    </footer>
  );
};
export default Footer;
