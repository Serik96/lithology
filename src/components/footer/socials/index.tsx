import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { mediaLinks } from './const';
import s from './socials.module.scss';

export const Socials = () => {
  const t = useTranslations();

  return (
    <div className={s.socials}>
      <ul className={s.list}>
        {mediaLinks.map((e, i) => (
          <li key={`footer__social-link_${e.href}_${i}`}>
            <Link href={e.href} target="_blank" className={s.link}>
              <Image width={31} height={31} alt={t(e.alt)} src={e.img} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
