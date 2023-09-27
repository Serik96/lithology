import { TAuthState } from '../types';

export const name = 'auth';

export const initialState: TAuthState = {
  token: null,
  user: null,
  pending: false,
};
