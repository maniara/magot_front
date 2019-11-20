<template>
  <div class="payment-section">

    <div class="container">
        
        <form class="payment-form was-validated" @submit.prevent="memberInfoSubmit">
            <h1 class="payment-title">요금제 선택 및 결제 정보 입력하기</h1>
            <div class="form-group payment-description">
                <p>나에게 딱 맞는 Magot의 서비스를 선택하고 아래에 결제 정보를 입력하세요.</p>
                <p>다양한 서비스를 폭넓게 이용해 볼 수 있습니다.</p>
                <p>장기 결제는 신용카드로 결제 후에만 사용할 수 있습니다.</p>
            </div>
            
            <!-- 서비스 선택 -->
            <div class="form-group row">
                
                <label class="col-sm-3 control-label">서비스 선택</label>
                <div class="col-sm-4 ">
                    <input type="radio" name="radio-stacked" @click="serviceSelect('payment-select-1')" v-bind:value="payment.service_type1" v-model="payment.service_selected" checked required>
                    <div class="card card-body payment-select-1" id="payment-select-1">
                        <h5 class="card-title">
                            <span class="text-1">가장 많이 선택하는</span>
                            <br/> 
                            <span class="text-2">3% 수수료 요금제</span>
                            <br/>
                            <span class="text-3">결제 금액의 단 3% 수수료 서비스</span>
                            <h6 class="text-price">월 59,000원</h6>
                        </h5>
                    </div>
                </div>
                <div class="col-sm-4">
                    <input type="radio" name="radio-stacked" @click="serviceSelect('payment-select-2')" v-bind:value="payment.service_type2" v-model="payment.service_selected" required>
                    <div class="card card-body payment-select-2" id="payment-select-2">
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
                <label for="" class="col-sm-3 control-label" >신용카드 번호</label>
                <div class="col-sm">
                    <input type="text" class="form-control creditcard-number" v-model="payment.creditcard_number" placeholder="신용카드 번호" required>
                </div>            
            </div>

            <!-- 만료 날짜 선택 -->
            <div class="form-group row">
                <label for="" class="col-sm-3 control-label">만료 날짜</label>
                <div class="form-inline col-sm">
                        <select class="form-control month custom-select" v-model="payment.creditcard_end_month" required>
                            <option value="">월</option>
                            <option value="1">1월</option>
                            <option value="2">2월</option>
                            <option value="3">3월</option>
                            <option value="4">4월</option>
                            <option value="5">5월</option>
                            <option value="6">6월</option>
                            <option value="7">7월</option>
                            <option value="8">8월</option>
                            <option value="9">9월</option>
                            <option value="10">10월</option>
                            <option value="11">11월</option>
                            <option value="12">12월</option>
                        </select>
                        &nbsp;&nbsp;
                        <select class="form-control year custom-select" v-model="payment.creditcard_end_year" required>
                            <option value="">년</option>
                            <option value="2019">2019년</option>
                            <option value="2020">2020년</option>
                            <option value="2021">2021년</option>
                            <option value="2022">2022년</option>
                            <option value="2023">2023년</option>
                        </select>
                </div>            
            </div>

            <!-- 카드 소유자 이름 입력 -->
            <div class="form-group row">
                <label for="" class="col-sm-3 control-label">카드 소유자 이름</label>
                <div class="col-sm">
                    <input type="text" class="form-control" placeholder="카드 소유자 이름" v-model="payment.creditcard_owner" required>
                </div>            
            </div>

            <!-- 세금계산서 발급 신청-->
            <div class="form-group row">
                <label for="" class="col-sm-3 control-label">세금계산서 발급 신청</label>
                <div class="col-sm">
                    <button type="button" id="showw-modal" class="btn btn-file" @click="showModal = true">양식작성</button>
                </div>
            </div>

            <!-- 버튼 -->
            <div class="form-group row">
                <div class="col-sm"> 
                <!--<router-link to="/accountInfo" class="btn next-btn" >다음</router-link>-->
                <button type="submit" class="btn prev-btn">등록</button>
                <router-link to="/accountInfo" class="btn next-btn">다음</router-link>   
                </div>
            </div>
        </form>

        <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal" @close="showModal = false">

            <!-- modal header start -->
            <h3 slot="header">
            세금계산서 신청양식 작성
            <i class="closeModalBtn fa fa-times" aria-hidden="true" @click="showModal = false" style="float:right;"></i>
            </h3>
            <!-- modal header end -->

            <!-- modal body start -->
            
            <span slot="body">

            <form class="was-validated payment-modal-body" @submit.prevent="taxSubmit">
                <div class="form-group row">
                <label class="col-sm-5 control-label">신청자 이름</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" v-model="taxInfo.staff_name" placeholder="신청자 이름 입력" required>
                </div>
                </div>

                <div class="form-group row">
                <label class="col-sm-5 control-label">신청자 전화번호</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" v-model="taxInfo.staff_phone" placeholder="신청자 전화번호 입력" required>
                </div>
                </div>

                <div class="form-group row">
                <label class="col-sm-5 control-label">이메일 주소</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" v-model="taxInfo.company_email" placeholder="이메일 주소 입력" required>
                </div>
                </div>

                <div class="form-group row">
                <label class="col-sm-5 control-label">사업자등록번호</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" v-model="taxInfo.company_number"  placeholder="사업자등록번호 입력" required>
                </div>
                </div>

                <div class="form-group row">
                <label class="col-sm-5 control-label">상호(법인명)</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" v-model="taxInfo.company_name" placeholder="상호(법인명) 입력" required>
                </div>
                </div>

                <div class="form-group row">
                <label class="col-sm-5 control-label">대표자명</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" v-model="taxInfo.company_owner" placeholder="대표자명 입력" required>
                </div>
                </div>

                <!-- 매장 우편번호 찾기 -->
                <div class="form-group row">
                <label class="col-sm-5 control-label">매장 주소</label>
                <div class="input-group col-sm">
                    <input type="text" class="form-control" id="company-postcode" v-model="taxInfo.company_postcode" placeholder="우편번호" required>
                    <div class="input-group-append">
                        <span class="input-group-text input-btn-click" @click="execDaumPostcode('company-postcode', 'company-address','company-detail-address')">우편번호 찾기</span>
                    </div>
                </div>
                </div>
                
                <!-- 매장 주소 -->
                <div class="form-group row">
                <label class="col-sm-5 control-label"></label>
                <div class="col-sm">
                    <input type="text" class="form-control" id="company-address" v-model="taxInfo.company_address" placeholder="주소" required>
                </div>
                </div>

                <!-- 매장 상세 주소 -->
                <div class="form-group row">
                <label class="col-sm-5 control-label"></label>
                <div class="col-sm">
                    <input type="text" class="form-control" id="company-detail-address" v-model="taxInfo.company_detail_address" placeholder="상세주소" required>
                </div>
                </div>

                <div class="modal-footer-form row">
                <div class="col-sm text-center">
                    <button type="submit" class="btn">등록하기</button>       
                </div>               
                </div>

            </form> 
            </span>
            
            <!-- modal body end -->
            
            <!-- modal footer start -->
            <!-- <span slot="footer"></span> -->
            <!-- modal footer end -->

        </modal>
    </div>
  </div>
