<template>
    <div class="reset-complete-section">
        <div class="container">
          <!-- 비밀번호 초기화하기 입력 타이틀 및 내용 설명 -->
          <h1 class="reset-complete-title">Magot 비밀번호 초기화하기 완료</h1>
          <div class="form-group reset-complete-description">
              <p>입력하신 이메일로 비밀번호 초기화에 필요한 메일을 발송하였습니다</p>
          </div>
          <!-- 회원 이메일 입력-->
          <div class="form-group row">
              <label for="sendEmail" class="col-sm control-label">
                  magot@gmail.com
              </label>
          </div>
          <div class="form-group row">
              <label for="sendEmail" class="col-sm control-label">
                  메일 확인 후 비밀번호를 재설정하고 로그인 해 주세요
              </label>
          </div>

          <!-- 버튼 -->
          <div class="form-group row">
              <div class="col-sm">
              <router-link to="/passwordReset" class="btn prev-btn">이전</router-link>    
              <router-link to="/" class="btn next-btn">다음</router-link>
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

.reset-complete-section{
  margin-top:95px;
}

.reset-complete-section h1{
  font-size:25px;
  margin-bottom:17px;
}

.resert-completet-section .reset-complete-description p {
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