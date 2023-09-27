import { THttpMethod } from '@/types';
import { EApi, EApiAuth, EApiFolder } from './enum';

export type TApiMethod = EApiAuth | EApiFolder;

type TApiMethodPathInfo = {
  suffix?: string;
  method: THttpMethod;
};

// @todo Сделать проверку соответствий в константах Record<TApiMethod, TApiMethodPathInfo>
type TApiInfo = Record<string, TApiMethodPathInfo>;

export type TAllApiInfo = Record<EApi, TApiInfo>;