</template>

<script>
import {addMemberPaymentService, addMemberTax} from '../api';
import Modal from '../components/common/Modal'
export default {
    data () {
        return {
            showModal: false,
            payment:{
                member_id : 'woody', //회원 아이디
                service_selected : '', //서비스 선택,
                service_type1 : '월 59,000원', //서비스 유형 1
                service_type2 : '월 99,000원', //서비스 유형 2
                creditcard_number : '', //신용카드 번호
                creditcard_end_month : '', //신용카드 월 (만료날짜)
                creditcard_end_year : '', //신용카드 년 (만료날짜)
                creditcard_owner : '' //신용카드 소유주
            },
            taxInfo : 
            {
                member_id: 'woody', //회원 아이디
                staff_name : '', //신청자 이름
                staff_phone : '', //신청자 연락처
                company_email : '', //회사 이메일
                company_number : '', //회사 사업자등록번호
                company_name : '', //회사 상호명
                company_owner : '', //회사 대표자 이름
                company_postcode : '', //회사 우편번호
                company_address : '', //회사 주소
                company_detail_address : '', //회사 상세주소
            }
        }
    },
    components: {
        Modal: Modal
    },
    methods :{
        serviceSelect(divClass){
            //document.getElementById()
            var element1 = document.getElementById("payment-select-1");
            element1.classList.remove("active-payment");
            var element2 = document.getElementById("payment-select-2");
            element2.classList.remove("active-payment");

            if(divClass == "payment-select-1")
            element1.classList.add("active-payment");
            if(divClass == "payment-select-2")
            element2.classList.add("active-payment");

        },

        async memberInfoSubmit(){
            alert(
                "회원 아이디: "+this.payment.member_id+
                "\n서비스 선택: "+this.payment.service_selected+
                "\n신용카드 번호: "+this.payment.creditcard_number+
                "\n만료 날짜(월): "+this.payment.creditcard_end_month+
                "\n만료 날짜(년): "+this.payment.creditcard_end_year+
                "\n카드 소유자 이름: "+this.payment.creditcard_owner
            );
            //console.log(this.payment);
            var responseCode = await addMemberPaymentService({
                payment : this.payment
            })
            
           var status = responseCode.data.status;
           if(status == "200")
           {
                alert("결제 정보가 등록되었습니다.");
                this.$router.push('/myToken');
           }

        },

        //세금계산서 Modal POST
        async taxSubmit(){

            console.log('세금계산서 출력: '+this.taxInfo); //세금계산서 입력정보 출력

            var responseCode = await addMemberTax({
                taxInfo : this.taxInfo
            })

            var status = responseCode.data.status;
            //console.log(responseCode.data);
            if(status == "200")
            {
                alert("세금계산서 신청 완료");
                this.showModal = false;
            }

        }
    }
}
</script>

<style>

</style>