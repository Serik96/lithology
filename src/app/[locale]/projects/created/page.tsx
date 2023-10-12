'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ArrowSquareRightIcon } from '@/icons';
import { createdBreadcrumbs } from './const';
import s from './created.module.scss';

const Created = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={createdBreadcrumbs} />
      <div className={s.createdProject}>
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
