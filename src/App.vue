<template>
  <div id="app" v-cloak>
    <transition name="slide-left">
      <router-view />
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    mounted() {
      document.oncontextmenu = function () {
        return false
      }
      // window.addEventListener('keydown', this.myKeyEvent)
      // if (document.exitFullscreen) {
      //   document.addEventListener('fullscreenchange', this.changeFullscreenVar)
      // } else if (document.mozCancelFullScreen) {
      //   document.addEventListener(
      //     'mozfullscreenchange',
      //     this.changeFullscreenVar
      //   )
      // } else if (document.msExitFullscreen) {
      //   document.addEventListener(
      //     'MSFullscreenChange',
      //     this.changeFullscreenVar
      //   )
      // } else if (document.webkitCancelFullScreen) {
      //   document.addEventListener(
      //     'webkitfullscreenchange',
      //     this.changeFullscreenVar
      //   )
      // }
    },
    methods: {
      myKeyEvent(e) {
        let key = e.keyCode
        if (key === 122) {
          console.log('F11')
          // 阻止默认的键盘事件
          event.returnValue = false
          this.$store.commit('handleFullScreen')
        }
      },
      changeFullscreenVar() {
        this.$store.commit('changeFullscreenVar')
      },
      fullScreenChange(event) {
        console.log(event, 'fullScreenChange event')
        // 判断一下变量是不是全屏，是全屏则代表 F11、ESC 退出了全屏，需要变量更正过来
        if (this.$store.state.btnFullScreen && this.$store.state.fullscreen) {
          this.$store.commit('changeFullScreenVariable')
        }
      },
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.myKeyEvent)
      if (document.exitFullscreen) {
        document.removeEventListener(
          'fullscreenchange',
          this.changeFullscreenVar
        )
      } else if (document.mozCancelFullScreen) {
        document.removeEventListener(
          'mozfullscreenchange',
          this.changeFullscreenVar
        )
      } else if (document.msExitFullscreen) {
        document.removeEventListener(
          'MSFullscreenChange',
          this.changeFullscreenVar
        )
      } else if (document.webkitCancelFullScreen) {
        document.removeEventListener(
          'webkitfullscreenchange',
          this.changeFullscreenVar
        )
      }
    },
  }
</script>
<style lang="scss">
  #app {
    overflow: hidden;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .slide-left-enter {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }

  .slide-left-enter-active {
    transition: all 0.5s ease;
  }

  .slide-left-leave-to {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
    display: none;
  }

  .slide-left-leave-active {
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 1024px) {
    html {
      font-size: 42px !important;
    }
  }
  @media screen and (min-width: 1920) {
    html {
      font-size: 80px !important;
    }
  }
</style>
