import { createSelector } from '@reduxjs/toolkit';
import { EModalPurpose } from '@/enums/modal';
import { createBaseSelector } from '@/helpers';
import { TModalState } from '@/model/modal/types';
import { name } from './const';

const baseSelector = createBaseSelector<TModalState>(name);

export const selectors = {
  isOpened: (purpose: EModalPurpose) =>
    createSelector(baseSelector, state => state.items[purpose].isOpened),
  getRecordId: (purpose: EModalPurpose) =>
    createSelector(baseSelector, state => state.items[purpose].recordId),
};
