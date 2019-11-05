<template>
  <div class="payment-section">
    <div class="container">
        <h1 class="service-title">요금제 선택 및 결제 정보 입력하기</h1>
        <div class="form-group service-description">
            <p>나에게 딱 맞는 Magot의 서비스를 선택하고 아래에 결제 정보를 입력하세요.</p>
            <p>다양한 서비스를 폭넓게 이용해 볼 수 있습니다.</p>
            <p>장기 결제는 신용카드로 결제 후에만 사용할 수 있습니다.</p>
        </div>
        
        <!-- 서비스 선택 -->
        <div class="form-group row">
            <label for="" class="col-sm-3 control-label">서비스 선택</label>
            <div class="form-inline col-sm-8">
                <div class="card card-body col-sm-4 service-select-1">
                    <h5 class="card-title">
                        <span class="text-1">가장 많이 선택하는</span>
                        <br/> 
                        <span class="text-2">3% 수수료 요금제</span>
                        <br/>
                        <span class="text-3">결제 금액의 단 3% 수수료 서비스</span>
                        <h6 class="text-price">월 59,000원</h6>
                    </h5>
                </div>
                <div class="card card-body col-sm-4 service-select-2">
                    <h5 class="card-title">
                        <span class="text-1">가장 부담없는</span>
                        <br/> 
                        <span class="text-2">2% 수수료 요금제</span>
                        <br/>
                        <span class="text-3">결제 금액의 단 2% 수수료 서비스</span>
                        <h6 class="text-price">월 99,000원</h6>
                    </h5>
                </div>
            </div>            
        </div>

        <!-- 신용카드 번호 입력-->
        <div class="form-group row">
            <label for="" class="col-sm-3 control-label">신용카드 번호</label>
            <div class="col-sm-8">
                <input type="text" class="form-control creditcard-number" placeholder="신용카드 번호">
            </div>            
        </div>

        <!-- 만료 날짜 선택 -->
        <div class="form-group row">
            <label for="" class="col-sm-3 control-label">만료 날짜</label>
            <div class="form-inline col-sm-8">
                    <select class="form-control month">
                        <option selected>월</option>
                        <option value="">1월</option>
                        <option value="">2월</option>
                        <option value="">3월</option>
                        <option value="">4월</option>
                        <option value="">5월</option>
                        <option value="">6월</option>
                        <option value="">7월</option>
                        <option value="">8월</option>
                        <option value="">9월</option>
                        <option value="">10월</option>
                        <option value="">11월</option>
                        <option value="">12월</option>
                    </select>
                    &nbsp;&nbsp;
                    <select class="form-control year">
                        <option selected>년</option>
                        <option value="">2019년</option>
                        <option value="">2020년</option>
                        <option value="">2021년</option>
                        <option value="">2022년</option>
                        <option value="">2023년</option>

                    </select>
            </div>            
        </div>

        <!-- 카드 소유자 이름 입력 -->
        <div class="form-group row">
            <label for="" class="col-sm-3 control-label">카드 소유자 이름</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" placeholder="카드 소유자 이름">
            </div>            
        </div>

        <!-- 버튼 -->
        <div class="form-group row">
            <div class="col-sm">
            <router-link to="/memberInfo" class="btn prev-btn">이전</router-link>    
            <router-link to="/myToken" class="btn next-btn">다음</router-link>
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

.payment-section{
    margin-top:95px;
}
.payment-section h1{
    font-size:25px;
    margin-bottom:25px;
}
.payment-section .service-description p {
    font-size:17px;
    color:#888888;
    letter-spacing: 0;
    font-weight:500;
    margin-bottom:9px;
}

.month, .year{
    width:90px !important;
    height:45px;
}
.year{
    margin-left:30px;
}

.service-select-1, .service-select-2{
    width: 250px;
    height:125px;
    border-radius: 10px;
    border-color:#1E3444;
    padding: 11px 14px 0px 14px;
    cursor: pointer;
    
}
.service-select-1 h5, .service-select-2 h5{
    font-weight: bold !important;
}

.service-select-1:hover, .service-select-2:hover{
    background:#1E3444;
    color:#fff;
}

.service-select-2{
    border-color:#1E3444;
    color:#213C4F;
}

.service-select-1 .text-1, .service-select-2 .text-1{
    font-size:15px;
} 

.service-select-1 .text-2, .service-select-2 .text-2{
    font-size:21px;
}

.service-select-1 .text-3, .service-select-2 .text-3{
    font-size:11px;
    font-weight: 400;
    letter-spacing: 0;
}
.service-select-1 .text-price, .service-select-2 .text-price{
    padding-top:3px;
    font-size:21px;
    text-align: right;
    font-weight:bold;
}

@media (min-width:768px) {
  .service-select-2{
    margin-left:0px;
  }
}
@media (min-width:576px){
  .service-select-2{
    margin-left:30px;
  }
}

</style>