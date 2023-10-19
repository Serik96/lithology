import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ArrowSquareRightIcon } from '@/icons';
import s from './change-email.module.scss';
import { changeEmailBreadcrumbs } from './const';

const ChangeEmail = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={changeEmailBreadcrumbs} />
      <div className={s.changeEmail}>
        <h1 className={s.heading}>{t('navigation.change-email.main')}</h1>
        <section className={s.changeSection}>
          <form className={s.form}>
            <div className={s.formBody}>
              <div className={s.formFields}>
                <TextField
                  label={t('change-email.email.label')}
                  placeholder={t('change-email.email.placeholder')}
                />
              </div>
              <Button>
                {t('change-email.change')}
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

export default ChangeEmail;
