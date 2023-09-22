'use client';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { routes } from '@/const';
import { ArrowCircleLeft } from '@/icons';
import s from './not-found.module.scss';

const NotFound = () => {
  return (
    <div className={s.notFound}>
      <Image
        width={1920}
        height={1080}
        className={s.bg}
        src="/img/not-found-bg.svg"
        alt="background"
      />
      <div className={s.wrapper}>
        <Image
          src="/img/stickers/not-found.png"
          width={329}
          height={254}
          alt="not found"
        />
        <div className={s.titleWrapper}>
          <h1 className={s.heading}>404</h1>
          <p className={s.description}>Page not found</p>
          <Button variant="secondary" href={routes.public.main}>
            <ArrowCircleLeft />
            Return to home page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
