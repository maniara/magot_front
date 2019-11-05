// [요청]
// 브라우저 -> 인터셉터 -> 서버
//           토큰 추가
import store from '../store/index.js';

export function setInterceptor(instance) {
  instance.interceptors.request.use(
    config => {
      config.headers.Authorization = store.state.token;
      return config;
    },
    error => Promise.reject(error),
  );
  instance.interceptors.response.use(
    response => response,
    error => Promise.reject(error),
  );
  return instance;
}