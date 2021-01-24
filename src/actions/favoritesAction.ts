import types from './types';

export function fetchSymbolProfiles(symbol) {
  return {
    type: types.FETCH_SYMBOL_PROFILES,
    payload: symbol,
  };
}