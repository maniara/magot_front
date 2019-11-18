<template>
  <div class="signup">
    <section class="signup-section text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg mx-auto">
            
            <form class="signup-form">
                <h1 class="signup-title">Magot 판매자 계정 만들기</h1>

                <!-- id send form-->
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" id="id-input" ref="id-input" @keyup="textInputCheck" v-model="id" placeholder="회원 ID" >
                        <div class="input-group-append">
                          <span class="input-group-text input-btn-click" @click="idInputCheck">중복확인</span>
                        </div>
                    </div>
                    <label for="inputId" class="input-bottom-text" id="id-message" v-text="id_state"></label>    
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
                <button type="button" class="btn btn-default prev-btn" @click="signupMember">등록</button>
                <!--<router-link to="/memberInfo" class="btn next-btn">건너뛰기</router-link>-->
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
import { signupMember, idCheckMember } from '../api';
export default {
  data() {
    return {
      id: "",
      code: "",
      nickname: "",
      password: "",
      password_confirm: "",
      password_message: "",
      checked: false,
      id_state: "아이디를 입력해 주세요",
      password_state: "문자,숫자,기호를 조합하여 8자 이상을 입력해 주세요",
      password_confirm_state: "비밀번호를 한번 더 입력해 주세요",
      checkbox_state: "",
      nickname_state: "문자,숫자,마침표 사용할 수 있습니다",
      securityFlag: false,
      defaultColor: "#ced4da",
      errorColor: "#ff496e",
      successColor: "green"
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
      textInputCheck : function(e){
        var val = e.target.value;        
        var id = e.target.id;
 
        if(id == "id-input")
        {
          if(val.length > 0)
          {
            this.borderColorChange("id-input",this.defaultColor);
            this.textColorChange("id-message", this.defaultColor);
            this.id_state= "";
          }
          else
          {
            this.borderColorChange("id-input",this.errorColor);
            this.textColorChange("id-message", this.errorColor);
            this.id_state= "아이디를 입력해 주세요";
          }

        }
        if(id == "nickname-input")
        {
          if(val.length > 0)
          {
            this.borderColorChange("nickname-input",this.defaultColor);
            this.textColorChange("nickname-message", this.defaultColor);
            this.nickname_state= "";
          }
          else
          {
            this.borderColorChange("nickname-input",this.errorColor);
            this.textColorChange("nickname-message", this.errorColor);
            this.nickname_state= "문자,숫자,마침표 사용할 수 있습니다";
          }
        }
        if(id == "password-input")
        {
          if(val.length < 8)
          {
            this.borderColorChange("password-input",this.errorColor);
            this.textColorChange("password-message",this.errorColor);
            this.password_state = "문자,숫자,기호를 조합하여 8자 이상을 입력해 주세요";
          }
          else
          {
            this.borderColorChange("password-input",this.defaultColor);
            this.textColorChange("password-message",this.defaultColor);
            this.password_state = "";
          }
        }
        if(id == "password-confirm-input")
        {
          if(val.length >=8 && (this.password != this.password_confirm))
          {
            this.borderColorChange("password-confirm-input",this.errorColor);
            this.textColorChange("password-confirm-message",this.errorColor);
            this.password_confirm_state = "비밀번호가 일치하지 않습니다.";
          }
          else if(val.length >=8 && (this.password == this.password_confirm))
          {
            this.borderColorChange("password-confirm-input",this.defaultColor);
            this.textColorChange("password-confirm-message",this.successColor);
            this.password_confirm_state = "";
          }
        }
      },
      async idInputCheck(){
        
          var id = this.id;

          if(typeof id == "undefined" || id == null || id == "")
          {
            this.borderColorChange("id-input",this.errorColor);
            this.textColorChange("id-message", this.errorColor);
            this.id_state= "아이디를 입력해 주세요";
            return false; 
          }
            
          var responseIdCheck = await idCheckMember({
            id: this.id
          })

          var status = responseIdCheck.data.status;
          
          if(status == 200)
          {
            this.securityFlag = true;
            this.id_state = "사용 가능한 아이디 입니다.";
            this.borderColorChange("id-input","#ced4da");
            this.textColorChange("id-message",this.successColor);
          }
          else if(status == 400)
          {
            this.securityFlag = false;
            this.id_state = "중복된 아이디 입니다.";
            this.borderColorChange("id-input",this.errorColor);
            this.textColorChange("id-message",this.errorColor);
          }
          else {
            this.securityFlag = false;
            alert("서버 오류로 중단 되었습니다.");
            location.reload();
          }
    },
    async signupMember(){
        if(this.id == '')
        {
          this.borderColorChange("id-input",this.errorColor);
          this.textColorChange("id-message",this.errorColor);
          document.getElementById("id-input").focus(); 
          return false;
        }
        if(this.nickname == '')
        {
          this.borderColorChange("nickname-input",this.errorColor);
          this.textColorChange("nickname-message",this.errorColor);
          document.getElementById("nickname-input").focus(); 
          return false;
        }
        if(this.password == '')
        {
          this.borderColorChange("password-input",this.errorColor);
          this.textColorChange("password-message",this.errorColor);
          document.getElementById("password-input").focus(); 
          return false;
        }
        if(this.password_confirm == '' || (this.password_confirm != this.password))
        {
          this.borderColorChange("password-confirm-input",this.errorColor);
          this.textColorChange("password-confirm-message",this.errorColor);
          this.password_confirm_state = "비밀번호가 일치하지 않습니다.";
          document.getElementById("password-confirm-message").focus();
          return false;
        }
        if(this.securityFlag == false)
        {
          this.borderColorChange("id-input","#ff496e");
          this.textColorChange("id-message","#ff496e");
          this.id_state = "아이디 중복 체크를 해주시기 바랍니다.";
          document.getElementById("id-input").focus();
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
            id : this.id,
            nickname : this.nickname,
            password : this.password
          })
          var status = responseCode.data.status;
          if(status == "200")
          {
            alert("회원가입이 완료되었습니다.");
            this.$router.push('/memberInfo');
          }
          
        }

    }
  }
}
</script>

<style>

</style>