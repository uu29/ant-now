import types from '../actions/types';

const initialState = {
  symbol_profiles: [],
  symbol_profiles_error: null,
  is_fetching: true,
};

const favoritesReducer = (state = initialState, action) => {
  // For Debugger
  // console.log('payload:' + action.payload);

  switch (action.type) {
    case types.FETCH_SYMBOL_PROFILES_SUCCESS:
      return {
        ...state,
        symbol_profiles: action.payload,
        symbol_profiles_error: null,
      };
    case types.FETCH_SYMBOL_PROFILES_FAILURE:
      return {
        ...state,
        symbol_profiles: null,
        symbol_profiles_error: action.error,
      };
    case types.IS_FETCHING_COMPLETE:
      return {
        ...state,
        is_fetching: false,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
