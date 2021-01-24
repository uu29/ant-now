import {combineReducers} from 'redux';
import favoritesReducer from './favoritesReducer';

// 리듀서들을 하나로 모아 내보내기
export default combineReducers({
  favorites: favoritesReducer,
});
