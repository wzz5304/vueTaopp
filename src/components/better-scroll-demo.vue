<template>
<div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="item in 8">{{item}}</li>
    </ul>
</div>
</template>
<script>
import BScroll from 'better-scroll';
  export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper);
      });
    }
  };
</script>
<style type="text/css">
.wrapper{
  overflow:hidden;
  height:100vh;
}
ul li{
  height:400px;
}
  
</style>