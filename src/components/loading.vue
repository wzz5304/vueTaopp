<template>
<div class="loading-wrapper">
  <div class="ui-icon-loading">
    <i></i>
  </div>
</div>
</template>
<script>
  export default {
  };
</script>
<style type="text/css">
.loading-wrapper{
  height:100vh;
} 
.loading-wrapper .ui-icon-loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background: #fff;
}
.loading-wrapper .ui-icon-loading i {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 36px;
    height: 36px;
    top: 50%;
    left: 50%;
    margin: -18px auto auto -18px;
    animation: rotation .7s infinite linear;
    background: #fff url(../../static/loading-svg/loading.svg) center no-repeat;
}
@keyframes rotation{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>