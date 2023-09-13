import Image from 'next/image';
import Link from 'next/link';
import s from './logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/" className={s.logo}>
      <Image width={122} height={31} alt={'Litholog logo'} src="/img/logo.svg" />
    </Link>
  );
};
