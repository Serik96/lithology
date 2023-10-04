import { EModalPurpose } from '@/enums/modal';

export type TModalInfo = {
  isOpened: boolean;
};

export type TModalState = {
  items: Record<EModalPurpose, TModalInfo>;
};
