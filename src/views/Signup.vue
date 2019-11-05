<template>
  <div class="join">
    <section class="join-section text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg mx-auto">
            
            <form style="text-align:left;">
                <h1 class="join-title">Magot 판매자 계정 만들기</h1>

                <!-- email send form-->
                <div class="form-group">
                    <div class="input-group">
                        <input type="email" class="form-control" id="email-input" @keyup="textInputCheck" v-model="email" placeholder="회원 ID(이메일)" >
                        <div class="input-group-append">
                          <span class="input-group-text emailSendClick" @click="emailSend">인증번호 전송 </span>
                        </div>
                    </div>
                    <label for="inputEmail" class="input-bottom-text" id="email-message" v-text="email_state"></label>    
                </div>
                
                <!-- code authentication form-->
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" id="code-input" v-model="code" placeholder="코드를 입력하세요">
                        <div class="input-group-append">
                          <span class="input-group-text inputCodeClick" @click="codeVerify">인증번호 인증 </span>
                        </div>
                    </div>
                    <label for="inputCode" class="input-bottom-text" id="code-verify-message" v-text="verify_state" ></label>
                </div>

                <!-- nickname form -->
                <div class="form-group">
                    <input type="text" class="form-control" id="nickname-input" @keyup="textInputCheck" v-model="nickname" placeholder="사용자 이름" >
                    <label for="nickname" class="input-bottom-text" id="nickname-message" v-text="nickname_state"></label>
                </div>

                <!-- password form -->
                <div class="form-group">
                    <input type="password" class="form-control" id="password-input" @keyup="textInputCheck" v-model="password" placeholder="비밀번호" maxlength="8"> 
                    <label for="inputPassword" class="input-bottom-text" id="password-message" v-text="password_state"></label>
                </div>

                <!-- password confrim form -->
                <div class="form-group">
                    <input type="password" class="form-control" id="password-confirm-input" @keyup="textInputCheck" v-model="password_confirm" placeholder="비밀번호 확인" maxlength="8"> 
                    <label for="inputPassword" class="input-bottom-text" id="password-confirm-message" v-text="password_confirm_state"></label>
                </div>

                <!-- checkbox form -->
                <div class="form-group">
                  <input type="checkbox" class="check-input" id="checkbox-input" v-model="checked">
                  <p class="form-check-label">
                    Magot 서비스의 <u>이용약관</u> 및 <u>개인정보처리방침</u>에 동의합니다.
                  </p>
                  <label for="inputCheckbox" class="input-bottom-text" id="checkbox-message" v-text="checkbox_state"></label>
               </div>
               <div class="form-group">
                <!--<button type="button" class="btn btn-default submit" @click="signupMember">다음</button>-->
                <router-link to="/memberInfo" class="btn">다음</router-link>
                <br />
                
                <p class="bottom-link">이미 계정이 있으신가요? <router-link to="/login"><u>로그인</u></router-link></p>
               </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { emailSendMember, codeVerifyMemeber, signupMember } from '../api';
