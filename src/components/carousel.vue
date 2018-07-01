<template>
   <div class="carousel">
    <swiper
    class="swiper" 
    :indicator-dots="indicatorDots"
    :indicator-color="indicatorColor"
    :indicator-active-color="indicatorActiveColor"
    :autoplay="autoplay" 
    :interval="interval" 
    :duration="duration"
    :circular="circular"
    :previous-margin="previousMargin"
    :next-margin="nextMargin"
    v-if="data.length > 1"
    >
        <swiper-item class="swiper_content_box" v-for="(img, index) in data" :key="index">
          <img 
          @click.prevent="handleClickImg" 
          :src="img.url" :alt="img.title ? img.title : '' ">
        <div class="tag recommend" v-if="img.tag">{{img.tag}}</div>
        </swiper-item>
    </swiper>
    <!-- 当只有一张图片的时候 -->
    <div class="swiper" v-else-if="data.length === 1">
      <div class="swiper_content_box">
        <img :src="data[0].url" :alt="data[0].title ? data[0].title : ''">
        <div class="tag hot" v-if="img.tag">{{img.tag}}</div>
      </div>
    </div>
    <!-- 当没有图片 默认显示系统没有图片的界面 -->
    <div class="swiper" v-else>
      <div class="swiper_content_box">
        <img src="http://img3.imgtn.bdimg.com/it/u=2696367453,3403235068&fm=11&gp=0.jpg" alt="">
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    data: {
      type: Array,
      default: () => {
        return {}
      }
    },
    indicatorDots: {
      type: Boolean,
      default: false
    },
    indicatorColor: {
      type: String,
      default: 'rgba(255,255,255,0.8)'
    },
    indicatorActiveColor: {
      type: String,
      default: '#012d57'
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5000
    },
    duration: {
      type: Number,
      default: 1000
    },
    circular: {
      type: Boolean,
      default: false
    },
    previousMargin: {
      type: String,
      default: '0rpx'
    },
    nextMargin: {
      type: String,
      default: '0rpx'
    }
  },
  data () {
    return {
    }
  },

  methods: {
    handleClickImg () {
      this.$emit('handleClickImg')
    }
  },

  created () {
  }
}
</script>

<style lang="scss" scoped>
.carousel{
  height:100%;
  width:100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  .swiper{
    width:100%;
    height:100%;
    .swiper_content_box{
      position: relative;
      width:100%;
      height:100%;
    }
  }
  img{
    position:absolute;
    top:0;
    left:0;
    display: block;
    width:100%;
    height:100%;
  }
  .tag{
    position: absolute;
    bottom:18rpx;
    right:0;
    height:44rpx;
    background:#012d57;
    color:#fff;
    font-size:24rpx;
    width:auto;
    padding:0 12rpx;
    line-height: 44rpx;
    text-align: center;
    border-top-left-radius: 22rpx;
    border-bottom-left-radius: 22rpx;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#fff;
    &.recommend{
      background:red;
    }
    &.offical{
      background:#012d57;
    }
    &.hot{
      background:rgb(36, 204, 247);
    }
  }
}

</style>

