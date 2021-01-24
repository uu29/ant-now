import {put, takeEvery, all, call} from 'redux-saga/effects'; // 사용할 사가 메소드를 불러온다.

// 사가를 만드는 곳
import favoritesSaga from './favoritesSaga';

const rootSaga = function* rootSaga() {
  yield all([
    // 이 안에 여러 사가를 넣어 한꺼번에 실행한다.
    favoritesSaga(),
  ]);
};

export default rootSaga;
