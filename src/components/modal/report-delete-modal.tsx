import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Modal } from '@/components/ui/modal';
import { ESize } from '@/enums';
import { EModalPurpose } from '@/enums/modal';
import { TReport } from '@/types/project';

type TProps = {
  report: TReport;
};

export const ReportDeleteModal: FC<TProps> = ({ report }) => {
  const t = useTranslations();

  const handleConfirm = () => {
    // todo
  };

  return (
    <Modal
      purpose={EModalPurpose.REPORT_DELETE}
      title={t('table.report-delete', { report: report.name })}
      description={t('table.report-delete-description')}
      maxWidth={ESize.md}
      onConfirm={handleConfirm}
      confirmBtnText={t('delete')}
    />
  );
};
