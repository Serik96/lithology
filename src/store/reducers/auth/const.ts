import { TAuthState } from './types';

export const authSliceName = 'auth';

export const initialState: TAuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};
