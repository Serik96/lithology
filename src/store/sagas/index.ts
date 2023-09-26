import { all, fork } from 'redux-saga/effects';
import { watchFetchData } from './watch-fetch-data';

function* rootSaga() {
  yield all([fork(watchFetchData)]);
}

export default rootSaga;
