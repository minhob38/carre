import axios from 'axios';

const instance = axios.create({
  /* axios base 요청 주소 (next.config.ts에서 rewrite) */
  // baseURL: '/',
  baseURL:
    'http://ec2-3-37-55-86.ap-northeast-2.compute.amazonaws.com:8080/api/v1',
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log('axios request error');
    console.log(error.message);
    return Promise.reject(error.message);
  },
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log('axios response error');
    console.log(error.message);
    return Promise.reject(error.message);
  },
);

export default instance;
