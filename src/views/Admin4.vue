<template>

<div class="wrapper">
    <!--sidebar menu -->
    <sidebar-menu />

    <!-- Page Content  -->
    <div id="content">
        <!-- nav menu -->
        <nav-menu />
        
        <div class="form-group">
            <h4 class="title-1">충전 관리</h4>  
        </div>
        
        <div class="line"></div>
        <div class="form-group" style="margin-bottom:30px">
            <h6 class="title-2">충전 계좌 관리</h6>
            <div class="card" style="width:18rem;">
                <div class="card-body account">
                    <p class="card-text">은행 : 국민은행</p>
                    <p class="card-text">계좌번호 : 123-4567-89012</p>
                    <p class="card-text">계좌 소유자 이름 : 오로라</p>
                    
                </div>
            </div>
        </div>
        <div class="form-group">
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

        <div class="form-group text-right">
            <button type="button" class="btn">신규 혜택 등록</button>
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
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
.account > .card-text{
    font-size:17px;
    margin-bottom:5px;
}
.coupon{
    margin-bottom:10px;
}

.sub-title-3{
    color:#888888;
    font-size:15px;
    margin-left:10px;
}
</style>