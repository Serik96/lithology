import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button, TextField } from '@/components/ui';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ArrowSquareRightIcon } from '@/icons';
import s from './change-password.module.scss';
import { changePasswordBreadcrumbs } from './const';

const ChangePassword = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={changePasswordBreadcrumbs} />
      <div className={s.changePassword}>
        <h1 className={s.heading}>{t('navigation.change-password')}</h1>
        <section className={s.changeSection}>
          <form className={s.form}>
            <div className={s.formBody}>
              <div className={s.formFields}>
                <TextField
                  label={t('change-password.old.label')}
                  placeholder={t('change-password.new.placeholder')}
                />

                <TextField
                  label={t('change-password.old.label')}
                  placeholder={t('change-password.new.placeholder')}
                />
              </div>
              <Button>
                {t('change-password.change')}
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

export default ChangePassword;
