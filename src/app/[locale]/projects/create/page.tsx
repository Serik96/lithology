'use client';

import { useTranslations } from 'next-intl';
import { ProjectsContainer } from '@/components/projects-container';
import { Breadcrumbs, Button, TextField } from '@/components/ui';
import { ArrowSquareRightIcon } from '@/icons';
import { createBreadcrumbs, createSideLinks } from './const';
import s from './create.module.scss';

const Create = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={createBreadcrumbs} />
      <ProjectsContainer
        heading={t('navigation.all-projects.create')}
        sidebarLinks={createSideLinks}
      >
        <form className={s.form}>
          <div className={s.formBody}>
            <div className={s.formFields}>
              <TextField label={t('projects.name')} placeholder={t('projects.name')} />
            </div>
            <div className={s.formFields}>
              <TextField
                label={t('projects.location')}
                placeholder={t('projects.location')}
              />
              <TextField
                label={t('projects.industry')}
                placeholder={t('projects.industry')}
              />
            </div>
            <div className={s.formFields}>
              <TextField
                label={t('projects.gps-coordinates')}
                placeholder={t('projects.gps-coordinates')}
              />
            </div>
            <div className={s.formSelects}>
              <TextField
                label={t('projects.connect')}
                placeholder={t('projects.connect')}
              />
            </div>
            <Button className={s.formBtn}>
              {t('projects.save')}
              <ArrowSquareRightIcon />
            </Button>
          </div>
        </form>
      </ProjectsContainer>
    </>
  );
};

export default Create;
