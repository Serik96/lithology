import { EModalPurpose } from '@/enums/modal';

export type TModalInfo = {
  isOpened: boolean;
  recordId: Nullable<number>;
};

export type TModalState = {
  items: Record<EModalPurpose, TModalInfo>;
};

export type TModalOpen = {
  /**
   * Тип модалки
   */
  purpose: EModalPurpose;
  /**
   * ID записи, которую нужно будет взять из стейта
   */
  recordId?: number;
};

export type TModalClose = {
  purpose: EModalPurpose;
};
