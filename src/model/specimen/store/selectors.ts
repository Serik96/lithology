import { createSelector } from '@reduxjs/toolkit';
import { createBaseSelector } from '@/helpers';
import { TSpecimenState } from '../types';
import { name } from './const';

const baseSelector = createBaseSelector<TSpecimenState>(name);

export const selectors = {
  isPending: createSelector(baseSelector, state => state.pending),
  getItems: createSelector(baseSelector, state => state.items),
  getItemById: (id: Nullable<number>) =>
    createSelector(
      baseSelector,
      state => (id && state.items.find(i => i.id === id)) || null,
    ),
};
