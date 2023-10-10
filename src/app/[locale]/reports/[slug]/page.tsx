'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from '@/components/data-table';
import { ReportDeleteModal } from '@/components/modal';
import { ProjectsContainer } from '@/components/projects-container';
import { ReportsList } from '@/components/reports-list';
import { Breadcrumbs, Loader } from '@/components/ui';
import { ECardFilterType, ECardType } from '@/enums';
import { getLastSlug } from '@/helpers';
import { useMountEffect } from '@/hooks';
import { SpecimenModel } from '@/model';
import { reportsBreadcrumbs, reportsSideLinks } from './const';

const Reports = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const dispatch = useDispatch();
  /** @todo slug будет нужен для запроса всех репортов из проекта   */
  const slug = getLastSlug(pathname);
  const loading = useSelector(SpecimenModel.store.selectors.isPending);
  const reports = useSelector(SpecimenModel.store.selectors.getItems);
  const [rowType, setRowType] = useState(ECardType.ROW);

  const handleSidebarClick = (type?: ECardFilterType) => {
    console.log(type);
  };

  useMountEffect(() => {
    console.log('Reports>', { slug });

    dispatch(SpecimenModel.store.actions.load.trigger({}));
  });

  return (
    <>
      <Breadcrumbs navLinks={reportsBreadcrumbs} />
      <ProjectsContainer
        sidebarLinks={reportsSideLinks}
        onSidebarClick={handleSidebarClick}
        heading={t('navigation.reports.all')}
      >
        <DataTable showTypeToggle rowType={rowType} setRowType={setRowType}>
          {loading ? (
            <Loader />
          ) : reports?.length ? (
            <ReportsList type={rowType} reports={reports} />
          ) : (
            <div>No reports</div>
          )}
        </DataTable>
      </ProjectsContainer>
      <ReportDeleteModal />
    </>
  );
};

export default Reports;
