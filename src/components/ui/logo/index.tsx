import './logo.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="logo">
      <Image width={122} height={31} alt={'Litholog logo'} src="/img/logo.svg" />
    </Link>
  );
};
