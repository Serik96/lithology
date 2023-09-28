import { TUser } from '@/types';

export type TAuthState = {
  token: Nullable<string>;
  user: Nullable<TUser>;
  pending: boolean;
};

export type TAuthLoginAction = {
  login: string;
  password: string;
};

export type TAuthLoginResponse = {
  token: string;
  user: TUser;
};
