import Image from 'next/image';
import Link from 'next/link';
import { config } from '@/config';
import s from './socials.module.scss';

const Socials = () => {
  return (
    <div className={s.socials}>
      <ul className={s.list}>
        {config.footer.mediaLinks.map((e, i) => (
          <li key={`footer__social-link_${e.href}_${i}`}>
            <Link href={e.href} target={'_blank'} className={s.link}>
              <Image width={31} height={31} alt="icon" src={e.img} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
