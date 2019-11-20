<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- 
            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
            </button>
            -->
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-align-justify"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto admin-nav">
                    <li class="nav-item" style="width:150px;">
                        <a class="nav-link" href="#" style="color:#000;">1:1 문의</a>
                    </li>
                    <li class="nav-item" style="width:150px">
                        <router-link to="/login" @click="logout">
                            <span @click="logout">로그아웃</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        {{$store.state.user.id}}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data (){
        return {
            nickname : '123'
        }
    },
    methods : {
        logout(){
            this.$store.commit('logout');
        }
    }
 
}
</script>

<style>
.admin-nav > .nav-item > a{
    color:#000 !important;
    display: inline;
}
</style>