<template>
  <div class="myToken-section">
      <div class="container">
          <form class="myToken-form was-validated">
            <!-- 토큰 타이틀 및 내용 설명 -->
            <h1 class="myToken-title">가게 토큰 만들기</h1>
            <div class="form-group myToken-description">
                <p>나의 가게에서 사용할 토큰의 정보를 입력하세요.</p>
                <p>가게의 손님이 현금으로 충전하여 포인트 형태로 변환하는 토큰에 대한 내용으로</p>
                <p>가게의 상호와 이미지에 맞는 내용을 선택해 주세요.</p>
            </div>

            <!-- 토큰 이름 입력-->
            <div class="form-group row">
                <label for="tokenName" class="col-sm-5 control-label">토큰 이름</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control token-name" placeholder="Magot Token_01" required>
                </div>            
            </div>
            <!-- 토큰 심볼 입력-->
            <div class="form-group row">
                <label for="tokenSymbol" class="col-sm-5 control-label">토큰 심볼(약자)</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control token-symbol" placeholder="MGT" required>
                </div>            
            </div>

            <!-- 버튼 -->
            <div class="form-group row">
                <div class="col-sm">
                <router-link to="/accountInfo" class="btn prev-btn">이전</router-link>    
                <router-link to="/" class="btn next-btn">발행하기</router-link>
                </div>
            </div>
          </form>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>


</style>