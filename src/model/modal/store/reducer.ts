import { createReducer } from '@reduxjs/toolkit';
import { TModalState } from '../types';
import { actions } from './actions';
import { initialState } from './const';

export const reducer = createReducer<TModalState>(initialState, builder => {
  builder
    .addCase(actions.open, (state, { payload }) => {
      state.items[payload.purpose].isOpened = true;
      state.items[payload.purpose].recordId = payload.recordId ?? null;
    })
    .addCase(actions.close, (state, { payload }) => {
      state.items[payload.purpose].isOpened = false;
      state.items[payload.purpose].recordId = null;
    })
    .addCase(actions.closeAll, state => {
      for (const [, info] of Object.entries(state.items)) {
        info.isOpened = false;
        info.recordId = null;
      }
    });
});
