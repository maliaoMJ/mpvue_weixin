<template>
 <div class="select_header">
      <picker
      :value="index"
      @change="changeShop"
      :range="shopArrs"
      class="page_header"
      placeholder-class="input_placeholder"
      >
        <div class="supermarket">
          {{shopArrs[index]}}
        </div>
      </picker>
      <div class="input_box"> 
         <input 
         v-if="false"
         class="search_input" 
         type="text" placeholder="关键词" 
         @click.stop="ToSearch"
         >
      </div>
        <div class="city_name"><span>北京市海淀区</span></div>
    </div>
</template>
<script>
export default {
  name: 'pageheader',
  data () {
    return {
      shopArrs: ['天通苑万达商场', '海淀万达商场', '房山万达商场'],
      index: 0
    }
  },
  methods: {
    changeShop (e) {
      this.index = e.target.value
    },
    ToSearch (e) {
    }
  }
}
</script>

<style lang="scss" scoped>
.select_header{
  display: flex;
  flex-direction: row;
  width:100%;
  height:60rpx;
  background:#012d57;
  color:#fff;
  position: fixed;
  top:0;
  left:0;
  z-index: 10;
  font-size:26rpx;
  line-height: 60rpx;
}
.page_header{
 display: block;
 width:40%;
 box-sizing: border-box;
 padding-left:5rpx;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
}
.input_box{
  width:30%;
  height:50rpx;
  margin-top:10rpx;
  display: block;
  border-radius: 24rpx;
  border-width:0;
}
.search_input{
  border-radius: 24rpx;
  border-width:0;
  outline:none;
  background:#fff;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left:10rpx;
  color:#aaa;
  line-height: 50rpx;
  font-size:24rpx;
}
.city_name{
  flex:1;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 20rpx;
}
</style>