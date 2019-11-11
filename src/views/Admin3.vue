<template>

<div class="wrapper">
    <!--sidebar menu -->
    <sidebar-menu />

    <!-- Page Content  -->
    <div id="content">
        <!-- nav menu -->
        <nav-menu />
        
        <div class="admin-form-group">
            <h4 class="title-1">토큰 현황</h4>  
        </div>
        
        <div class="line"></div>
        <div class="admin-form-group">
            <h6 class="title-2">총량 현황</h6>
            <div class="card">
                <div class="card-body">
                    <div style="width:50px;height:100px;background:red;"></div>
                </div>
            </div>
        </div>
        <div class="admin-form-group">
            <h6 class="title-3">토큰 충전 내용</h6>
            <table class="table table-white text-center table-border-style">
                <thead>
                    <tr>
                        <th scope="col">일자</th>
                        <th scope="col">사용자ID</th>
                        <th scope="col">총 충전금액(사용량)</th>
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

</style>