<template>
  <div class="brand-container">
    <div class="wrap">
      <BoardHeader title="教学资源库管理系统" class="head-wrap"></BoardHeader>
      <section class="mainbox">
        <Particles></Particles>
        <div class="content-wrap">
          <div class="box" @click="go('/menu?id=topPlan')">
            <img class="target-img" src="/images/home/dcgh.gif" alt="" />
            <div class="animate">
              <img class="one" :src="require('@/assets/imgs/a_1.png')" alt="" />
              <img
                class="three"
                :src="require('@/assets/imgs/a_4.png')"
                alt=""
              />
            </div>
            <div class="title">
              <div class="number">01</div>
              <div class="text">顶层规划</div>
            </div>
          </div>
          <div class="box" @click="go('/menu?id=trainProgram')">
            <img src="/images/home/pyfa.gif" alt="" />
            <div class="animate">
              <img class="one" :src="require('@/assets/imgs/a_1.png')" alt="" />
              <img
                class="three"
                :src="require('@/assets/imgs/a_4.png')"
                alt=""
              />
            </div>
            <div class="title">
              <div class="number">02</div>
              <div class="text">培养方案</div>
            </div>
          </div>
          <div class="box" @click="go('/menu?id=publish')">
            <img src="/images/home/cbjc.gif" alt="" />
            <div class="animate">
              <img class="one" :src="require('@/assets/imgs/a_1.png')" alt="" />
              <img
                class="three"
                :src="require('@/assets/imgs/a_4.png')"
                alt=""
              />
            </div>
            <div class="title">
              <div class="number">03</div>
              <div class="text">出版教材</div>
            </div>
          </div>

          <div class="box" @click="go('/menu?id=books')">
            <img src="/images/home/xbjc.gif" alt="" />
            <div class="animate">
              <img class="one" :src="require('@/assets/imgs/a_1.png')" alt="" />
              <img
                class="three"
                :src="require('@/assets/imgs/a_4.png')"
                alt=""
              />
            </div>
            <div class="title">
              <div class="number">04</div>
              <div class="text">校本教材</div>
            </div>
          </div>
          <div class="box" @click="go('/menu?id=teachResources')">
            <img src="/images/home/jxzy.gif" alt="" />
            <div class="animate">
              <img class="one" :src="require('@/assets/imgs/a_1.png')" alt="" />
              <img
                class="three"
                :src="require('@/assets/imgs/a_4.png')"
                alt=""
              />
            </div>
            <div class="title">
              <div class="number">05</div>
              <div class="text">教学资源</div>
            </div>
          </div>
          <div class="box" @click="go('/showWeb')">
            <img src="/images/home/ypt.gif" alt="" />
            <div class="animate">
              <img class="one" :src="require('@/assets/imgs/a_1.png')" alt="" />
              <img
                class="three"
                :src="require('@/assets/imgs/a_4.png')"
                alt=""
              />
            </div>
            <div class="title">
              <div class="number">06</div>
              <div class="text">教学云平台</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },

    mounted() {},
    methods: {
      go(link) {
        this.$router.push(link)
      },
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
  .head-wrap {
    :deep {
      header {
        height: 2.3rem;
        background-image: url(../assets/imgs/head_bg2.png);
        .top_title {
          flex-direction: column;
          height: 100%;
          img {
            height: 0.7rem;
          }
          h2 {
            font-size: 0.6rem;
          }
        }
        .showTime {
          top: 0.2rem;
        }
        .full {
          top: 0.27rem;
        }
      }
    }
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

      .mainbox {
        min-width: 1024px;
        height: calc(100vh - 3rem - 0.25rem);
        position: relative;
        overflow: hidden;
        .content-wrap {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          box-sizing: border-box;
          position: relative;
          z-index: 999;
        }
        .box {
          cursor: pointer;
          width: 15%;
          padding: 0.7rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 1s ease;
          &:hover {
            border-radius: 3px;
            box-shadow: 0 0 4px white, 0 0 4px white inset;
            transform: translate(0, -20px);
          }
          img {
            width: 85%;
          }
          .animate {
            position: relative;
            width: fit-content;
            text-align: center;
            .one {
              position: absolute;
              top: 0;
              animation: upDown 4s linear infinite, showHide 2s linear infinite;
            }
            .three {
              animation: showHide 2s linear infinite;
            }
          }
          .title {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 0.2rem;
            color: white;
            font-size: 0.32rem;
            .number {
              padding: 0.15rem;
              border: 1px solid white;
              border-radius: 50%;
              margin-right: 20px;
            }
            .text {
              position: relative;
              padding: 0.1rem 0;
              border-bottom: 4px transparent solid;
              border-image: linear-gradient(to right, white, transparent) 1 3;
            }
          }
        }
      }
    }
  }
  @keyframes upDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(60%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes showHide {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
</style>
