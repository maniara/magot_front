<template>
  <div class="memberInfo-section">
      <div class="container">

            <form class="memberInfo-form" @submit.prevent="memberInfoSubmit">
              
              <h1>Magot 판매자 정보 입력하기</h1>
              
              <!-- 업체명 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;상호명</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="company-name" v-model="memberInfo.company_name" placeholder="사업자등록증 상호명 입력" required>
                </div>
              </div>

              <!-- 사업자등록번호 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;사업자등록번호</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="company-number" v-model="memberInfo.company_number" placeholder="사업자등록번호 입력" required>
                </div>
              </div>

              <!-- 사업자등록증 사본 첨부 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;사업자등록증 사본 첨부</label>
                <div class="col-sm">
                  <input type="file" ref="file" class="business-file-input" id="business-file-input" style="display:none" @change="onFileChange">
                  <button type="button" class="btn btn-file" @click="$refs.file.click()">파일 선택</button>
                  <span class="filename">{{memberInfo.business_file}}</span>
                </div>
              </div>

              <!-- 대표자명 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;대표자명</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="member-name" v-model="memberInfo.company_owner" placeholder="사업자등록증 대표자명 입력" required>
                </div>
              </div>
              
             <hr style="margin-bottom:30px;">

              <!-- 연락처 1 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;회사 연락처 </label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="company-phone-1" v-model="memberInfo.company_phone1" placeholder="연락처 입력" required>
                </div>
              </div>

              <!-- 연락처 2 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label">개인 연락처</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="company-phone-2" v-model="memberInfo.company_phone2" placeholder="연락처 입력 (선택)">
                </div>
              </div>

              <!-- 매장명 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;매장명</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="store-name" v-model="memberInfo.store_name" placeholder="매장명 입력" required>
                </div>
              </div>
              
              <!-- 매장 우편번호 찾기 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;매장 주소</label>
                <div class="input-group col-sm">
                    <input type="text" class="form-control" id="store-postcode" v-bind:value="memberInfo.store_postcode" placeholder="우편번호" required>
                    <div class="input-group-append">
                      <span class="input-group-text input-btn-click" @click="execDaumPostcode('store-postcode', 'store-address','store-detail-address')">검색</span>
                    </div>
                </div>
              </div>
              
              <!-- 매장 주소 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"></label>
                <div class="col-sm">
                    <input type="text" class="form-control" id="store-address" placeholder="주소" required>
                </div>
              </div>

              <!-- 매장 상세 주소 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"></label>
                <div class="col-sm">
                    <input type="text" class="form-control" id="store-detail-address" placeholder="상세주소" required>
                </div>
              </div>

              <!-- 매장 로고 -->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;매장 로고</label>
                <div class="col-sm">
                  <input type="file" ref="file" style="display:none" @change="onFileChange">
                  <button type="button" class="btn btn-file" @click="$refs.file.click()">파일 선택</button>
                  <span class="filename">{{memberInfo.store_logo_file}}</span>
                </div>
              </div>

              <!-- 매장 사진-->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;매장 사진</label>
                <div class="col-sm">
                  <input type="file" ref="file" style="display:none" @change="onFileChange">
                  <button type="button" class="btn btn-file" @click="$refs.file.click()">파일 선택</button>
                  <span class="filename">{{memberInfo.store_picture_file}}</span>
                </div>
              </div>

              <!-- 매장 검색 태그-->
              <div class="form-group row">
                <label class="col-sm-5 control-label"><span class="text-danger">*</span>&nbsp;매장 검색 태그</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="store-tag" v-model="memberInfo.store_search_tag" placeholder="#태그입력" required>
                </div>
              </div>

              <!-- footer -->
              <div class="form-group row">
                <div class="col-sm">
                  <!-- <router-link to="/signup" class="btn prev-btn">이전</router-link>-->
                  <button type="submit" class="btn prev-btn">등록 </button>
                  <router-link to="/payment" class="btn next-btn" >다음</router-link>
                </div>
              </div>

              <!-- test button  
              <div class="form-group row">
                 <div class="col-sm">
                  <router-link to="/payment" class="btn" >건너뛰기</router-link>
                </div>
              </div>
              -->

            </form>

      </div>
  </div>
</template>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script>
import { addMemberInfo } from '../api';
import Modal from '../components/common/Modal'
export default {
  data(){
    return {
      showModal: false,
      memberInfo :
      {
        member_id : 'woody', //회원 아이디
        business_file: '', //사업자 사본 파일 이름
        company_name: '',  //회사(업체) 이름
        company_owner: '', // 회사 대표자명
        company_number: '', //회사 사업자등록번호
        company_phone1: '', //회사 전화번호 1
        company_phone2: '', //회사 전화번호 2
        store_postcode: '', //가게 우편번호,
        store_address: '', //가게 주소,
        store_detail_address: '', //가게 상세주소
        store_name: '', //가게 이름
        store_logo_file: 'logo.jpg', //가게 로고 파일 이름
        store_picture_file: 'store.jpg', //가게 사진 파일 이름
        store_search_tag: '', //가게 태그
      }
    }
  },
  components: {
    Modal: Modal
  },
  methods: {
    onFileChange(e){
      //console.log(e.target).files[0];
      var fileName = e.target.files[0].name;

      this.memberInfo.business_file = fileName //파일명
  
    },
    execDaumPostcode(postcodeID,addressID,detailAddressID){
        console.log("우편번호 검색");
        new daum.Postcode({
          oncomplete: function(data){
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.

            var addr = ''; // 주소 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            
            document.getElementById(postcodeID).value = data.zonecode;
            document.getElementById(addressID).value = addr;

            //document.getElementById('store-postcode').value = data.zonecode;
            //document.getElementById("store-address").value = addr;
            
            // 커서를 상세주소 필드로 이동한다.
            //document.getElementById("store-detail-address").focus();
            document.getElementById(detailAddressID).focus();
          }
        }).open();
    },

    async memberInfoSubmit(){
      
      //this.memberInfo.store_postcode = document.getElementById('store-postcode').value;

      //this.memberInfo.store_address = document.getElementById('store-address').value;
      //this.memberInfo.store_detail_address = document.getElementById('store-detail-address').value;

      console.log('판매자 입력정보 출력: '+this.memberInfo); //판매자 입력정보 출력
      
      /*
      var responseCode = await addMemberInfo({
        memberInfo: this.memberInfo
      })
    
      var status = responseCode.data.status;
      console.log(responseCode.data);
      if(status == "200")
      {
        alert("판매자 정보 입력 등록 완료");
        return this.$router.push('/payment');
      }
      else
      {
        alert("Bad Request!!");
        return this.$router.push('memberInfo');
      }
      */
      
    }

  }
  

}
</script>

<style>

</style>