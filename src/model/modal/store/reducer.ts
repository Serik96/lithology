import { createReducer } from '@reduxjs/toolkit';
import { TModalState } from '../types';
import { actions } from './actions';
import { initialState } from './const';

export const reducer = createReducer<TModalState>(initialState, builder => {
  builder
    .addCase(actions.open, (state, action) => {
      state.items[action.payload.purpose].isOpened = true;
    })
    .addCase(actions.close, (state, action) => {
      state.items[action.payload.purpose].isOpened = false;
    })
    .addCase(actions.closeAll, state => {
      for (const [, info] of Object.entries(state.items)) {
        info.isOpened = false;
      }
    });
});
