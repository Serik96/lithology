'use client';

import { useTranslations } from 'next-intl';
import { ProjectsContainer } from '@/components/projects-container';
import { Breadcrumbs, Button, TextField } from '@/components/ui';
import { ArrowSquareRightIcon } from '@/icons';
import { editBreadcrumbs, editSideLinks } from './const';
import s from './edit.module.scss';

const Edit = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={editBreadcrumbs} />
      <ProjectsContainer
        heading={t('navigation.all-projects.edit')}
        sidebarLinks={editSideLinks}
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
              {t('projects.save-changes')}
              <ArrowSquareRightIcon />
            </Button>
          </div>
        </form>
      </ProjectsContainer>
    </>
  );
};

export default Edit;
