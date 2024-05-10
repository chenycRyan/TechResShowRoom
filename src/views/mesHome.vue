<template>
  <div class="page-container">
    <div class="wrap">
      <BoardHeader :title="mesTitle" ref="boardheader"></BoardHeader>

      <section class="mainbox">
        <!-- 粒子组件 -->
        <Particles></Particles>

        <div class="iframe_box">
          <div
            v-for="(item, index) in nowData"
            class="iframe_item slide-in-right"
            :style="{
              height: nowData.length < 4 ? '98%' : '46%',
              minWidth: '50%',
              overflow: 'hidden',
            }"
            :key="index"
          >
            <template v-if="item.type === 'web'">
              <div
                @click="openPage(item.url)"
                style="cursor: pointer; z-index: 9999"
                class="title"
              >
                {{ item.name }}
              </div>
              <div v-show="!item.loading" style="height: 100%">
                <iframe
                  v-show="!item.showError"
                  :src="item.url"
                  frameborder="0"
                ></iframe>
                <img
                  v-show="item.showError"
                  width="100%"
                  height="100%"
                  :src="item.errUrl"
                  alt=""
                />
              </div>
              <div v-show="item.loading" class="loadingbar">
                <Spin size="large"></Spin>
              </div>
            </template>
            <template v-else>
              <div class="iframe_item slide-in-right">
                <div class="title">数字孪生</div>
                <div class="center-box">
                  <img :src="item.url" alt="" />
                </div>
              </div>
            </template>
          </div>
        </div>
      </section>
    </div>
    <page-show
      :currPage="currPage"
      :totalPages="mesConfig.length"
      :customStyle="{ top: '4%', right: '16%' }"
    ></page-show>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        controlData: [
          { name: '上一页', method: 'toPreviousPage' },
          { name: '下一页', method: 'toNextPage' },
        ],
        mesConfig: [],
        nowData: [],
        currPage: 1,
        mesDisplay: {
          '1*1': 1,
          '1*2': 2,
          '2*3': 6,
          '2*2': 4,
        },
        timer: '',
        mesTitle: '',
        currentIndex: 0,
        imgTimer: '',
        isDbclick: false,
        lastTime: 0,
        optimer: null,
        bartimer: null,
        coTimer: null,
        lastdiff: 10000,
        websock: null,
        autoTimer: null,
      }
    },

    mounted() {
      this.mesConfig = window.appconfig.mesConfig.filter((item) => item.enable)
      this.mesTitle = window.appconfig.mesTitle
      this.handleList()
      this.initKeydown()
    },
    beforeDestroy() {
      if (this.timer) clearTimeout(this.timer)
      if (this.imgTimer) clearTimeout(this.imgTimer)
      if (this.optimer) clearTimeout(this.optimer)
      if (this.coTimer) clearInterval(this.coTimer)
      if (this.bartimer) clearInterval(this.bartimer)
    },
    methods: {
      handleList() {
        this.setNowData()
        //如果配置列表大于1，则开始轮播
        // 暂不自动轮播
        // if (this.mesConfig.length > 1) {
        //   this.handleshuffling()
        // }
      },
      //赋值当前列表
      setNowData() {
        clearInterval(this.imgTimer)
        if (this.currentIndex > this.mesConfig.length - 1) {
          this.currentIndex = 0
        }
        if (this.currentIndex < 0) {
          this.currentIndex = this.mesConfig.length - 1
        }
        const list = this.mesConfig[this.currentIndex].urlList
        //设置索引
        this.currentIndex++
        this.currPage = this.currentIndex
        let tIndex = 0
        //移出之前的请求
        if (this.coTimer) clearInterval(this.coTimer)

        this.nowData = list.map((item) => {
          return {
            type: item.type,
            name: item.name,
            loading: true,
          }
        })

        this.coTimer = setInterval(() => {
          if (tIndex >= list.length - 1) {
            if (this.coTimer) clearInterval(this.coTimer)
          }

          if (list[tIndex].testLink) {
            var that = this
            //立即执行函数，保证tIndex的闭包性
            ;(function (tIndex) {
              //设置请求超时时间
              that.$axios
                .get(list[tIndex].testLink)
                .then(() => {
                  console.log(tIndex, '*---tIndex')
                  //判断是当前页面才执行赋值
                  const boolPage =
                    JSON.stringify(list) ===
                    JSON.stringify(
                      that.mesConfig[that.currentIndex - 1].urlList
                    )
                  console.log(boolPage, 'boolPage')
                  if (boolPage) {
                    list[tIndex].showError = false
                    list[tIndex].loading = false
                    that.$set(that.nowData, tIndex, list[tIndex])
                    that.handleAfterRender(list, tIndex)
                  }
                })
                .catch(() => {
                  console.log(tIndex, '*---tIndex')
                  const boolPage =
                    JSON.stringify(list) ===
                    JSON.stringify(
                      that.mesConfig[that.currentIndex - 1].urlList
                    )

                  console.log(boolPage, 'boolPage')
                  if (boolPage) {
                    list[tIndex].showError = true
                    list[tIndex].loading = false
                    that.$set(that.nowData, tIndex, list[tIndex])
                    that.handleAfterRender(list, tIndex)
                  }
                })
            })(tIndex)
          } else {
            list[tIndex].loading = false
            this.$set(this.nowData, tIndex, list[tIndex])
            this.handleAfterRender(list, tIndex)
          }
          tIndex++
        }, window.appconfig.drawInterval || 50)
      },
      //全部完成渲染
      handleAfterRender(list, tIndex) {
        if (tIndex === list.length) {
          const resendInterval =
            this.mesConfig[this.currentIndex - 1].resendInterval
          //图片无限刷新
          this.imgTimer = setInterval(() => {
            this.nowData.forEach((item) => {
              if (item.type === 'img') {
                item.url = item.url + '?' + new Date().getTime()
              }
            })
          }, resendInterval || 2000)
        }
      },
      //轮播列表
      handleshuffling() {
        let time = window.appconfig.mesInterval || 50000
        let intertime = 200
        let currtime = 0
        this.timer = setInterval(() => {
          this.handleTransit()
          this.setNowData()
          currtime = 0
        }, time)
        this.bartimer = setInterval(() => {
          currtime += intertime
          let per = Math.floor((currtime / time) * 10000) / 100
          this.$Loading.update(per)
        }, intertime)
      },
      //添加轮播过渡效果
      handleTransit() {
        const domList = document.getElementsByClassName('iframe_item')
        for (let index = 0; index < domList.length; index++) {
          const element = domList[index]
          element.classList.remove('slide-in-right')
          setTimeout(() => {
            element.classList.add('slide-in-right')
          }, 10)
        }
      },
      //打开新页面
      openPage(url) {
        window.open(url)
      },
      initKeydown() {
        window.addEventListener('keydown', this.watchKeydown)
        this.$Loading.config({
          color: '#0026C9', // #0926C7
          failedColor: '#fff', //ED6D00
          height: 3,
          duration: 800,
        })
      },
      watchKeydown(event) {
        let key = event.key
        let keyStepTime = 500
        // 10分钟无动作自动播放
        if (this.autoTimer) clearTimeout(this.autoTimer)
        this.autoTimer = setTimeout(() => {
          if (this.timer == null || this.timer == '') this.handleshuffling()
        }, 600000)

        if (['PageDown', 'PageUp', 'Tab', 'Enter'].indexOf(key) != -1)
          event.preventDefault()
        if (['PageDown', 'PageUp'].indexOf(key) != -1) {
          let time = new Date().getTime()
          let diff = time - this.lastTime
          if (diff < keyStepTime) {
            if (this.lastdiff < keyStepTime) {
              this.lastdiff = 10000
              this.lastTime = 0
              if (this.optimer) clearTimeout(this.optimer)
            } else {
              // 切换自动手动
              this.lastdiff = diff
              this.lastTime = time
              if (this.optimer) clearTimeout(this.optimer)
              this.optimer = setTimeout(() => {
                this.lastdiff = 10000
                this.toggleTimer()
              }, keyStepTime)
            }
            return
          }
        }

        switch (key) {
          case 'PageDown':
            this.lastTime = new Date().getTime()
            this.clearProcess()
            this.toNextPage()
            break
          case 'PageUp':
            this.lastTime = new Date().getTime()
            this.optimer = setTimeout(() => {
              this.clearProcess()
              this.toPreviousPage()
            }, keyStepTime)
            break
          // case 'Tab':
          //   this.clearProcess()
          //   this.toFirstPage()
          //   break

          case 'Escape':
            window.location.reload()
            break
          case 'Shift':
            window.location.reload()
            break
        }
      },
      clearProcess() {
        if (this.bartimer) {
          this.$Loading.finish()
          clearInterval(this.bartimer)
        }
        if (this.optimer) clearTimeout(this.optimer)
        this.optimer = null
        this.bartimer = null
        this.lastTime = 0
        this.lastdiff = 10000
      },
      toggleTimer() {
        if (this.timer == null || this.timer == '') {
          this.handleshuffling()
        } else {
          if (this.timer) clearInterval(this.timer)
          if (this.bartimer) clearInterval(this.bartimer)
          this.$Loading.finish()
          this.timer = this.bartimer = null
        }
      },
      // 上一页
      toPreviousPage() {
        if (this.timer) clearInterval(this.timer)
        this.timer = null
        this.currentIndex = this.currentIndex - 2
        this.handleTransit()
        this.setNowData()
      },
      // 下一页
      toNextPage() {
        if (this.timer) clearInterval(this.timer)
        this.timer = null
        this.handleTransit()
        this.setNowData()
      },
      //回首页
      toFirstPage() {
        if (this.timer) clearInterval(this.timer)
        this.timer = null
        this.currentIndex = 0
        this.handleTransit()
        this.setNowData()
      },
    },
  }
