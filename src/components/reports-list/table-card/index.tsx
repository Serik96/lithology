import { useDispatch } from 'react-redux';
import { ReportDeleteModal } from '@/components/modal';
import { ECardType } from '@/enums';
import { EModalPurpose } from '@/enums/modal';
import { ModalModel } from '@/model';
import { TReport } from '@/types/project';
import { ColsCard } from './cols-card';
import { RowsCard } from './rows-card';

type TProps = {
  data: TReport;
  type: ECardType;
};

export const TableCard = ({ data, type }: TProps) => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(ModalModel.store.actions.open({ purpose: EModalPurpose.REPORT_DELETE }));
  };

  // @todo модалка должна быть одна. и при открытии в неё нужно загружать данные репорта из стейта
  // сейчас у тебя для каждой строки таблицы своя модалка, что будет жрать много памяти
  if (type === ECardType.ROW) {
    return (
      <>
        <RowsCard setModalOpen={openModal} report={{ ...data }} />
        <ReportDeleteModal report={data} />
      </>
    );
  }

  if (type === ECardType.COLUMN) {
    return (
      <>
        <ColsCard setModalOpen={openModal} report={{ ...data }} />
        <ReportDeleteModal report={data} />
      </>
    );
  }
};
