<template>
    <div class="account-section">
        <div class="container">
          <form class="accountInfo-form was-validated"> 
                <!-- 가계 계좌 정보 입력 타이틀 및 내용 설명 -->
                <h1 class="account-title">가게 계좌 정보 입력</h1>
                <div class="form-group account-description">
                    <p>가게의 손님이 입금한 현금을 받을 가게 계좌 정보를 입력해 주세요.</p>
                </div>

                <!-- 자산 보유 은행 입력-->
                <div class="form-group row">
                    <label for="accountBank" class="col-sm-5 control-label">자산 보유 은행</label>
                    <div class="col-sm">
                        <input type="text" class="form-control account-bank" placeholder="자산 보유 은행" required>
                    </div>            
                </div>
                <!-- 자산 보유 계좌 번호 입력-->
                <div class="form-group row">
                    <label for="accountNumber" class="col-sm-5 control-label">자산 보유 계좌 번호</label>
                    <div class="col-sm">
                        <input type="text" class="form-control account-number" placeholder="자산 보유 계좌 번호" required>
                    </div>            
                </div>
                <!-- 자산 보유 계좌 소유주 입력-->
                <div class="form-group row">
                    <label for="accountOwner" class="col-sm-5 control-label">자산 보유 계좌 소유주</label>
                    <div class="col-sm">
                        <input type="text" class="form-control account-owner" placeholder="자산 보유 계좌 소유주" required>
                    </div>            
                </div>

                <!-- 계좌 인증-->
                <div class="form-group row">
                    <label for="accountAuthentication" class="col-sm-5 control-label">계좌 인증</label>
                    <div class="col-sm">
                        <button type="button" class="btn btn-file account-auth">계좌 인증</button>
                        </div>         
                </div>

                <!-- 계좌 사본 첨부-->
                <div class="form-group row">
                    <label for="accountAuthentication" class="col-sm-5 control-label">계좌 사본 첨부</label>
                    <div class="col-sm">
                        <button type="button" class="btn btn-file account-auth">파일 선택</button>
                    </div>    
                </div>

                <!-- 버튼 -->
                <div class="form-group row">
                    <div class="col-sm">
                    <router-link to="/payment" class="btn prev-btn">이전</router-link>    
                    <router-link to="/myToken" class="btn next-btn">다음</router-link>
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