<template>

<div class="wrapper">
    <!--sidebar menu -->
    <sidebar-menu />

    <!-- Page Content  -->
    <div id="content">
        <!-- nav menu -->
        <nav-menu />
        
        <div class="admin-form-group">
            <h4 class="title-1">충전 관리</h4>  
        </div>
        
        <div class="line"></div>
        <div class="admin-form-group" style="margin-bottom:30px">
            <h6 class="title-2">충전 계좌 관리</h6>
            <div class="card" style="width:18rem;">
                <div class="card-body account">
                    <p class="card-text">은행 : 국민은행</p>
                    <p class="card-text">계좌번호 : 123-4567-89012</p>
                    <p class="card-text">계좌 소유자 이름 : 오로라</p>
                    
                </div>
            </div>
        </div>
        <div class="admin-form-group">
            <h6 class="title-3 coupon">고객 충전 혜택(쿠폰)관리</h6>
            <p class="sub-title-3">고객의 충전 금액의 혜택을 추가하여 가게 마케팅 및 홍보에 활용하세요</p>
            <table class="table table-white text-center table-border-style">
                <thead>
                    <tr>
                        <th scope="col">충전 혜택 제목</th>
                        <th scope="col">충전 혜택 내용</th>
                        <th scope="col">충전 조건</th>
                        <th scope="col">쿠폰 혜택</th>
                        <th scope="col">시작일</th>
                        <th scope="col">종료일</th>
                        <th scope="col">수정/복사/삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>최초 충전</td>
                        <td>20,000원</td>
                        <td>10,000원 이상</td>
                        <td>10%</td>
                        <td>2019-10-10</td>
                        <td>2019-10-10</td>
                        <td>아이콘</td>
                    </tr>
                    <tr>
                        <td>최초 충전</td>
                        <td>20,000원</td>
                        <td>10,000원 이상</td>
                        <td>10%</td>
                        <td>2019-10-10</td>
                        <td>2019-10-10</td>
                        <td>아이콘</td>
                    </tr>
                    <tr>
                        <td>최초 충전</td>
                        <td>20,000원</td>
                        <td>10,000원 이상</td>
                        <td>10%</td>
                        <td>2019-10-10</td>
                        <td>2019-10-10</td>
                        <td>아이콘</td>
                    </tr>
                    <tr>
                        <td>최초 충전</td>
                        <td>20,000원</td>
                        <td>10,000원 이상</td>
                        <td>10%</td>
                        <td>2019-10-10</td>
                        <td>2019-10-10</td>
                        <td>아이콘</td>
                    </tr>
                    <tr>
                        <td>최초 충전</td>
                        <td>20,000원</td>
                        <td>10,000원 이상</td>
                        <td>10%</td>
                        <td>2019-10-10</td>
                        <td>2019-10-10</td>
                        <td>아이콘</td>
                    </tr>
                </tbody>
            </table>
        </div>

         <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal" @close="showModal = false" class="coupon-modal">

            <!-- modal header start -->
            <h3 slot="header" style="text-align:left;">
            신규 혜택(쿠폰)등록
            <i class="closeModalBtn fa fa-times" aria-hidden="true" @click="showModal = false" style="float:right;"></i>
            </h3>
            <!-- modal header end -->

            <!-- modal body start -->
            
            <span slot="body" style="max-width:100%;">

            <form class="was-validated coupon-modal-body" @submit.prevent="couponSubmit">
                <div class="form-group row">
                <label class="col-sm-3 control-label">제목</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control coupon-title" v-model="taxInfo.staff_name" placeholder="최초 충전 혜택" required>
                </div>
                </div>

                <div class="form-group row">
                <label class="col-sm-3 control-label">내용</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control coupon-content" v-model="taxInfo.staff_phone" placeholder="최초 충전하는 분들에게 10% 더 드려요!" required>
                </div>
                </div>

                <div class="form-group row coupon-condition">
                <label class="col-sm-3 control-label">쿠폰 지급 조건</label>
                <div class="col-sm-9 price">
                    <label class="control-label">{{price}}원 이상</label ><button type="button" class="btn btn-file">변경하기</button>
                </div>
                </div>

                <div class="form-group coupon-kind">
                    <div class="row">
                        <label class="col-sm-3 control-label">쿠폰 종류</label>
                        <div class="col-sm-9 form-inline">
                            <label class="radio-inline">
                                <input type="radio" value="option1"> 비율
                            </label>
                            <input type="text" class="form-control" v-model="taxInfo.company_number"  placeholder="1에서 100까지 입력 가능" required>
                        </div>
                    </div>
                    <div class="row coupon" style="margin-top:30px;">
                        <label class="col-sm-3 control-label"></label>
                        <div class="col-sm-9 form-inline">
                            <label class="radio-inline">
                                <input type="radio" value="option1">&nbsp;&nbsp;정액
                            </label>
                            <div class="input-group">
                                <input type="text" class="form-control" v-model="taxInfo.company_number"  placeholder="1에서 100까지 입력 가능" required>
                                <div class="input-group-addon">%</div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="form-group row">
                    <label class="col-sm-3 control-label">혜택 기간 설정</label>
                    <div class="col-sm-9 from-inline">
                        <div class="col-sm">
                            <label class="control-label">시작일</label>
                        </div>
                        <input type="text" class="form-control" v-model="taxInfo.company_name" placeholder="상호(법인명) 입력" required>
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
        </modal>


        <div class="admin-form-group text-right">
            <button type="button" id="showw-modal" class="btn" @click="showModal = true">신규 혜택 등록</button>
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
        </div>
    </div>
</div>

</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Nav from '../components/AdminNav.vue'
import Modal from '../components/common/Modal'

export default {

    components: {
        'sidebar-menu': Sidebar,
        'nav-menu': Nav,
        Modal: Modal
    },
    data (){
        return {
            showModal: false,
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
            },
            price : "10,000"
        }
    },
    methods:{
        //쿠폰 Modal POST
        async couponSubmit(){
            console.log('쿠폰정보 출력: '+this.taxInfo); //세금계산서 입력정보 출력
        }
    }
    

}
</script>

<style>



</style>