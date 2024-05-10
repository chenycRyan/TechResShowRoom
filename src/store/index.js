import Vue from 'vue'
import Vuex from 'vuex'
import jsSHA from 'jssha'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全屏变量，标识当前是否为全屏状态
    fullscreen: false,
    element: document.documentElement,
  },
  mutations: {
    // 改变全屏状态变量
    changeFullscreenVar(state) {
      state.fullscreen = !state.fullscreen
    },
    // 进入全屏
    lanchFullscreen(state) {
      var element = state.element
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
      }
      state.fullscreen = true
    },
    // 退出全屏
    exitFullscreen(state) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExiFullscreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
      state.fullscreen = false
    },
    // 暴露给外界的处理方法，调用这个方法，自行判断是要全屏还是退出全屏
    handleFullScreen() {
      // 注意：要在用户授权全屏后才能获取全屏的元素，否则 fullscreenEle为null
      var fullscreenEle = (fullscreenEle =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement)

      if (fullscreenEle) {
        console.log('退出全屏..')
        this.commit('exitFullscreen')
      } else {
        console.log('进入全屏..')
        this.commit('lanchFullscreen')
      }
    },
  },
  actions: {
    // 登录
    handleLogin({ commit }, { userName, password }) {
      userName = userName.trim()
      return login(userName, password)
    },
    // 退出登录
    handleLogOut() {
      localStorage.clear()
    },
  },
  modules: {},
})
//登录校验
function login(userName, password) {
  const verfUserName = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' })
  verfUserName.update(userName)
  const verfPassword = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' })
  verfPassword.update(password)
  console.log(verfUserName.getHash('HEX'), verfPassword.getHash('HEX'))

  const accountList = window.appconfig.account
  return accountList.some(
    (item) =>
      item.userName === verfUserName.getHash('HEX') &&
      item.password === verfPassword.getHash('HEX')
  )
}
