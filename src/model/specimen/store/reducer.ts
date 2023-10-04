import { createReducer } from '@reduxjs/toolkit';
import { TSpecimenState } from '@/model/specimen/types';
import { actions } from './actions';
import { initialState } from './const';

export const reducer = createReducer<TSpecimenState>(initialState, builder => {
  builder
    .addCase(actions.load.pending, state => {
      state.pending = true;
    })
    .addCase(actions.load.successful, (state, { payload }) => {
      state.items = payload.items;
    })
    .addCase(actions.load.failed, state => {
      state.items = [];
    })
    .addCase(actions.load.completed, state => {
      state.pending = false;
    });
});
