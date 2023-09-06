import './footer.css';
import Image from 'next/image';
import Link from 'next/link';

import Socials from '@/components/Footer/components/Socials';
import { config } from '@/config';
import { cleanPhone } from '@/helpers/phone-helper';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__heading">
          Let&apos;s go over the details
          <Image
            src={'/img/triangle.svg'}
            alt={'triangle icon'}
            width={40}
            height={38}
            className="footer__heading-icon"
          />
        </div>
      </div>
      <div className="footer__bot">
        <div className="footer__privacy">© Drone. All Rights Reserved 2023.</div>
        <div className="footer__contact">
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
