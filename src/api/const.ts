import { EApi, EApiAuth, EApiBase } from './enum';
import { TAllApiInfo, TApiInfo } from './types';

export const API_CONTROLLER_PATH = {
  [EApi.AUTH]: 'api/auth',
  [EApi.FOLDER]: 'api/folder',
  [EApi.SPECIMEN]: 'api/specimen',
};

const apiBaseMethods: TApiInfo = {
  [EApiBase.CREATE]: { method: 'POST' },
  [EApiBase.UPDATE]: { method: 'PUT' },
  [EApiBase.LIST]: { method: 'GET' },
  [EApiBase.DELETE]: { method: 'DELETE' },
};

export const API_METHOD_INFO: TAllApiInfo = {
  [EApi.AUTH]: {
    [EApiAuth.LOGIN]: { suffix: 'login', method: 'POST' },
    [EApiAuth.LOGOUT]: { suffix: 'logout', method: 'POST' },
    [EApiAuth.CHECK]: { suffix: 'check', method: 'POST' },
  },
  [EApi.FOLDER]: apiBaseMethods,
  [EApi.SPECIMEN]: apiBaseMethods,
};
