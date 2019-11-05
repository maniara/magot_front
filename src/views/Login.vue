<template>
    <div class="login-section text-center">
        <div class="container">
            
          <div class="card-body login-wrap">  
            <h1>Magot 로그인</h1>
            <div class="form-group">
                <input type="email" class="form-control centered" v-model="email" placeholder="회원 ID(이메일)" >
            </div>

            <div class="form-group">
                <input type="password" class="form-control centered" v-model="password" placeholder="비밀번호" maxlength="8"> 
            </div>

            <div class="form-group">
                <router-link to="/passwordReset"><u>비밀번호를 잊어버리셨나요?</u></router-link>

                <p id="errResponse">{{response}}</p>
            </div>

            <div class="login-form-group">
                <button type="button" class="btn login-submit" @click="submitForm">로그인</button> 
            </div>
            
            <div class="form-group">
                <p>아직 계정이 없으신가요?
                    <router-link to="/signup" class="join-link"><u>회원가입</u></router-link>
                </p>
            </div>
          </div>

        </div>
    </div>
<!--
  <div class="container">
        <h1>Login</h1>
        <form style="width:400px;margin:auto;margin-top:30px;text-align:left;" @submit.prevent="submitForm" > 
            
            <div class="form-group">
                <label for="inputEmail">이메일 주소</label>
                    <input type="email" class="form-control" v-model="email" placeholder="이메일을 입력하세요" >
            </div>

            <div class="form-group"> 
                <label for="inputPassword">패스워드</label>
                <input type="password" class="form-control" v-model="password" placeholder="패스워드를 입력하세요" > 
            </div>
            <button type="submit" class="btn btn-default">로그인</button>
        </form>
        <p id="errResponse">{{response}}</p>
        
        <validation-provider rules="required" v-slot="{ errors }">
            <input v-model="value" name="myinput" type="text" />
            <span>{{ errors[0] }}</span>
        </validation-provider>

    </div>
-->
</template>

<script>
import { loginUser} from '../api'

export default {
    
    data() {
        return {
            email: '',
            password: '',
            response: '',
            value:'',
        }
    },
    created(){
        this.$store.commit('logout');
    },
    methods: {
        
        async submitForm() {

            console.log("로그인");
            

            var result = this.response = await loginUser({
                email: this.email,
                password: this.password
            })
            var status = result.data.status;
            if(status == 400)
                this.response = "가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.";
            if(status == 200)
            {
                this.$store.commit('loginToken', result.data.data.accessToken);
                
                this.$router.push("/admin");
            }
        }
        
    }
    
}
</script>

<style>

.card-body{
    border-radius: 5px;
}
.login-wrap{
    border:1px solid #D2D2D7;
    box-shadow: 2px 2px 2px 2px #D2D2D7;
    max-width:600px;
    min-height:630px;
    margin: 0 auto;
    background-color:#f5f6f7;
}

.form-group{
    margin-bottom:40px;
}

.login-form-group{
    margin-bottom:20px;
}
.login-section{
    margin-top:54px;
}

.login-section h1{
    margin-top:10px;
    margin-bottom:45px;
    font-size:55px;
    font-weight:bold;
}

.centered{
    margin:0 auto;
}
.login-submit{
    width:300px;
}

.join-link{
    color:#0F0F0F;
    font-weight:bold;
}

#errResponse{
    color:#ff496e;
    margin-top:20px;
}
</style>