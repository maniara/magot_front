<template>
  <div class="reset-section">
     <div class="container">
          <!-- 비밀번호 초기화하기 입력 타이틀 및 내용 설명 -->
          <h1 class="reset-title">Magot 비밀번호 초기화하기</h1>
          <div class="form-group reset-description">
              <p>비밀번호 초기화가 필요한 이메일을 입력하세요</p>
          </div>
          <!-- 회원 이메일 입력-->
          <div class="form-group row">
              <label for="resetEmail" class="col-sm-3 control-label">회원 이메일</label>
              <div class="col-sm-8">
                  <input type="text" class="form-control reset-email" placeholder="회원 이메일">
              </div>            
          </div>

          <!-- 버튼 -->
          <div class="reset-btn-form-group row">
              <div class="col-sm">
              <router-link to="/accountInfo" class="btn prev-btn">이전</router-link>      
              <router-link to="/passwordChange" class="btn next-btn">초기화 하기</router-link>
              </div>
          </div>

     </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style>
.reset-section{
  margin-top:95px;
}

.reset-section h1{
  font-size:25px;
  margin-bottom:17px;
}

.reset-section .reset-description p {
    font-size:17px;
    color: #9e9e9e;;
    letter-spacing: 0;
    font-weight:500;
    margin-bottom:9px;
}

.reset-btn-form-group{
  margin-top:150px;
}
</style>