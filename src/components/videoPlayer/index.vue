<template>
  <div style="width: 100%; height: 100%">
    <video :id="id" ref="videoPlayer" class="video-js vjs-fluid">
      <source :src="src" />
      您的浏览器不支持 HTML5 video 标签。
    </video>
  </div>
</template>

<script>
  import videojs from 'video.js'
  export default {
    name: 'VideoPlayer',
    props: {
      src: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        default: 'video',
      },
    },
    data() {
      return {
        player: null,
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.destroyVideo()
    },
    methods: {
      destroyVideo() {
        if (this.player) {
          this.player.off('touchend', this.playPause)
          this.player.dispose()
        }
      },
      playPause(e) {
        if (e.target.nodeName === 'VIDEO') {
          if (this.player.paused()) {
            this.player.play()
          } else {
            this.player.pause()
          }
        }
        e.preventDefault()
      },
      init() {
        this.player = videojs(
          this.id,
          {
            autoplay: false,
            controls: true,
            fluid: true,
            // nativeControlsForTouch: true,
            controlBar: {
              children: [
                { name: 'playToggle' }, // 播放按钮
                { name: 'currentTimeDisplay' }, // 当前已播放时间
                { name: 'progressControl' }, // 播放进度条
                { name: 'durationDisplay' }, // 总时间
                {
                  name: 'volumePanel', // 音量控制
                  inline: false, // 不使用水平方式
                },
                { name: 'FullscreenToggle' }, // 全屏
              ],
            },
          },
          () => {
            // this.player.log('onPlayerReady', this)
            this.player.on('touchend', this.playPause)
          }
        )
      },
    },
  }
</script>
<style lang="scss" scoped>
  :deep(.video-js) {
    .vjs-big-play-button {
      left: 50%;
      top: 50%;
      transform: translate(-45px, -24px);
    }

    .vjs-current-time,
    .vjs-duration {
      display: block;
    }
    &.vjs-fluid,
    &.vjs-fluid:not(.vjs-audio-only-mode) {
      height: 100%;
    }
  }
</style>
