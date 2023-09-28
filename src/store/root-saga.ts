import { takeEvery } from 'redux-saga/effects';
import { AuthModel } from '@/model';

export function* rootSaga() {
  yield takeEvery(AuthModel.store.actions.login.trigger, AuthModel.saga.login);
}
