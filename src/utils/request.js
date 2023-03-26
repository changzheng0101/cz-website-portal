import axios from 'axios';

const service = axios.create({
  baseURL: '/api/v1',
  timeout: 5000,
});

// 在请求发送之前进行拦截
service.interceptors.request.use(
  (config) => {
    console.log('请求发出前拦截');
    return config;
  },
  (error) => {
    console.log('some error happen when send request');
  }
);

// 请求返回时候拦截
service.interceptors.response.use(
  (config) => {
    console.log('返回时拦截');
    return config;
  },
  (error) => {
    console.log('some error happen when send request');
  }
);

export default service;
