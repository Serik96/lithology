import { PayloadAction } from '@reduxjs/toolkit';
import { fetchData, LOGIN_API_URL } from '@/api';
import { TAuthState, TLogin } from './types';

export const reducers = {
  login: (state: TAuthState, action: PayloadAction<TLogin>) => {
    const payload = action.payload;

    fetchData(LOGIN_API_URL, {
      body: payload,
    }).then(r => {
      console.log(r);
    });
  },
  logout: (state: TAuthState) => {
    state.user = null;
    state.token = null;
    state.isAuthenticated = false;
  },
};
