import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchData } from '@/api';
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from '@/store/actions';

function* fetchAndHandleData(action: ReturnType<typeof fetchDataRequest>): Generator {
  try {
    const data = yield call(fetchData, action.payload);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      yield put(fetchDataFailure(error.message));
    }
  }
}

export function* watchFetchData() {
  yield takeEvery(fetchDataRequest.type, fetchAndHandleData);
}