export default {
  data() {
    return {
      email: "",
      code: "",
      nickname: "",
      password: "",
      password_confirm: "",
      password_message: "",
      checked: false,
      verify_state:"이메일 인증코드를 입력해 주세요.",
      email_state: "이메일 주소를 입력해 주세요",
      password_state: "문자,숫자,기호를 조합하여 8자 이상을 입력해 주세요",
      password_confirm_state: "비밀번호를 한번 더 입력해 주세요",
      checkbox_state: "",
      nickname_state: "문자,숫자,마침표 사용할 수 있습니다",
      securityFlag: false
    } 
   
  },
  methods: {

      borderColorChange : function(id,color)
      {
        document.getElementById(id).style.borderColor=color;
      },
      textColorChange : function(id, color)
      {
        document.getElementById(id).style.color=color;
      },
      emailCheckForm : function(str)
      {
        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (regExp.test(str)) return true;
        else return false;
      },
      textInputCheck : function(e){
        var val = e.target.value;        
        var id = e.target.id;

        if(id == "email-input")
        {
          var result = this.emailCheckForm(val);
          
          if(result == false)
          {
            this.borderColorChange("email-input","#ff496e");
            this.textColorChange("email-message", "#ff496e");
            this.email_state= "이메일 주소를 정확히 입력해 주세요";
          }
          else
          {
            this.borderColorChange("email-input","#ced4da");
            this.textColorChange("email-message", "#ced4da");
            this.email_state= "";
          }
        }
        else if(id == "nickname-input")
        {
          if(val.length > 0)
          {
            this.borderColorChange("nickname-input","#ced4da");
            this.textColorChange("nickname-message", "#ced4da");
            this.nickname_state= "";
          }
          else
          {
            this.borderColorChange("nickname-input","#ff496e");
            this.textColorChange("nickname-message", "#ff496e");
            this.nickname_state= "문자,숫자,마침표 사용할 수 있습니다";
          }
        }
        else if(id == "password-input")
        {
          if(val.length < 8)
          {
            this.borderColorChange("password-input","#ff496e");
            this.textColorChange("password-message","#ff496e");
            this.password_state = "문자,숫자,기호를 조합하여 8자 이상을 입력해 주세요";
          }
          else
          {
            this.borderColorChange("password-input","#ced4da");
            this.textColorChange("password-message","#ced4da");
            this.password_state = "";
          }
        }
        else if(id == "password-confirm-input")
        {
          if(val.length >=8 && (this.password != this.password_confirm))
          {
            this.borderColorChange("password-confirm-input","#ff496e");
            this.textColorChange("password-confirm-message","#ff496e");
            this.password_confirm_state = "비밀번호가 일치하지 않습니다.";
          }
          else if(val.length >=8 && (this.password == this.password_confirm))
          {
            this.borderColorChange("password-confirm-input","#ced4da");
            this.textColorChange("password-confirm-message","green");
            this.password_confirm_state = "";
          }
        }
      },
      async emailSend(){
        var responseSignup = await emailSendMember({
          email: this.email
        })
        var status = responseSignup.data.status;

        if(status == 400)
        {
            this.email_state = "중복된 이메일 입니다.";
            this.borderColorChange("email-input","#ff496e");
            this.textColorChange("email-message","#ff496e");
            //location.reload();
            return false;
        }
        else if(status == 410)
        {
            this.email_state = "이메일 주소를 정확히 입력해 주세요.";
            this.borderColorChange("email-input","#ff496e");
            this.textColorChange("email-message","#ff496e");
            //location.reload();
            return false;
        }
        else if(status == 200)
            this.email_state = "이메일을 확인하시기 바랍니다.";
            this.borderColorChange("email-input","#ced4da");
            this.textColorChange("email-message","green");
    },
    async codeVerify(){
        var responseCode = await codeVerifyMemeber({
          authCode: this.code
        })
        var status = responseCode.data.status;

        if(status == 400)
        {
          this.borderColorChange("code-input","#ff496e");
          this.textColorChange("code-verify-message","#ff496e");
          this.verify_state = "코드가 일치하지 않거나 존재하지 않습니다.";
          return false;
        }
        else if(status == 1000)
        {
          this.borderColorChange("code-input","#ff496e");
          this.textColorChange("code-verify-message","#ff496e");
          this.verify_state = "코드 인증유효 시간이 만료되었습니다.";
          return false;
        }
        else if(status == 200)
        {
          this.borderColorChange("code-input","#ced4da");
          this.textColorChange("code-verify-message","green");
          this.verify_state = "인증 확인";
          this.securityFlag = true;
        }
        
    },
    async signupMember(){
      if(this.email == '')
      {
        this.borderColorChange("email-input","#ff496e");
        this.textColorChange("email-message","#ff496e");
        document.getElementById("email-input").focus(); 
        return false;
      }
      if(this.code == '')
      {
        this.borderColorChange("code-input","#ff496e");
        this.textColorChange("code-verify-message","#ff496e");
        document.getElementById("code-input").focus(); 
        return false;
      }
      if(this.nickname == '')
      {
        this.borderColorChange("nickname-input","#ff496e");
        this.textColorChange("nickname-message","#ff496e");
        document.getElementById("nickname-input").focus(); 
        return false;
      }
      if(this.password == '')
      {
        this.borderColorChange("password-input","#ff496e");
        this.textColorChange("password-message","#ff496e");
        document.getElementById("password-input").focus(); 
        return false;
      }
      if(this.password_confirm == '' || (this.password_confirm != this.password))
      {
        this.borderColorChange("password-confirm-input","#ff496e");
        this.textColorChange("password-confirm-message","#ff496e");
        this.password_confirm_state = "비밀번호가 일치하지 않습니다.";
        document.getElementById("password-confirm-message").focus();
        return false;
      }
      if(this.securityFlag == false)
      {
        alert("이메일 인증을 해주시기 바랍니다.");
        return false;
      }
      if(this.checked == false)
      {
        this.borderColorChange("checkbox-input", "#ff496e");
        this.textColorChange("checkbox-message", "#ff496e");
        document.getElementById("checkbox-input").focus();
        this.checkbox_state = "이용약관 및 개인정보처리방침을 확인하고 동의해 주세요"
      }
      if(this.securityFlag == true && this.checked == true)
      { 
        
        var responseCode = await signupMember({
          email : this.email,
          nickname : this.nickname,
          password : this.password
        })
        var status = responseCode.data.status;
        if(status == "200")
        {
          alert("회원가입이 완료되었습니다.");
          location.href="/login";
        }
        
        //location.href=""
      }

    }
  }
}
</script>

<style>

.join-section{
margin-top:95px;
}
.join-title{
  font-size:25px;
  margin-bottom:25px;
}
.input-bottom-text{
  font-size:13px;padding-left:10px;color:gray;
  margin-bottom:0;
}
.check-input{
  position: absolute;
  margin-top:5px;
}
.form-check-label{
  font-size:17px;
  margin-left:25px;
  font-weight: bold;
}

.emailSendClick, .inputCodeClick{
cursor:pointer;
}

.code-verify, .password-confirm{
  margin-top:10px;
  color:red;
}
.btn, .btn:hover {
  color:#fff;
}

.bottom-link{
  padding-top:30px;color:#111111;
}
.bottom-link a{
  color:#111111;
  font-weight:bold;
}

</style>