import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '@/components/ui/modal';
import { ESize } from '@/enums';
import { EModalPurpose } from '@/enums/modal';
import { ModalModel, SpecimenModel } from '@/model';

const PURPOSE = EModalPurpose.REPORT_DELETE;

export const ReportDeleteModal: FC = () => {
  const t = useTranslations();
  const id = useSelector(ModalModel.store.selectors.getRecordId(PURPOSE));
  const report = useSelector(SpecimenModel.store.selectors.getItemById(id));

  if (report === null) {
    // @todo добавить логгер и писать в него ошибку

    return null;
  }

  const handleConfirm = () => {
    // todo
  };

  return (
    <Modal
      purpose={PURPOSE}
      title={t('table.report-delete', { report: report.title })}
      description={t('table.report-delete-description')}
      maxWidth={ESize.md}
      onConfirm={handleConfirm}
      confirmBtnText={t('delete')}
    />
  );
};
