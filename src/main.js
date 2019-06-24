// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'


Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  console.log(to,'to')
  console.log(from,'from')
  // console.log(next,'next')
  console.log(localStorage.getItem('tag'))
  if (localStorage.getItem('tag') === '1') {
    console.log('1')
  } else {
    
    localStorage.setItem('tag','1')
    next({path: '/'})
    // alert('用户登录已失效')

    }
  // if (to.name === 'zoujin') {
  //   if (from.name === 'zhaojiu') {
  //     alert('欢迎从招就到走进校园页面')
  //   }
  // }
  next()
})