</script>
<style lang="scss">
  .loadingbar {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    .ivu-spin {
      color: #fff;
      font-size: 30px;
    }
    .ivu-spin-large .ivu-spin-dot {
      width: 75px;
      height: 75px;
      display: block;
    }
  }
</style>
<style lang="scss" scoped>
  @import '@/styles/animation.scss';
  :deep(.ivu-loading-bar-inner) {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  .page-container {
    width: 100%;
    height: 100%;
    background: #000;
    font-family: 'Reggae One', cursive;
    .wrap {
      background: url(../assets/imgs/bg/home_bg.jpg) no-repeat #000;
      background-size: cover;
      line-height: 1.15;

      header {
        position: relative;
        height: 1.2rem;
        background: url(../assets/imgs/head_bg.png) no-repeat top center;
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
        max-width: 1920px;
        padding: 0 0.125rem 0;
        display: flex;
        height: calc(100vh - 1.2rem);
        position: relative;
        overflow: hidden;
      }
    }
  }

  .iframe_box {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    justify-content: center;
    .iframe_item {
      flex: 1;
      height: 100%;
      min-width: 30%;
      padding: 0 6px 15px;
      border-radius: 5px;

      .title {
        background: url(../assets/imgs/iframe_title.png) no-repeat top center;
        background-size: 100% 100%;
        color: #fff;
        font-size: 0.4rem;
        font-weight: 500;
        text-align: center;
      }
      iframe {
        width: 100%;
        height: 100%;
      }
      .center-box {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 100%;
        overflow: hidden;
        img {
          width: auto;
          height: 100%;
        }
      }
    }
  }
</style>
<style lang="scss">
  .slide-out-left {
    -webkit-animation: slide-out-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-out-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  .slide-in-right {
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @-webkit-keyframes slide-out-left {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
  }

  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
