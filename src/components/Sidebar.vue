<template>
  <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Magot</h3>
            </div>
            <ul class="list-unstyled components">
                <!-- <p>나의 서비스 관리</p> -->
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">매출 관리</a>
                    <ul class="list-unstyled" id="homeSubmenu">
                        <li>
                            <router-link to="admin">매출 상세</router-link>
                        </li>
                        <li>
                            <router-link to="admin2">고객 관리</router-link>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">토큰 관리</a>
                    <ul class="list-unstyled" id="pageSubmenu">
                        <li>
                            <router-link to="admin3">토큰 현황</router-link>
                        </li>
                        <li>
                            <router-link to="admin4">충전 관리</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
</template>

<script>
export default {

}
</script>

<style>
.dropdown-toggle{
    font-weight:bold;
}
</style>