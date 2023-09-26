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
import { defaultLayoutType } from './enums';

const Projects = () => {
  const t = useTranslations();
  const [rowsType, setRowsType] = useState(defaultLayoutType.type);

  return (
    <>
      <Breadcrumbs navLinks={projectsNav} />
      <ProjectsContainer
        sidebarLinks={projectsSidebarNav}
        heading={t('navigation.all-projects.main')}
      >
        <DataTable hasTypes={true} rowType={rowsType} setRowType={setRowsType}>
          {rowsType === ECardType.ROW && <TableHeader />}
          <FoldersList data={tempData.folders} type={rowsType} />
        </DataTable>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
