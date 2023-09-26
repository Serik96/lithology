import { PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '@/types';
import { TAuthState } from './types';

export const reducers = {
  loginStart: (state: TAuthState) => {
    console.log(state);
  },
  loginSuccess: (state: TAuthState, action: PayloadAction<TUser>) => {
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loginFailure: (state: TAuthState, action: PayloadAction<TUser>) => {
    console.log(action);
    state.user = null;
    state.isAuthenticated = false;
  },
  logout: (state: TAuthState) => {
    state.user = null;
    state.token = null;
    state.isAuthenticated = false;
  },
};
