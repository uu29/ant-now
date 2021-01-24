import axios from 'axios';

// axios 인스턴스 생성
const YahooClient = axios.create({
  baseURL: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com',
  // timeout: 1000,
  headers: {
    // 커스텀헤더를 넣으면 오류남. 커스텀헤더에는 ' 가 생김.
    Accept: 'application/json',
    useQueryString: 'true',
  },
});

// 요청 인티셉터 (요청 전에 가로채서 axios 설정을 적용함)
YahooClient.interceptors.request.use(
  function (config) {
    const headers = {
      x_rapidapi_key: '7cd6735678msh7d3a80d86d9f15ep1739d8jsn0b3dc896f11c',
      x_rapidapi_host: 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    };

    const {x_rapidapi_key, x_rapidapi_host} = headers;
    config.headers['x-rapidapi-key'] = x_rapidapi_key;
    config.headers['x-rapidapi-host'] = x_rapidapi_host;
    return config;
  },
  function (error) {
    // 요청 에러 직전 호출
    return Promise.reject(error);
  },
);

// 응답 인티셉터 (응답 직전에 호출)
YahooClient.interceptors.response.use(
  function (response) {
    // https stauts === 200 일 때 - axios 함수에서 .then()으로 연결됨
    return response;
  },

  function (error) {
    // https stauts !== 200 일 때 - axios 함수에서 .catch()으로 연결됨
    return Promise.reject(error);
  },
);

export default YahooClient;
