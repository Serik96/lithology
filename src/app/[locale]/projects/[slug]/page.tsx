'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/data-table';
import { ProjectsContainer } from '@/components/projects-container';
import { ProjectsList } from '@/components/projects-list';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { ECardFilterType, ECardType } from '@/enums';
import { TProject } from '@/types/project';
import { projectBreadcrumbs, projectSideLinks } from './const';

const Project = () => {
  const t = useTranslations();

  const [rowType, setRowType] = useState(ECardType.ROW);
  const [projects, setProjects] = useState<TProject[]>();

  /* todo: тут будет функция с подключенным бэком  */
  const getProjects = () => {
    setProjects(tempData.projects);
  };

  const handleSidebarClick = (type: Nullable<ECardFilterType>) => {
    console.log(type);
  };

  /* todo: тут будет функция с подключенным бэком  */
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={projectBreadcrumbs} />
      <ProjectsContainer
        sidebarLinks={projectSideLinks}
        onSidebarClick={handleSidebarClick}
        heading={t('navigation.all-projects.main')}
      >
        <DataTable showTypeToggle rowType={rowType} setRowType={setRowType}>
          {projects && <ProjectsList type={rowType} projects={projects} />}
        </DataTable>
      </ProjectsContainer>
    </>
  );
};

export default Project;
