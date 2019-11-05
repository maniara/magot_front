import axios from 'axios';
import { setInterceptor } from './interceptor';

function createInstance() {
  const instance = axios.create({
    baseURL: 'http://localhost:8081/',
    // headers: {
    //   Authorization: '13$we',
    // },
  });
  //const setupInstance = setInterceptor(instance);
  return instance;
}

const instance = createInstance();
// const userInstance = createInstance('users');

function loginUser(data) {
  // const url = 'http://localhost:3000/login';
  return instance.post('api/members/login', data);
}

function loginCheckMember(data) {
  
  return instance.get('api/member/login/check', data);
}

function emailSendMember(data) {
  return instance.post('api/auth/code', data);
}

function signupMember(data) {
  return instance.post('api/members/join', data);
}

function codeVerifyMemeber(data) {
  return instance.put('api/auth/code', data);
}




export { loginUser, emailSendMember, codeVerifyMemeber, signupMember, loginCheckMember };