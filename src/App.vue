<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  height: 100%;
  width:100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background:transparent;
}
/* this rule will be remove */
/* * {
  transition: width 1s;
  -moz-transition: width 1s;
  -webkit-transition: width 1s;
  -o-transition: width 1s;
} */
</style>
