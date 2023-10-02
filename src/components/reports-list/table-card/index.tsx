import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { ECardType } from '@/enums';
import { TReport } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TReport;
  type: ECardType;
};

export const TableCard = ({ data, type }: TProps) => {
  const t = useTranslations();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      {type === ECardType.ROW && (
        <RowsCard setModalOpen={setModalOpen} report={{ ...data }} />
      )}
      {type === ECardType.COLUMN && (
        <ColsCard setModalOpen={setModalOpen} report={{ ...data }} />
      )}

      <Modal
        open={modalOpen}
        title={t('table.report-delete', { report: data.name })}
        description={t('table.report-delete-description')}
        maxSize={480}
        onClose={() => setModalOpen(false)}
        onConfirm={() => {}}
        confirmBtnText={t('delete')}
      />
    </>
  );
};
