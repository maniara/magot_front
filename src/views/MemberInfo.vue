<template>
  <div class="memberInfo-section">
      <div class="container">
            <form class="form-horizontal">
              
              <h1>Magot 판매자 정보 입력하기</h1>
              
              <!-- 업체명 -->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">업체명</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="업체명 입력">
                </div>
              </div>

              <!-- 대표자명 -->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">대표자명</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="대표자명 입력">
                </div>
              </div>

              <!-- 사업자등록번호 -->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">사업자등록번호</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="사업자등록번호 입력">
                </div>
              </div>

              <!-- 사업자등록증 사본 첨부 -->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">사업자등록증 사본 첨부</label>
                <div class="col-sm-8">
                  <input type="file" ref="file" id="business-file-input" style="display:none" @change="onFileChange">
                  <button type="button" class="btn btn-file" @click="$refs.file.click()">파일 선택</button>
                  <span class="filename">{{businessFileName}}</span>
                </div>
              </div>

              <!-- 연락처 1 -->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">연락처 1</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="연락처 입력">
                </div>
              </div>

              <!-- 연락처 2 -->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">연락처 2</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="연락처 입력">
                </div>
              </div>

              <!-- 매장명 -->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">매장명</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="매장명 입력">
                </div>
              </div>
              
              <!-- 매장 주소 -->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">매장 주소</label>
                <div class="col-sm-8">
                   <button type="button" class="btn btn-file">매장 주소</button>
                </div>
              </div>

              <!-- 매장 로고 -->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">매장 로고</label>
                <div class="col-sm-8">
                  <input type="file" ref="file" style="display:none" @change="onFileChange">
                  <button type="button" class="btn btn-file" @click="$refs.file.click()">매장 로고</button>
                  <span class="filename">{{storeLogoFileName}}</span>
                </div>
              </div>

              <!-- 매장 사진-->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">매장 사진</label>
                <div class="col-sm-8">
                  <input type="file" ref="file" style="display:none" @change="onFileChange">
                  <button type="button" class="btn btn-file" @click="$refs.file.click()">매장 사진</button>
                  <span class="filename">{{storePictureFileName}}</span>
                </div>
              </div>

              <!-- 매장 검색 태그-->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">매장 검색 태그</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="#태그입력">
                </div>
              </div>



              <!-- 세금계산서 발급 신청-->
              <div class="form-group row">
                <label for="" class="col-sm-3 control-label">세금계산서 발급 신청</label>
                <div class="col-sm-8">
                  <button type="button" id="showw-modal" class="btn btn-file" @click="showModal = true">양식작성</button>
                  <!-- use the modal component, pass in the prop -->
                  <modal v-if="showModal" @close="showModal = false">
                    <!--
                      you can use custom content here to overwrite
                      default content
                    -->
                    <h3 slot="header">
                      세금계산서 신청양식 작성
                      <i class="closeModalBtn fa fa-times" aria-hidden="true" @click="showModal = false" style="float:right;"></i>
                    </h3>

                    <span slot="body">

                      <div class="form-group row">
                        <label for="" class="col-sm-3 control-label">신청자 이름</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control" placeholder="신청자 이름 입력">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="" class="col-sm-3 control-label">신청자 전화번호</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control" placeholder="신청자 전화번호 입력">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="" class="col-sm-3 control-label">이메일 주소</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control" placeholder="이메일 주소 입력">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="" class="col-sm-3 control-label">사업자등록번호</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control" placeholder="사업자등록번호 입력">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="" class="col-sm-3 control-label">상호(법인명)</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control" placeholder="상호(법인명) 입력">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="" class="col-sm-3 control-label">대표자명</label>
                        <div class="col-sm-8">
                          <input type="text" class="form-control" placeholder="대표자명 입력">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="" class="col-sm-3 control-label">사업장 주소</label>
                        <div class="col-sm-8">
                          <button type="button" class="btn btn-file">주소 검색</button>
                        </div>
                      </div>

                    </span>
                    <span slot="footer">
                      <button type="button" class="btn" style="float:left;">등록하기</button>
                    </span>
                  </modal>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm">
                <router-link to="/signup" class="btn prev-btn">이전</router-link>  
                <router-link to="/payment" class="btn next-btn">다음</router-link>
                </div>
              </div>
            </form>
      </div>
  </div>
</template>

<script>
import Modal from '../components/common/Modal'
export default {
  data(){
    return {
      showModal: false,
      businessFileName: '',
      storeLogoFileName: '',
      storePictureFileName: ''
    }
  },
  methods: {
    onFileChange(e){
      var targetId = e.target.id;
      var fileName = e.target.files[0].name;
      console.log('d:'+fileName);
      if(targetId == 'business-file-input')
      {
        this.businessFileName = fileName //파일명
      }
      //this.fileName = fileValue[fileValue.length-1]; //파일명
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style>

.memberInfo-section{
  margin-top:95px;
}
.memberInfo-section h1{
  font-size:25px;
  color:#0f0f0f;
  margin-bottom:17px;
}

.filename{
  padding-left:10px;
}


@media (min-width:768px) {
  .control-label{
    float:left;
  }
}
@media (min-width:576px){
  .control-label{
    display: inline;
  }
}


</style>