import yahooClient from '../client';

const _fetchHistoricalData = (params) => {
  return yahooClient
    .get(`/stock/v3/get-historical-data`, {params: params})
    .then((res) => res)
    .catch((err) => {
      if (err.response) return err.response;
    });
};

const _fetchSymbolProfiles = (params) => {
  return yahooClient
    .get(`/stock/v2/get-profile`, {params: params})
    .then((res) => res)
    .catch((err) => {
      if (err.response) return err.response;
    });
};

export {_fetchHistoricalData, _fetchSymbolProfiles};
