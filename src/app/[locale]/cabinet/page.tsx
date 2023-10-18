'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CabinetContainer } from '@/components/cabinet-container';
import { Breadcrumbs, Button, TextField } from '@/components/ui';
import { cn } from '@/helpers';
import { ArrowSquareRightIcon, ProfileIcon } from '@/icons';
import s from './cabinet.module.scss';
import { cabinetBreadcrumbs, cabinetSideLinks } from './const';

const Cabinet = () => {
  const t = useTranslations();

  const handleSidebarAction = (type?: string) => {
    console.log(type);
  };

  return (
    <>
      <Breadcrumbs navLinks={cabinetBreadcrumbs} />
      <CabinetContainer
        sidebarLinks={cabinetSideLinks}
        onSidebarClick={handleSidebarAction}
        heading={t('navigation.cabinet.main')}
      >
        <form className={s.form}>
          <div className={s.profile}>
            <Image
              src={'/temp/avatar.png'}
              alt={''}
              width={80}
              height={80}
              className={s.avatar}
            />
            <div className={s.information}>
              <h4>Name</h4>
              <a href="#!" className={cn(s.changeAvatar, 'link_active')}>
                <ProfileIcon />
                {t('cabinet.change-avatar')}
              </a>
            </div>
          </div>
          <div className={s.formBody}>
            <div className={s.formFields}>
              <TextField
                type="text"
                label={t('cabinet.name.first')}
                placeholder={t('cabinet.name.first')}
              />
              <TextField
                type="text"
                label={t('cabinet.name.last')}
                placeholder={t('cabinet.name.last')}
              />
              <TextField
                type="text"
                label={t('cabinet.email')}
                placeholder={t('cabinet.email')}
                readonly
              />
              <TextField
                type="text"
                label={t('cabinet.phone')}
                placeholder={t('cabinet.phone')}
              />
              <TextField
                type="text"
                label={t('cabinet.company')}
                placeholder={t('cabinet.company')}
              />
              <TextField
                type="text"
                label={t('cabinet.position')}
                placeholder={t('cabinet.position')}
              />
              <TextField
                type="text"
                label={t('cabinet.role')}
                placeholder={t('cabinet.role')}
              />
              <TextField
                type="text"
                label={t('cabinet.rights')}
                placeholder={t('cabinet.rights')}
              />
            </div>
            <Button>
              {t('cabinet.save')}
              <ArrowSquareRightIcon />
            </Button>
          </div>
        </form>
      </CabinetContainer>
    </>
  );
};

export default Cabinet;
