import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      '^pages/index/main',
      'pages/found/main',
      'pages/sale/main',
      'pages/user/main',
      'pages/video/main',
      'pages/user/main'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#012d57',
      navigationBarTitleText: '胖狗狗',
      navigationBarTextStyle: '#fff',
      enablePullDownRefresh: true,
      onReachBottomDistance: 30
    },
    tabBar: {
      backgroundColor: '#eee',
      selectedColor: '#13227a',
      color: '#aaa',
      borderStyle: '#13227a',
      list: [
        {
          pagePath: 'pages/index/main',
          iconPath: './static/images/home_default.png',
          selectedIconPath: './static/images/home_selected.png',
          text: '首页'
        },
        {
          pagePath: 'pages/found/main',
          iconPath: './static/images/gogo_default.png',
          selectedIconPath: './static/images/gogo_selected.png',
          text: '逛逛'
        },
        {
          pagePath: 'pages/video/main',
          iconPath: './static/images/video_default.png',
          selectedIconPath: './static/images/video_selected.png',
          text: '视频'
        },
        {
          pagePath: 'pages/sale/main',
          iconPath: './static/images/sale_default.png',
          selectedIconPath: './static/images/sale_selected.png',
          text: '促销'
        },
        {
          pagePath: 'pages/user/main',
          text: '我的',
          iconPath: './static/images/user_default.png',
          selectedIconPath: './static/images/user_selected.png'
        }
      ]
    },
    networkTimeout: {
      request: 6000,
      downloadFile: 10000
    },
    debug: true
  }
}
