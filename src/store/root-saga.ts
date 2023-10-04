import { takeEvery } from 'redux-saga/effects';
import { AuthModel, SpecimenModel } from '@/model';

export function* rootSaga() {
  /** auth */
  yield takeEvery(AuthModel.store.actions.login.trigger, AuthModel.saga.login);

  /** specimen */
  yield takeEvery(SpecimenModel.store.actions.load.trigger, SpecimenModel.saga.load);
}
