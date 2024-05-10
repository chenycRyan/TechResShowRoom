<template>
  <div class="file-page">
    <div class="wrap">
      <!-- <BoardHeader></BoardHeader> -->
      <section class="mainbox">
        <section class="main-wrap">
          <iframe
            v-show="filePath"
            height="100%"
            :src="filePath"
            width="100%"
            class="pdf-viewer"
            id="pdfviewer"
          />
        </section>
      </section>
      <div
        class="fullfile-wrap"
        v-show="showFullfile"
        ref="fullfile"
        @click="showFullfile = false"
      ></div>
    </div>
    <div
      class="v-modal"
      tabindex="0"
      v-show="showFullfile"
      @click="showFullfile = false"
    ></div>

    <MenuNavgation
      :pageShow="false"
      style="z-index: 102"
      ref="menuNav"
      @go="
        (para) => {
          if (para == 'extra') {
            changeLayoutSphere()
          } else if (para == 'cushome') {
            changeModeSphere()
          }
        }
      "
    ></MenuNavgation>
    <div v-show="loading" class="loading-section">
      <div class="loading-img"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showSphere: false,
        testFilePath:
          'http://192.168.3.10:3182/static/OpenAPI安全认证库%20（Java）开发指南V1.1.3_20210716095939_20211203141454.pdf',
        filePath: '',
        pSrc: '',
        openType: 'custom',
        fileScale: null,
        fileFullScale: null,
        fileViewSize: {},
        currPageIndex: 0,
        doc: null,
        fileItemList: [],
        docPages: 0,
        pageList: [],
        showFullfile: false,
        showctl: false,
        isMoving: false,
        fullPageNum: 0,
        currPageNum: [], //当前页的文件页码
        layout: 2, // 0-2*4 1-1*2 2-1*1 行列布局
        touchData: null,
        prevDisabled: false,
        nextDisabled: false,
        isLayoutUserSet: true, // 是否直接指定布局方式
        isFileError: false,
        reRenderTimer: null,

        loading: false,
        fileShowType: 'frame',
      }
    },
    beforeDestroy() {},
    mounted() {
      this.loading = true
      // 此处不能使用settimeout作为延时函数，因为pdf加载大文件时占用线程，会阻塞settimeout
      const t = Date.now()
      function mySetTimeout(cb, delay) {
        let startTime = Date.now()
        loop()
        function loop() {
          if (Date.now() - startTime >= delay) {
            cb()
            return
          }
          // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
          // 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行，理想状态下回调函数执行次数通常是每秒60次（也就是60fsp），
          // 也就是每16.7ms 执行一次，但是并不一定保证为 16.7 ms。
          requestAnimationFrame(loop)
        }
      }
      mySetTimeout(() => {
        console.log('mySetTimeout', Date.now() - t)
        this.loading = false
      }, 4000) //4005

      this.$refs.menuNav.showMenu()
      if (this.$route.query.file) {
        this.filePath = decodeURI(this.$route.query.file)
        // this.filePath = decodeURI('http://192.168.0.45/test.pdf')
      } else {
        this.isFileError = true
        this.$Message.error({
          content: '文件未指定, 即将返回上一页面',
          duration: 2,
          onClose: () => {
            if (process.env.NODE_ENV != 'development') this.$router.go(-1)
          },
        })
        if (process.env.NODE_ENV != 'development') return
      }
      this.moveInit()
    },

    methods: {
      fullScreen() {
        var element = document.getElementById('pdfviewer')
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen()
        }
      },
      moveInit() {
        document.addEventListener('mouseleave', () => {
          document.onmousemove = document.onmouseup = null
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/animation.scss';
  .file-page {
    --viewer-pdf-toolbar-background-color: rgb(44, 39, 163);
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    .main-wrap {
      width: 100%;
      height: 100%;
      .file-list {
        width: 100%;
        height: calc(100% - 80px);
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: calc(50% - 10px) calc(50% - 10px);
        grid-row-gap: 20px;
        padding: 0rem 2rem;
        box-sizing: border-box;
        color: black;
        &.file-error {
          background-image: url('~@/assets/imgs/nopdf.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        &.file-list-12 {
          grid-template-columns: repeat(2, 50%);
          grid-template-rows: 100%;
        }
        &.file-list-1 {
          grid-template-columns: 100%;
          grid-template-rows: 100%;
        }
        .file-item {
          text-align: center;
          height: 100%;
          display: grid;
          justify-content: center;
          align-items: center;
        }
      }
      .ctl-wrap {
        height: 80px;
        padding-top: 22px;
        text-align: center;
        .page-button-wrap + .page-button-wrap {
          margin-left: 2rem;
        }
        .btn-prev,
        .btn-next {
          background: linear-gradient(270deg, #162dba, #1748bb);
          color: #fff;
          box-shadow: none;
          border-radius: 2px;
          display: inline-block;
          vertical-align: middle;
          min-width: 120px;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          height: 36px;
          font-size: 14px;
          line-height: 36px;
          &:hover {
            background: linear-gradient(134deg, #688dde, #3949b2);
          }
        }
        .btn-next {
          margin-left: 0.5rem;
        }
      }
      .page-box-old {
        position: absolute;
        top: 0.125rem;
        right: 0.5rem;
        color: #fff;
        background-image: url('~@/assets/imgs/pagebg.png');
        background-size: contain;
        background-repeat: no-repeat;
        width: 1.06rem;
        height: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 0.3rem;
        span {
          display: inline-block;
          width: 50%;
          text-align: center;
        }
        span + span {
          color: #47abc6;
        }
      }
    }
    // 全屏展示粒子特效
    .particles-bg {
      width: 100%;
      height: 100%;
      background: transparent;
      position: absolute;
    }
    .wrap {
      background: url(../../assets/imgs/bg/home_bg.jpg) no-repeat #000;
      background-size: cover;
      line-height: 1.15;
      header {
        position: relative;
        height: 1.2rem;
        background: url(../../assets/imgs/head_bg.png) no-repeat top center;
        background-size: 100% 100%;
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
      }
      .mainbox {
        min-width: 1024px;
        width: 100%;
        // padding: 0.125rem 0.125rem;
        display: flex;
        // height: calc(100vh - 1.2rem);
        height: 100vh;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
      }
      .fullfile-wrap {
        position: absolute;
        top: 10vh;
        left: 0px;
        height: 80vh;
        width: 100%;
        text-align: center;
        z-index: 101;
      }
    }
    .v-modal {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0.6;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      z-index: 100;
    }
    .sphere {
      position: absolute;
      left: 60px;
      top: calc(100% - 120px);
      width: 60px;
      height: 60px;
      background: #3bf8fb;
      border-radius: 50%;
      box-shadow: inset 26px -37px 38px 42px rgba(34, 109, 189, 0.5),
        inset 9px -7px 35px -11px #304344,
        inset 28px 30px 58px 4px rgba(40, 21, 21, 0.73);
      z-index: 102;
      .ctlbtn {
        width: 0.94rem;
        height: 1.02rem;
        background-size: contain;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 0.2rem;
        color: #fff;
        cursor: pointer;
        background-image: url('~@/assets/imgs/toptitle.png');
        .text {
          transform: rotate(55deg);
          padding-top: 5px;
        }
      }
      .sphere-prev {
        position: absolute;
        top: -60px;
        right: -60px;
      }
      .sphere-next {
        position: absolute;
        top: 18px;
        right: -84px;
        transform: rotate(38deg);
      }
      .sphere-layout {
        position: absolute;
        top: -102px;
        right: 10px;
        transform: rotate(-42deg);
      }
    }
    .sphere-shadow::after {
      background: rgba(4, 55, 56, 0.6);
      top: 136px;
      border-radius: 50%;
      position: absolute;
      height: 24px;
      width: 150px;
      left: -29px;
      content: '';
      z-index: -1;
      -webkit-filter: blur(9px);
      filter: blur(9px);
    }
    .sphere-shadow::before {
      background: rgba(34, 110, 111, 0.57);
      top: 143px;
      border-radius: 50%;
      position: absolute;
      height: 14px;
      width: 106px;
      left: 8px;
      content: '';
      z-index: -1;
      -webkit-filter: blur(4px);
      filter: blur(4px);
      box-shadow: -12px -4px 30px -1px #5c9fa0;
    }
    .iframe-viewer {
      border: none;
    }
  }

  .loading-section {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cfdeff;
    // background-color: rgba(0, 0, 0, 0.5);
    background-color: #0f1657;
    backdrop-filter: blur(2px);
    z-index: 2001;
    opacity: 0.8;
    .loading-img {
      width: 74vh;
      height: 80vh;
      opacity: 1;
      background-size: contain;
      background-image: url('~@/assets/imgs/loading.gif');
      background-repeat: no-repeat;
    }
    .loading-content {
      width: 4.8rem;
      height: 1.5rem;
      background-image: url('~@/assets/imgs/round.gif');
      font-size: 0.25rem;
      line-height: 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .text {
      width: auto;
    }
    .dots {
      width: 30px;
      text-align: left;
      box-sizing: border-box;
      overflow: hidden;
      animation: move 1.2s linear infinite;
      letter-spacing: 3px;
    }
  }
  .aniup {
    animation: up 1s linear;
  }
  @keyframes move {
    0% {
      width: 6px;
    }
    100% {
      width: 30px;
    }
  }
  @keyframes up {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-20px);
    }
  }
</style>
