// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/index.js'
import vueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import Base64 from 'js-base64'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(infiniteScroll)
Vue.use(Base64)
Vue.use(vueLazyLoad,{
	loading:"./static/loading-svg/loading-bars.svg" , // 设置图片懒加载
	listenEvents: [ 'scroll' ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
