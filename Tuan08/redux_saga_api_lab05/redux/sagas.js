import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchData() {
  try {
    const response = yield call(fetch, 'https://66fcc665c3a184a84d17f003.mockapi.io/App');
    const data = yield response.json();
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
}

function* deleteJob(action) {
  try {
    yield call(fetch, `https://66fcc665c3a184a84d17f003.mockapi.io/App/${action.payload}`, {
      method: 'DELETE',
    });
    yield put({ type: 'DELETE_JOB_SUCCESS', payload: action.payload });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_DATA_REQUEST', fetchData);
  yield takeLatest('DELETE_JOB_REQUEST', deleteJob);
}

export default rootSaga;