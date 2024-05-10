<template>
  <div>
    <header>
      <div class="top_title">
        <img src="@/assets/imgs/logo.png" alt="" />
        <h2>{{ title }}</h2>
      </div>
      <NowTimer></NowTimer>
      <div
        v-if="showIcon"
        ref="fullScreenRef"
        class="full"
        :class="{
          'myicon-full-off': fullscreen,
          'myicon-full-on': !fullscreen,
        }"
        :title="fullscreen ? '取消全屏' : '全屏'"
        @click="toggleScreen"
      ></div>
    </header>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'BoardHeader',
    data() {
      return {
        showIcon: false,
        websock: '',
      }
    },
    computed: {
      ...mapState(['fullscreen']),
    },

    props: {
      title: {
        type: String,
        default: '教学资源库管理系统',
      },
    },
    mounted() {
      //展厅不展示全屏按钮
      this.showIcon = process.env.NODE_ENV !== 'production'
      // this.initScreen()
    },
    beforeDestroy() {
      if (this.websock) this.websock.websocketclose()
    },

    methods: {
      toggleScreen() {
        this.$store.commit('handleFullScreen')
      },
      initScreen() {
        if (window.screen.height - document.body.scrollHeight > 10) {
          this.websock = this.initWebSocket('ws://127.0.0.1:1234')
        }
      },
      /*----初始化连接---*/
      initWebSocket(wsuri) {
        //初始化websocket
        const websock = new WebSocket(wsuri)
        websock.onmessage = this.websocketonmessage
        websock.onopen = this.websocketonopen
        websock.onerror = this.websocketonerror
        websock.onclose = this.websocketclose
        return websock
      },
      //连接建立成功
      websocketonopen() {
        console.log('websocket连接成功！')
        console.log(this.websock)
        //连接建立之后执行send方法发送数据
        this.websocketsend(
          this.websock,
          `#VK, 122, ${document.title} - Google Chrome, 1`
        )
        console.log(document.title0)
      },
      //连接建立失败
      websocketonerror() {
        console.log('websocket连接失败')
        //失败重连
        this.initWebSocket()
      },
      //数据接收
      websocketonmessage(e) {
        console.log(e, '回调msg')
      },
      //数据发送
      websocketsend(websock, Data) {
        websock.send(Data)
      },
      //关闭
      websocketclose(e) {
        console.log('断开连接', e)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'myiconfont'; /* Project id 3560804 */
    src: url('~@/assets/board_font/iconfont.woff2?t=1661322132092')
        format('woff2'),
      url('~@/assets/board_font/iconfont.woff?t=1661322132092') format('woff'),
      url('~@/assets/board_font/iconfont.ttf?t=1661322132092')
        format('truetype');
  }

  [class*='myicon-'] {
    font-family: 'myiconfont';
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .myicon-full-off:before {
    content: '\eb98';
  }

  .myicon-full-on:before {
    content: '\eb99';
  }

  .myicon-return:before {
    content: '\e6ba';
  }

  .myicon-refresh:before {
    content: '\e67b';
  }

  .myicon-refresh-1:before {
    content: '\e62d';
  }
  header {
    position: relative;
    height: 1.2rem;
    background: url(../../assets/imgs/head_bg.png) no-repeat top center;
    background-size: 100% 100%;
    font-family: 'Reggae One', cursive;
    .top_title {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 0.42rem;
        margin: 0 0.25rem;
      }
      h2 {
        color: #fff;
        font-size: 0.475rem;
        text-align: center;
        line-height: 1rem;
        letter-spacing: 1px;
      }
    }
    .full {
      position: absolute;
      right: 10px;
      top: 20%;
      line-height: 29px;
      cursor: pointer;
      height: 29px;
      font-size: 26px;
      transition: all ease-in-out 0.3s;
      opacity: 1;
      color: #47abc6;
      &:hover {
        color: #ced1db;
        transform: scale(1.1);
      }
    }
  }
</style>
