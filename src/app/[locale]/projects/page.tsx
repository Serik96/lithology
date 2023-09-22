'use client';

import { useTranslations } from 'next-intl';
import { ProjectsContainer } from '@/components/projects-container';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { projectsNav, projectsSidebarNav } from './const';

const Projects = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={projectsNav} />
      <ProjectsContainer
        sidebarLinks={projectsSidebarNav}
        heading={t('navigation.all-projects.main')}
        tableData={tempData.projects}
      />
    </>
  );
};

export default Projects;
