import { createReducer } from '@reduxjs/toolkit';
import { TAuthState } from '../types';
import { actions } from './actions';
import { initialState } from './const';

export const reducer = createReducer<TAuthState>(initialState, builder => {
  builder
    .addCase(actions.login.pending, state => {
      state.pending = true;
    })
    .addCase(actions.login.successful, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    .addCase(actions.login.failed, state => {
      state.token = null;
      state.user = null;
    })
    .addCase(actions.login.completed, state => {
      state.pending = false;
    });
});
