'use client';

import { Breadcrumbs, Button, TextField } from '@/components/ui';
import { useTranslations } from 'next-intl';
import { companyCabinetBreadcrumbs, companyCabinetSideLinks } from './const';
import s from './company.module.scss';
import { ArrowSquareRightIcon, ProfileIcon } from '@/icons';
import { CabinetContainer } from '@/components/cabinet-container';
import Image from 'next/image';
import { cn } from '@/helpers';

const CompanyCabinet = () => {
  const t = useTranslations();

  const handleSidebarAction = (type?: string) => {
    console.log(type);
  };

  return (
    <>
      <Breadcrumbs navLinks={companyCabinetBreadcrumbs} />
      <CabinetContainer
        sidebarLinks={companyCabinetSideLinks}
        onSidebarClick={handleSidebarAction}
        heading={t('navigation.company-cabinet.main')}
      >
        <form className={s.form}>
          <div className={s.profile}>
            <Image src={'/temp/avatar.png'} alt={''} width={80} height={80} className={s.avatar} />
            <div className={s.information}>
              <h4>Company name</h4>
              <a href="#!" className={cn(s.changeAvatar, 'link_active')}>
                <ProfileIcon />
                {t('company-cabinet.change-avatar')}
              </a>
            </div>
          </div>
          <div className={s.formBody}>
            <div className={s.formFields}>
              <TextField
                type="text"
                label={t('company-cabinet.name')}
                placeholder={t('company-cabinet.name')}
              />
              <TextField
                type="text"
                label={t('company-cabinet.vat')}
                placeholder={t('company-cabinet.vat')}
                readonly
              />
              <TextField
                type="text"
                label={t('company-cabinet.country')}
                placeholder={t('company-cabinet.country')}
              />
              <TextField
                type="text"
                label={t('company-cabinet.city')}
                placeholder={t('company-cabinet.city')}
              />
              <TextField
                type="text"
                label={t('company-cabinet.address')}
                placeholder={t('company-cabinet.address')}
              />
              <TextField
                type="text"
                label={t('company-cabinet.zip')}
                placeholder={t('company-cabinet.zip')}
              />
              <TextField
                type="text"
                label={t('company-cabinet.industry')}
                placeholder={t('company-cabinet.industry')}
              />
            </div>
            <Button>
              {t('company-cabinet.save')}
              <ArrowSquareRightIcon />
            </Button>
          </div>
        </form>
      </CabinetContainer>
    </>
  );
};

export default CompanyCabinet;
