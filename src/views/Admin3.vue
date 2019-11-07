<template>

<div class="wrapper">
    <!--sidebar menu -->
    <sidebar-menu />

    <!-- Page Content  -->
    <div id="content">
        <!-- nav menu -->
        <nav-menu />
        
        <div class="form-group">
            <h4 class="title-1">토큰 현황</h4>  
        </div>
        
        <div class="line"></div>

        <div class="form-group">
            <h6 class="title-2">고객 정보 및 결제 내역</h6>
            <table class="table table-white text-center table-border-style">
                <thead>
                    <tr>
                        <th scope="col">사용자ID</th>
                        <th scope="col">가입일시</th>
                        <th scope="col">총 충전금액</th>
                        <th scope="col">현재 보유금액</th>
                        <th scope="col">사용 금액</th>
                        <th scope="col">사용 내역</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>010-1234-5678</td>
                        <td>2019-10-10</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td><u>보기</u></td>
                    </tr>
                    <tr>
                        <td>010-1234-5678</td>
                        <td>2019-10-10</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td><u>보기</u></td>
                    </tr>
                    <tr>
                        <td>010-1234-5678</td>
                        <td>2019-10-10</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td><u>보기</u></td>
                    </tr>
                    <tr>
                        <td>010-1234-5678</td>
                        <td>2019-10-10</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td><u>보기</u></td>
                    </tr>
                    <tr>
                        <td>010-1234-5678</td>
                        <td>2019-10-10</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td>25,000원</td>
                        <td><u>보기</u></td>
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