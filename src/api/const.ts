import { EApi, EApiAuth, EApiFolder } from '@/api/enum';
import { TAllApiInfo } from '@/api/types';

export const API_CONTROLLER_PATH = {
  [EApi.AUTH]: 'api/auth',
  [EApi.FOLDER]: 'api/folder',
};

export const API_METHOD_INFO: TAllApiInfo = {
  [EApi.AUTH]: {
    [EApiAuth.LOGIN]: { suffix: 'login', method: 'POST' },
    [EApiAuth.LOGOUT]: { suffix: 'logout', method: 'POST' },
    [EApiAuth.CHECK]: { suffix: 'check', method: 'POST' },
  },
  [EApi.FOLDER]: {
    [EApiFolder.CREATE]: { method: 'POST' },
    [EApiFolder.UPDATE]: { method: 'PUT' },
    [EApiFolder.LIST]: { method: 'GET' },
    [EApiFolder.DELETE]: { method: 'DELETE' },
  },
};
