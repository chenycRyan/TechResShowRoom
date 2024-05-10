<template>
  <div class="brand-container">
    <MenuNavgation
      :pageShow="btnShow"
      @go="go"
      active="showWeb"
    ></MenuNavgation>
    <div class="wrap">
      <BoardHeader></BoardHeader>
      <section class="mainbox">
        <Particles></Particles>
        <div class="content-wrap">
          <div class="router-wrap">
            <div class="frame">
              <div class="con-wrap">
                <div class="bg-wrap"></div>
                <div class="frame-title">
                  <div class="left-bg"></div>
                  <h4>汇博云平台</h4>
                  <div class="right-bg"></div>
                </div>
                <div class="frame-con-wrap">
                  <div class="frame-con">
                    <iframe
                      id="frame1"
                      src="http://robotxcloud.cn/login?userName=ZT-5&password=a123456"
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame right">
              <div class="con-wrap right">
                <div class="bg-wrap right"></div>
                <div class="frame-title">
                  <div class="left-bg"></div>
                  <h4>汇博云课堂</h4>
                  <div class="right-bg"></div>
                </div>
                <div class="frame-con-wrap right">
                  <div class="frame-con right">
                    <iframe
                      id="frame2"
                      :src="iframeUrl2"
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import '@/assets/js/flexible'
  import axios from 'axios'

  export default {
    data() {
      return {
        btnShow: false,
        iframeUrl2: '',
      }
    },

    mounted() {
      axios
        .post('http://47.114.105.112:3108/orion/users/common/login', {
          userName: 'ZT-6',
          password: 'YTEyMzQ1Ng==',
        })
        .then((res) => {
          this.iframeUrl2 = `http://www.robotxplus.cn?token=${res.data.access_token}`
          // this.iframeUrl2 = `http://192.168.0.111:8000?token=${res.data.access_token}`
        })
    },
    methods: {
      go() {},
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/animation.scss';
  // 全屏展示粒子特效
  .particles-bg {
    width: 100%;
    height: 100%;
    background: transparent;
    position: absolute;
  }
  .brand-container {
    font-family: 'Reggae One', cursive;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    .wrap {
      width: 100%;
      height: 100%;
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
        height: calc(100vh - 1rem - 0.25rem);
        position: relative;
        overflow: hidden;

        .content-wrap {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 9;
          padding: 0 2%;
        }
        .loc-wrap {
          display: flex;
          font-size: 0.28rem;
          color: white;
          align-items: center;
          .text {
            color: #50cbf1;
            font-size: 0.3rem;
          }
        }
        .router-wrap {
          width: 100%;
          flex: 1;
          display: flex;
          justify-content: space-between;
          .frame {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            &.right {
              justify-content: flex-start;
            }
            .con-wrap {
              width: 100%;
              height: 100%;
              position: relative;
              .bg-wrap {
                position: absolute;
                top: 20px;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: calc(100% - 20px);
                background: url(../assets/imgs/bookleft.png) no-repeat;
                background-size: 100% 100%;
                opacity: 0.5;
                filter: none;
                &.right {
                  background: url(../assets/imgs/bookright.png) no-repeat;
                  background-size: 100% 100%;
                }
              }
              .frame-con-wrap {
                width: 100%;
                height: 90%;
                display: flex;
                justify-content: flex-end;
                position: relative;
                z-index: 19;
                &.right {
                  justify-content: flex-start;
                }
                .frame-con {
                  width: 93%;
                  height: 89%;
                  margin-right: 22px;
                  &.right {
                    margin-right: 0;
                    margin-left: 20px;
                  }
                }
                iframe {
                  width: 100%;
                  height: 100%;
                  z-index: -1;
                }
              }

              .frame-title {
                font-size: 0.34rem;
                color: white;
                text-align: center;
                margin-top: 0.4rem;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 0.1rem;
                .left-bg {
                  width: 2.18rem;
                  height: 0.42rem;
                  background: url(../assets/imgs/light.png) no-repeat;
                  background-size: 100% 100%;
                }
                .right-bg {
                  width: 2.18rem;
                  height: 0.42rem;
                  background: url(../assets/imgs/light.png) no-repeat;
                  background-size: 100% 100%;
                  transform: rotate(180deg);
                }
              }
            }
          }
        }
      }
    }
  }
</style>
