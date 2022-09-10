import axios from 'axios';
import * as ERRORS from '@constants/errors';

const instance = axios.create({
  /* axios base 요청 주소 (next.config.ts에서 rewrite) */
  // baseURL: '/',
  baseURL: 'https://api.carre.kr/api/v1/',
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('axios request error');
      console.log(error.message);
    }
    return Promise.reject(error.message);
  },
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('axios response error');
      console.log(error.message);
    }
    if ((error.message as string).includes('404')) {
      return Promise.reject(ERRORS.INTERNAL_SERVER_ERROR);
    }
    return Promise.reject(error.message);
  },
);

export default instance;
