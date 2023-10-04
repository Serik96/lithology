import { createAction } from '@reduxjs/toolkit';
import { actionNameBuilder } from '@/helpers';
import { TAuthLoginAction, TAuthLoginResponse } from '@/model/auth/types';
import { name } from './const';

const named = actionNameBuilder(name);

export const actions = {
  login: {
    trigger: createAction<TAuthLoginAction>(named('login/trigger')),
    pending: createAction(named('login/pending')),
    successful: createAction<TAuthLoginResponse>(named('login/successful')),
    failed: createAction(named('login/failed')),
    completed: createAction(named('login/completed')),
  },
  logout: createAction(named('logout')),
  check: createAction(named('check')),
};
