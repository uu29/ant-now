import fake_data from './fake_data.json';
import {put, takeLatest} from 'redux-saga/effects';
import types from '../actions/types';
// import * as api from '../utils/favorites';

// 사가 함수 실행
export default function* authSaga() {
  yield takeLatest(types.FETCH_SYMBOL_PROFILES, fetchSymbolProfiles$);
}

// 사가 함수 만들기
function* fetchSymbolProfiles$(action) {
  const {myFavorites} = action;
  if (!myFavorites) return;
  try {
    // 새로운 배열 생성
    const profiles = [];
    // my_favorites 배열의 갯수 만큼 api 호출
    for (const i in myFavorites) {
      console.log(myFavorites[i]);
      // Rapid API. 한달 사용량 500건 초과로 막아놓음(막 부르지 않도록 주의!!)
      // let res = yield call(api._fetchSymbolProfiles, myFavorites[i]);

      // 가라데이터 사용
      let res = fake_data;
      let {status} = res;
      if (status !== 200) {
        console.log(res.data);
        return;
      }
      let {data} = res;
      let {
        price: {
          regularMarketPrice: {raw},
          shortName,
          currency,
          regularMarketChangePercent,
          regularMarketChange,
          symbol,
        },
      } = data;
      let rMarketChange = regularMarketChange.raw;
      let rMarketChangePercent = regularMarketChangePercent.fmt;
      // 가장 최신 주가 정보를 넣어줌
      profiles.push({
        symbol: symbol,
        raw: raw,
        shortName: shortName,
        currency: currency,
        rMarketChange: rMarketChange,
        rMarketChangePercent: rMarketChangePercent,
      });
    }
    yield put({type: types.FETCH_SYMBOL_PROFILES_SUCCESS, payload: profiles});
  } catch (error) {
    yield put({type: types.FETCH_SYMBOL_PROFILES_FAILURE, error: error});
    return;
  } finally {
    yield put({type: types.IS_FETCHING_COMPLETE});
  }
}
