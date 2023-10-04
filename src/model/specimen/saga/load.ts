import { Action } from '@reduxjs/toolkit';
import { call, put, select } from 'redux-saga/effects';
import { apiInfo, EApi, EApiBase, fetchApi } from '@/api';
import { selectors } from '@/model/auth/store';
import { TSpecimenLoadResponse } from '@/model/specimen/types';
import { TFetchResponse } from '@/types';
import { actions } from '../store/actions';

export function* load(action: Action) {
  if (!actions.load.trigger.match(action)) {
    return;
  }

  yield put(actions.load.pending());

  const token: Nullable<string> = yield select(selectors.token);
  const response: TFetchResponse<TSpecimenLoadResponse> = yield call(fetchApi, {
    ...apiInfo(EApi.SPECIMEN, EApiBase.LIST),
    body: action.payload,
    token,
  });

  yield put(
    response.isSuccess ? actions.load.successful(response.data) : actions.load.failed(),
  );
  yield put(actions.load.completed());
}
