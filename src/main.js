import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueParticles from 'vue-particles'
import Vcomp from './components/index'
import Toast from './components/toast'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import 'animate.css'
import 'video.js/dist/video-js.css'
import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'
//引入手淘适配
import '@/utils/flexible'
import axios from '@/utils/axios'
Vue.use(vueParticles)
Vue.use(Vcomp)
Vue.use(ViewUI)

Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。避免无用的体积

Vue.prototype.$Toast = Toast

Vue.prototype.$axios = axios
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  const token = localStorage.getItem('TOKEN')
  if (to.path !== '/login') {
    if (token) {
      if (window.atob(token) && typeof window.atob(token) === 'string') {
        console.log(Number(window.atob(token)) > new Date().getTime())
        if (Number(window.atob(token)) > new Date().getTime()) {
          next()
        } else next({ path: '/login', query: { redirect: to.fullPath } })
      } else next({ path: '/login', query: { redirect: to.fullPath } })
    } else next({ path: '/login', query: { redirect: to.fullPath } })
  }

  next()
})

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$busEvent = this
  },
}).$mount('#app')
