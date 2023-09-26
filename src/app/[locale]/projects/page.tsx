'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { DataTable } from '@/components/data-table';
import { FoldersList } from '@/components/folders-list';
import { ProjectsContainer } from '@/components/projects-container';
import { TableHeader } from '@/components/table-header';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { ECardType } from '@/enums';
import { projectsNav, projectsSidebarNav } from './const';

const Projects = () => {
  const t = useTranslations();
  const [rowType, setRowType] = useState(ECardType.ROW);

  return (
    <>
      <Breadcrumbs navLinks={projectsNav} />
      <ProjectsContainer
        sidebarLinks={projectsSidebarNav}
        heading={t('navigation.all-projects.main')}
      >
        <DataTable showTypeToggle rowType={rowType} setRowType={setRowType}>
          {/* @todo: TableHeader и FoldersList перенести внутрь DataTable */}
          {rowType === ECardType.ROW && <TableHeader />}
          <FoldersList folders={tempData.folders} type={rowType} />
        </DataTable>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
