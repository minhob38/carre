import axios from 'axios';

const instance = axios.create({
  /* axios base 요청 주소 (next.config.ts에서 rewrite) */
  baseURL: '/',
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log('axios request error');
    console.log(error.message);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log('axios response error');
    console.log(error.message);
    return Promise.reject(error);
  },
);

export default instance;
