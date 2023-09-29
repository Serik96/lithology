'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/data-table';
import { ProjectsContainer } from '@/components/projects-container';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { ECardType } from '@/enums';
import { TProject } from '@/types/project';
import { projectNav, projectSidebarNav } from './const';

const Reports = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const [rowType, setRowType] = useState(ECardType.ROW);
  const [reports, setReports] = useState<TProject[]>();

  /* todo: тут будет функция с подключенным бэком  */
  const getProjects = () => {
    setReports(tempData.projects);
  };

  const handleSidebarAction = (type: string) => {
    console.log(type);
  };

  /* todo: тут будет функция с подключенным бэком  */
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={projectNav} />
      <ProjectsContainer
        sidebarLinks={projectSidebarNav}
        handleSidebarAction={handleSidebarAction}
        heading={t('navigation.all-projects.main')}
      >
        <DataTable showTypeToggle rowType={rowType} setRowType={setRowType}>
          {/* projects && (
            <ProjectsList type={rowType} projects={projects} foldersSlug={slug} />
          ) */}
        </DataTable>
      </ProjectsContainer>
    </>
  );
};

export default Reports;
