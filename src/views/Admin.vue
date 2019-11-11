<template>

<div class="wrapper">
    <!--sidebar menu -->
    <sidebar-menu />

    <!-- Page Content  -->
    <div id="content">
        <!-- nav menu -->
        <nav-menu />
        
        <div class="admin-form-group">
            <h4 class="title-1">매출(토큰 사용량) 관리</h4>  
            <p style="margin-left:11px;">오로라/마곳의 가게 매출 정보를 알려 드려요</p>
        </div>
        
        <div class="line"></div>
        
        <div class="admin-form-group">
            <h6 class="title-2"><u>이전 매출 보기</u></h6>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">어제 매출(토큰 사용량) (10/02 목요일)</h6>
                            <p class="card-text">932,000원</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body day-color">
                            <h6 class="card-title">오늘 매출(토큰 사용량) (10/03 금요일)</h6>
                            <p class="card-text">89,000원</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group">
            <h6 class="title-3">매출(토큰 사용량)상세 요약</h6>
            <table class="table table-hover text-center table-white table-border-style">
                <thead>
                    <tr>
                        <th scope="col">일자</th>
                        <th scope="col">사용자 ID</th>
                        <th scope="col">금액(사용량)</th>
                        <th scope="col">결제 상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2019-10-10</td>
                        <td>010-1234-5678</td>
                        <td>25,000원</td>
                        <td>정상</td>
                    </tr>
                    <tr>
                        <td>2019-10-10</td>
                        <td>010-1234-5678</td>
                        <td>25,000원</td>
                        <td>정상</td>
                    </tr>
                    <tr>
                        <td>2019-10-10</td>
                        <td>010-1234-5678</td>
                        <td>25,000원</td>
                        <td>정상</td>
                    </tr>
                    <tr>
                        <td>2019-10-10</td>
                        <td>010-1234-5678</td>
                        <td>25,000원</td>
                        <td>정상</td>
                    </tr>
                    <tr>
                        <td>2019-10-10</td>
                        <td>010-1234-5678</td>
                        <td>25,000원</td>
                        <td>정상</td>
                    </tr>
                    <tr>
                        <td>2019-10-10</td>
                        <td>010-1234-5678</td>
                        <td>25,000원</td>
                        <td>정상</td>
                    </tr>
                    <tr>
                        <td>2019-10-10</td>
                        <td>010-1234-5678</td>
                        <td>25,000원</td>
                        <td>정상</td>
                    </tr>
                    <tr>
                        <td>2019-10-10</td>
                        <td>010-1234-5678</td>
                        <td>25,000원</td>
                        <td>정상</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Nav from '../components/AdminNav.vue'
export default {
    name: 'admin',
    components: {
        'sidebar-menu': Sidebar,
        'nav-menu': Nav
    }
}
</script>

<style>
.title-1, .title-2, .title-3{
    font-weight:bold;
    margin-bottom:25px;
    margin-left:11px;
}
.title-1{
    margin-bottom:17px;
}
.card, .card-body{
    border-radius: 10px;
    border:none;
    box-shadow: 3px 3px 3px 3px #eee;
}
.card-body .card-title{
    font-weight:bold;
    font-size:17px;
}
.card-body .card-text{
    font-weight:bold;
    font-size:21px;

}
.day-color, .day-color p{
   background:#1E3444;
   border:#1E3444;
   color:#fff 
}

.table-white{
    background-color:#ffffff;
}
.table-border-style{
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.table td{
    border-top-style: none;
}
.admin-form-group{
    margin-bottom:20px;
}
</style>