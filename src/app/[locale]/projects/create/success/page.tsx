'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ArrowSquareRightIcon } from '@/icons';
import { successBreadcrumbs } from './const';
import s from './success.module.scss';

const Created = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={successBreadcrumbs} />
      <div className={s.successProject}>
        <div className={s.wrapper}>
          <h1 className={s.heading}>{t('projects.folder-created')}</h1>
          <p className={s.description}>{t('projects.list-of-projects')}</p>
          <Button className={s.btn}>
            {t('projects.view-project')}
            <ArrowSquareRightIcon />
          </Button>
        </div>
        <div className={s.sticker}>
          <Image
            className={s.stickerImg}
            width={221}
            height={226}
            alt={t('icons.sticker')}
            src="/img/stickers/mail-sticker.png"
          />

          <Image
            className={s.stickerLine}
            width={971}
            height={123}
            alt={t('icons.line')}
            src="/img/stickers/sticker-line.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Created;
