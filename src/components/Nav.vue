<template>
  <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="/">Magot</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item about-us">
                  <a class="nav-link js-scroll-trigger" href="/about">About Us</a>
                </li>
                <li class="nav-item company">
                  <a class="nav-link js-scroll-trigger" href="/company">회사소개</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/payment">이용요금</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.about-us, .company{
  width:200px;
}
</style>