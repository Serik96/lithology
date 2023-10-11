'use client';

import { useTranslations } from 'next-intl';
import { ProjectsContainer } from '@/components/projects-container';
import { Breadcrumbs } from '@/components/ui';
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
        <form className={s.form}></form>
      </ProjectsContainer>
    </>
  );
};

export default Create;
