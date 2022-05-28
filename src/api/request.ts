import axios from 'axios';

export function request(config: unknown) {
  const http = axios.create({
    baseURL: 'https://www.showdoc.com.cn/1520731920996915/8026747763238816',
    timeout: 5000,
  });
  http.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      console.log(error);
    }
  );
  http.interceptors.response.use(
    (res) => {
      return res ? res.data : res;
    },
    (error) => {
      console.log(error.response);
    }
  );
  return http(config);
}
