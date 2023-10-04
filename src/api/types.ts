import { THttpMethod } from '@/types';
import { EApi, EApiAuth, EApiBase } from './enum';

export type TApiMethod = EApiAuth | EApiBase;

type TApiMethodPathInfo = {
  suffix?: string;
  method: THttpMethod;
};

// @todo Сделать проверку соответствий в константах Record<TApiMethod, TApiMethodPathInfo>
export type TApiInfo = Record<string, TApiMethodPathInfo>;

export type TAllApiInfo = Record<EApi, TApiInfo>;
