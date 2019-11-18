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

//로그인 체크 API
function loginCheckMember(data) {
  return instance.get('api/member/login/check', data);
}

//아이디 중복 확인 API
function idCheckMember(data) {
  return instance.get('api/members/id/check/'+data.id, data);
}

//가맹점주 회원가입 API
function signupMember(data) {
  return instance.post('api/members/join', data);
}

//가맹점주 상제정보 입력 (판매자 정보 입력)
function addMemberInfo(data){
  return instance.post('api/members/info', data);
}

//세금계산서 양식 신청 (판매자)
function addMemberTax(data){
  return instance.post('api/members/tax', data);
}

//결제 서비스 등록 
function addMemberPaymentService(data){
  return instance.post('api/members/payment', data);
}

function getMemberPaymentService(data){
  return instance.get('api/members/payment/list/'+data.member_id, data)
}

function emailSendMember(data) {
  return instance.post('api/auth/code', data);
}

function codeVerifyMemeber(data) {
  return instance.put('api/auth/code', data);
}




export { loginUser, signupMember, loginCheckMember, idCheckMember, addMemberInfo, addMemberTax, addMemberPaymentService,  getMemberPaymentService};