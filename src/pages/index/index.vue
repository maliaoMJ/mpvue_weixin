<template>
  <div class="container">
    <pageheader/>
    <div class="carousel">
      <carousel></carousel>
    </div>
  </div>
</template>

<script>
import carousel from '@/components/carousel'
import pageheader from '@/components/pageheader'
export default {
  components: {
    carousel,
    pageheader
  }
}
</script>

<style lang="scss" scoped>
.carousel{
  width:100%;
  height:320rpx;
  margin-top:60rpx;
  z-index: 5;
}
</style>
