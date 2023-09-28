'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/data-table';
import { ProjectsContainer } from '@/components/projects-container';
import { Breadcrumbs } from '@/components/ui';
import { ECardType } from '@/enums';
import { TProject } from '@/types/project';
import { projectNav, projectSidebarNav } from './const';

const Project = () => {
  const t = useTranslations();
  const [rowType, setRowType] = useState(ECardType.ROW);
  const [projects, setProjects] = useState<TProject[]>();

  const getFolders = () => {};

  const handleSidebarAction = (type: string) => {
    console.log(type);
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={projectNav} />
      <ProjectsContainer
        sidebarLinks={projectSidebarNav}
        handleSidebarAction={handleSidebarAction}
        heading={t('navigation.all-projects.main')}
      >
        <DataTable
          showTypeToggle
          rowType={rowType}
          setRowType={setRowType}
          projects={projects}
        />
      </ProjectsContainer>
    </>
  );
};

export default Project;
