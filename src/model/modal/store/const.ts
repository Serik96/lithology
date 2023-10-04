import { EModalPurpose } from '@/enums/modal';
import { TModalInfo, TModalState } from '../types';

export const name = 'modal';

export const initialModalInfo: TModalInfo = {
  isOpened: false,
  recordId: null,
};

export const initialState: TModalState = {
  items: {
    [EModalPurpose.REPORT_DELETE]: initialModalInfo,
  },
};
