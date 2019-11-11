<template>
  <div class="home">
  <!-- Header -->
     <section class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <h2 class="text-white mb-4 content-title-1">마을 곳곳에 포인트 관리부터 결제까지</h2>
            <h1 class="text-white mb-4 content-title-2">Magot</h1>
            <p class="text-white mb-3 content-title-3">고객 멤버십과 간편 결제를 한번에 누려보세요</p>
            <p class="text-white mb-4 content-title-4">쉽게 정리된 통계 자료로 홍보부터 고객 관리까지 
              <br />경험하는 마을 곳곳, 마곳과 함께 해요
            </p>
            <p class="text-white">
              <router-link to="/signup" class="btn btn-default" >판매자 가입하기</router-link>
              <router-link to="/login" class="btn btn-default btn-login">로그인하기</router-link>
            </p>
          </div>
          <div class="col-lg-6 max-auto">
            <img src="img/coffee.jpg" class="img-fluid content-img" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- Projects Section -->
    <section id="projects" class="projects-section bg-light">
      <div class="container">
      <!-- Featured Project Row -->
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
            <img class="img-fluid mb-3 mb-lg-0" src="img/bg-masthead.jpg" alt="">
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <h4>Shoreline</h4>
              <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
            </div>
          </div>
        </div>
        <!-- Project One Row -->
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div class="col-lg-6">
            <img class="img-fluid" src="img/demo-image-01.jpg" alt="">
          </div>
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                  <h4 class="text-white">Misty</h4>
                  <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                  <hr class="d-none d-lg-block mb-0 ml-0">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
// @ is an alias to /src
import { loginUser} from '../api'

export default {
  data(){
    return {
      email: '',
      nickname: ''
    }
  },
  computed :{
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    //this.$store.commit("loginCheck");
  }
  
}
</script>
<style>
*{
 font-family: 'Apple SD Gothic Neo'; 
}
.btn-login{
  margin-left:20px;
}
.content-title-1{
  padding-top:24px;
  font-size:25px;
}
.content-title-2{
  font-size:55px;
  font-weight:bold;
}
.content-title-3, .content-title-4{
  font-size:17px;
}

.home-section{
padding: 71px 0px;
background:#ff496e;
}


</style>