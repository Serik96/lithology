'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/data-table';
import { ProjectsContainer } from '@/components/projects-container';
import { ReportsList } from '@/components/reports-list';
import { Breadcrumbs } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { ECardFilterType, ECardType } from '@/enums';
import { getLastSlug } from '@/helpers';
import { TReport } from '@/types/project';
import { reportsBreadcrumbs, reportsSideLinks } from './const';

const Reports = () => {
  const t = useTranslations();
  const pathname = usePathname();
  /* @todo slug будет нужен для запроса всех репортов из проекта   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const slug = getLastSlug(pathname);

  const [rowType, setRowType] = useState(ECardType.ROW);
  const [reports, setReports] = useState<TReport[]>();

  /* todo: тут будет функция с подключенным бэком  */
  const getReports = () => {
    setReports(tempData.reports);
  };

  const handleSidebarClick = (type?: ECardFilterType) => {
    console.log(type);
  };

  /* todo: тут будет функция с подключенным бэком  */
  useEffect(() => {
    getReports();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={reportsBreadcrumbs} />
      <ProjectsContainer
        sidebarLinks={reportsSideLinks}
        onSidebarClick={handleSidebarClick}
        heading={t('navigation.reports.all')}
      >
        <DataTable showTypeToggle rowType={rowType} setRowType={setRowType}>
          {reports && <ReportsList type={rowType} reports={reports} />}
        </DataTable>
      </ProjectsContainer>
    </>
  );
};

export default Reports;
