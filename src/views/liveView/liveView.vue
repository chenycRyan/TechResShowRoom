<template>
  <div class="live-page">
    <div
      class="page-wrap"
      @click="
        () => {
          layout = layout == 1 ? 2 : 1
        }
      "
    >
      <!-- <BoardHeader></BoardHeader> -->
      <section class="mainbox">
        <Particles></Particles>
        <section class="main-wrap">
          <div
            class="player-wrap"
            :class="{
              'layout-12': layout == 1,
              'layout-13': layout == 2,
              'layout-11': layout == 11,
            }"
          >
            <div
              v-for="(item, index) in sourceUrlList"
              class="player-item"
              :key="item.id"
            >
              <div class="player-content">
                <webrtc-player
                  :ref="'player' + index"
                  :videoId="'player_' + item.id"
                  :source="item"
                ></webrtc-player>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
    <!-- <MenuNavgation
      :pageShow="true"
      style="z-index: 102"
      ref="menuNav"
      extraButton="布局"
      @go="
        (para) => {
          if (para == 'prev') {
          } else if (para == 'next') {
          } else if (para == 'extra') {
            layout = layout == 1 ? 0 : 1
          } else if (para == 'cushome') {
          }
        }
      "
    ></MenuNavgation> -->
  </div>
</template>

<script>
  import webrtcPlayer from '@/components/visual/webrtcPlayer'
  export default {
    components: {
      webrtcPlayer,
    },
    data() {
      return {
        layout: 11, // 0-2*2 1-1*2 11-1*1 行列布局
        sourceUrlList: [
          {
            id: 10001,
            url: 'webrtc://192.168.8.25/live/livestream1',
          },
        ],
      }
    },
    mounted() {
      this.$refs.menuNav.showMenu()
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/animation.scss';
  .live-page {
    --viewer-pdf-toolbar-background-color: rgb(44, 39, 163);
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    .page-wrap {
      background: url(../../assets/imgs/bg/home_bg.jpg) no-repeat #000;
      background-size: cover;
    }
    .mainbox {
      width: 100%;
      padding: 0.125rem 0.125rem;
      display: flex;
      // height: calc(100vh - 1.2rem);
      height: 100vh;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    }
    .main-wrap {
      width: 100%;
      height: 100%;
      .player-wrap {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: grid;
        grid-template-columns: calc(50% - 5px) calc(50% - 5px);
        grid-template-rows: calc(50% - 5px) calc(50% - 5px);
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        &.layout-11 {
          grid-template-columns: 100%;
          grid-template-rows: 100%;
        }
        &.layout-12 {
          grid-template-columns: 100%;
          grid-template-rows: calc(50% - 5px) calc(50% - 5px);
        }
        &.layout-13 {
          grid-template-columns: calc(50% - 5px) calc(50% - 5px);
          grid-template-rows: 100%;
        }
        .player-item {
          background-color: #ccc;
          border-radius: 5px;
          overflow: hidden;
        }
        .player-content {
          width: 100%;
          height: 100%;
          box-shadow: 0 0 3px #2a5caa;
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 5px;
        }
      }
    }
  }
</style>
