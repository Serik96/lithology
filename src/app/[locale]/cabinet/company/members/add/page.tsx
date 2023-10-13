'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Breadcrumbs, Button, TextField } from '@/components/ui';
import { ArrowSquareRightIcon } from '@/icons';
import { membersBreadcrumbs } from './const';
import s from './members.module.scss';

const Members = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={membersBreadcrumbs} />
      <div className={s.addMember}>
        <h1 className={s.heading}>{t('navigation.add-member')}</h1>
        <section className={s.addingSection}>
          <form className={s.form}>
            <div className={s.formBody}>
              <div className={s.formFields}>
                <TextField
                  label={t('add-member.email')}
                  placeholder={t('add-member.email')}
                />

                {/* @todo: переделать на селекты, когда появится дизайн раскрытого списка */}
                <TextField
                  label={t('add-member.role')}
                  placeholder={t('add-member.role')}
                />
                <TextField
                  label={t('add-member.rights')}
                  placeholder={t('add-member.rights')}
                />
              </div>
              <Button>
                {t('add-member.invite')}
                <ArrowSquareRightIcon />
              </Button>
            </div>
          </form>
          <div className={s.sticker}>
            <Image
              className={s.stickerImg}
              width={326}
              height={326}
              alt={t('icons.sticker')}
              src="/img/stickers/man-sticker-1.gif"
            />

            <Image
              className={s.stickerLine}
              width={971}
              height={123}
              alt={t('icons.line')}
              src="/img/stickers/sticker-line.svg"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Members;
