'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { DataTable } from '@/components/data-table';
import { FoldersList } from '@/components/folders-list';
import { ProjectsContainer } from '@/components/projects-container';
import { TableHeader } from '@/components/table-header';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { projectsNav, projectsSidebarNav } from './const';

const Projects = () => {
  const t = useTranslations();
  // @todo юзать enum вместо 0 или 1
  const [rowsType, setRowsType] = useState(0);

  return (
    <>
      <Breadcrumbs navLinks={projectsNav} />
      <ProjectsContainer
        sidebarLinks={projectsSidebarNav}
        heading={t('navigation.all-projects.main')}
      >
        <DataTable hasTypes type={rowsType} setType={setRowsType}>
          {/* @todo сравнивать с enum-ом */}
          {rowsType === 0 && <TableHeader />}
          <FoldersList folders={tempData.folders} type={rowsType} />
        </DataTable>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
