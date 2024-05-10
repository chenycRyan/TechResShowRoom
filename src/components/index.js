import Footer from './footer/footer.vue' //导航图标
import NowTimer from './nowTimer/nowTimer.vue' //当前时间
import BoardHeader from './boardHeader/boardHeader.vue'
import SphereControl from './sphereControl/sphereControl.vue'
import Particles from './particles/particles.vue'
import MenuNavgation from './menuNavgation/menuNavgation.vue'
import PageShow from './pageShow/pageShow.vue'
import PageButton from './pageButton/pageButton.vue'
import VideoPlayer from './videoPlayer/index.vue'
import VideoView from './videoView/index.vue'
const components = {
  Footer,
  NowTimer,
  BoardHeader,
  SphereControl,
  Particles,
  PageShow,
  PageButton,
  MenuNavgation,
  VideoPlayer,
  VideoView,
}

const install = (Vue = {}) => {
  if (install.installed) return
  Object.keys(components).forEach((component) => {
    Vue.component(components[component].name, components[component])
  })

  install.installed = true
}

install.installed = false

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  install.installed = true
}

const Vcomp = {
  ...components,
  install,
}

export default Vcomp
