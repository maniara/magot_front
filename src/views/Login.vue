<template>
    <div class="login-section text-center">
        <div class="container">
            
          <div class="login-wrap">  
            <h1>Magot 로그인</h1>

            <div class="login-form-group">
                <input type="text" class="form-control centered" v-model="id" placeholder="회원 ID" >
            </div>

            <div class="login-form-group">
                <input type="password" class="form-control centered" v-model="password" placeholder="비밀번호" maxlength="8"> 
            </div>

            <div class="login-form-group">
                <router-link to="/passwordReset"><u style="color:#888888; font-weight:500;">비밀번호를 잊어버리셨나요?</u></router-link>

                <p id="errResponse">{{response}}</p>
            </div>

            <div class="login-button-form-group">
                <button type="button" class="btn login-submit" @click="submitForm">로그인</button> 
            </div>
            
            <div class="login-form-group">
                <p id="signup-recommand" style="">아직 계정이 없으신가요?
                    <router-link to="/signup" class="join-link"><u>회원가입</u></router-link>
                </p>
            </div>
          </div>

        </div>
    </div>

</template>

<script>
import { loginUser} from '../api'

export default {
    
    data() {
        return {
            id: '',
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
                id: this.id,
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

.login-wrap{
    padding-top:45px;
    border-radius: 5px;
    border:1px solid #D2D2D7;
    box-shadow: 3px 3px 4px 0px #D2D2D7;
    max-width:600px;
    min-height:630px;
    margin: 0 auto;
    background-color:#ffffff;
}
.login-form-group{
    margin-bottom:40px;
}

.login-button-form-group{
    margin-bottom:20px;
}
.login-section{
    margin-top:54px;
}

.login-section h1{
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

.signup-recommand{
    color:#0f0f0f;font-size:17px;
}
</style>