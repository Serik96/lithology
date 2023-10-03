'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/data-table';
import { FoldersList } from '@/components/folders-list';
import { ProjectsContainer } from '@/components/projects-container';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { ECardType } from '@/enums';
import { TFolder } from '@/types/project';
import { projectsBreadcrumbs, projectsSideLinks } from './const';

const Projects = () => {
  const t = useTranslations();

  const [rowType, setRowType] = useState(ECardType.ROW);
  const [folders, setFolders] = useState<TFolder[]>();

  /* todo: тут будет функция с подключенным бэком  */
  const getFolders = () => {
    setFolders(tempData.folders);
  };

  const handleSidebarAction = (type: string) => {
    console.log(type);
  };

  /* todo: тут будет функция с подключенным бэком  */
  useEffect(() => {
    getFolders();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={projectsBreadcrumbs} />
      <ProjectsContainer
        sidebarLinks={projectsSideLinks}
        handleSidebarAction={handleSidebarAction}
        heading={t('navigation.all-projects.main')}
      >
        <DataTable showTypeToggle rowType={rowType} setRowType={setRowType}>
          {folders && <FoldersList folders={folders} type={rowType} />}
        </DataTable>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
