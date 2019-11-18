import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import router from '../router';

Vue.use(Vuex)


export default new Vuex.Store({
  state: { //상태
    host: 'http://localhost:8081/api',
    accessToken: null,
    user : {}
  },
  getter:{

  },
  mutations: { 
    loginToken: function(state, payload){
      state.accessToken = payload;
    },
    logout: function(state){
      if(state.accessToken){
        state.accessToken = null;
        alert("로그아웃되었습니다.");
      }
    },
    loginCheck: function(state){
      Axios.get('http://localhost:8081/api/members/login/check', {
        headers:{
          'x-access-token': state.accessToken
        }
      }).then(
         res => {
           if(res.data.status == 409){
            alert("접근권한이 없습니다.");
            console.log("로그인 정보가 없음.");
            router.push("/login");
           }
           if(res.data.status == 200){
            state.user = res.data.data;
            //console.log(state.user);
           }
         },
         error => {
           console.log(error);
           //console.log(state.accessToken);
           alert("로그인 정보가 없음");
           router.push("/login");
         }
      )
    }
  }
  
})
