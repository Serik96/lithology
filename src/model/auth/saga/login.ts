import { Action } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { apiInfo, EApi, EApiAuth, fetchApi } from '@/api';
import { TAuthLoginResponse } from '@/model/auth/types';
import { TFetchResponse } from '@/types';
import { actions } from '../store/actions';

export function* login(action: Action) {
  if (!actions.login.trigger.match(action)) {
    return;
  }

  yield put(actions.login.pending());

  const response: TFetchResponse<TAuthLoginResponse> = yield call(fetchApi, {
    ...apiInfo(EApi.AUTH, EApiAuth.LOGIN),
    body: action.payload,
  });

  yield put(
    response.isSuccess ? actions.login.successful(response.data) : actions.login.failed(),
  );
  yield put(actions.login.completed());
}
