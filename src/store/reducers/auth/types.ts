import { TUser } from '@/types';

export type TAuthState = {
  token: Nullable<string>;
  user: Nullable<TUser>;
  isAuthenticated: boolean;
};
