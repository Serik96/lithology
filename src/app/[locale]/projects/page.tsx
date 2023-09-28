'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/data-table';
import { ProjectsContainer } from '@/components/projects-container';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { ECardType } from '@/enums';
import { TFolder } from '@/types/project';
import { projectsNav, projectsSidebarNav } from './const';

const Projects = () => {
  const t = useTranslations();

  const [rowType, setRowType] = useState(ECardType.ROW);
  const [folders, setFolders] = useState<TFolder[]>();

  const getFolders = () => {
    setFolders(tempData.folders);
  };

  const handleSidebarAction = (type: string) => {
    console.log(type);
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={projectsNav} />
      <ProjectsContainer
        sidebarLinks={projectsSidebarNav}
        handleSidebarAction={handleSidebarAction}
        heading={t('navigation.all-projects.main')}
      >
        <DataTable
          showTypeToggle
          rowType={rowType}
          setRowType={setRowType}
          folders={folders}
        />
      </ProjectsContainer>
    </>
  );
};

export default Projects;
