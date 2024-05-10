<template>
  <div
    class="webrtc-player-wrapper"
    :id="'webrtc_player_wrapper_' + videoId"
    @mouseenter="enterArea"
    @mouseleave="leaveArea"
  >
    <video
      :id="videoId"
      ref="rtc_media_player"
      class="webrtc-player"
      controls
      autoplay
      muted
    ></video>
    <div
      class="ctl-wrapper"
      :style="enterFlag === true ? 'opacity:0.7' : 'opacity:0'"
    >
      <div id="derectionBtns_live" class="ptz-panel first-section-margintop">
        <span class="ptz-panel-control">
          <img
            id="ptzImg"
            :src="ptzicon"
            class="ptz-map"
            alt=""
            usemap="#ptzMap_live"
            style="float: right; width: 100%"
          />
          <map id="ptzMap_live" name="ptzMap_live">
            <area
              id="goUp_live"
              shape="poly"
              coords="38,5,49,2,61,0,74,2,84,5,72,36,67,34,61,33,56,34,51,35"
              title="向上"
              @mousedown="cameraPTZStart('up')"
              @mouseup="cameraPTZStop('up')"
            />
            <area
              id="rightUp_live"
              shape="poly"
              coords="84,5,72,36,77,38,82,42,85,46,87,51,118,38,113,28,105,18,95,11"
              title="右上"
              @mousedown="cameraPTZStart('rightUp')"
              @mouseup="cameraPTZStop('rightUp')"
            />
            <area
              id="goRight_live"
              shape="poly"
              coords="87,51,118,38,121,49,123,61,121,74,118,85,87,72,89,67,90,61,89,56"
              title="向右"
              @mousedown="cameraPTZStart('right')"
              @mouseup="cameraPTZStop('right')"
            />
            <area
              id="rightDown_live"
              shape="poly"
              coords="118,85,87,72,85,77,82,81,77,85,72,87,85,118,94,113,104,105,112,96"
              title="右下"
              @mousedown="cameraPTZStart('rightDown')"
              @mouseup="cameraPTZStop('rightDown')"
            />
            <area
              id="goDown_live"
              shape="poly"
              coords="72,87,85,118,75,121,61,123,48,121,38,118,51,87,56,89,61,90,67,89"
              title="向下"
              @mousedown="cameraPTZStart('down')"
              @mouseup="cameraPTZStop('down')"
            />
            <area
              id="leftDown_live"
              shape="poly"
              coords="38,118,51,87,46,85,42,82,38,77,36,72,5,85,10,94,19,105,29,113"
              title="左下"
              @mousedown="cameraPTZStart('leftDown')"
              @mouseup="cameraPTZStop('leftDown')"
            />
            <area
              id="goLeft_live"
              shape="poly"
              coords="36,72,5,85,2,74,0,61,2,49,5,38,36,51,34,55,33,61,34,68"
              title="向左"
              @mousedown="cameraPTZStart('left')"
              @mouseup="cameraPTZStop('left')"
            />
            <area
              id="leftUp_live"
              shape="poly"
              coords="5,38,36,51,38,46,41,42,46,38,51,35,38,5,28,10,,18,18,11,27"
              title="左上"
              @mousedown="cameraPTZStart('leftUp')"
              @mouseup="cameraPTZStop('leftUp')"
            />
            <area
              id="centerBtn_live"
              shape="circle"
              coords="61,61,28"
              :title="centerTitle"
              @click="cameraPTZContinuous()"
            />
          </map>
        </span>
        <span v-if="showSpeed" class="ptz-panel-speed">
          <div class="text-center">+</div>
          <div
            id="rotateSpeedSld_live"
            class="slider3 slider-vertical ptz-speed"
          >
            <div
              class="slider-range-vertical"
              style="height: 7px; top: 88px"
            ></div>
            <div
              id="rotateSpeedBar_live"
              class="bar3 bar-vertical"
              style="position: absolute; top: 75px"
            ></div>
            <div class="slider-tip hidden" style="left: 0px; top: -24px">2</div>
          </div>
          <div class="text-center">-</div>
        </span>
      </div>
      <div id="LENSDiv_live" class="ptz-extend-len" v-show="false">
        <div id="becomeBtns_live" class="ptz-extend-line">
          <button
            id="BecomeSub1_live"
            type="button"
            class="ptz-extend-item zoom-in"
            hidefocus="true"
            title="变倍 +"
            @mousedown="cameraPTZStart('zoomin')"
            @mouseup="cameraPTZStop('zoomin')"
          ></button>
          <button
            id="BecomeAdd1_live"
            type="button"
            class="ptz-extend-item zoom-out"
            hidefocus="true"
            title="变倍 -"
            @mousedown="cameraPTZStart('zoomout')"
            @mouseup="cameraPTZStop('zoomout')"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ptzIconBegin from '@/assets/visual/ptz.a6699021.png'
import ptzIconEnd from '@/assets/visual/ptz.a6699021_parse.png'
import { toLine } from '@/utils/visual/tool'
import { ptzStart, ptzStop } from '@/api/cameraVisual'
export default {
  name: 'WebrtcPlayer',
  data() {
    return {
      timestr: '',
      timer: null,
      sdk: null,
      session: null,
      showSpeed: false,
      centerStatus: 0,
      centerTitles: ['开始', '停止'],
      centerDirection: 'left',
      scriptLoad: true,
      enterFlag: false,
      cameraInfo: null,
    }
  },
  props: {
    videoId: {
      type: String,
      default: 'rtc_media_player',
    },
    source: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  computed: {
    // 控制中心点标题
    centerTitle() {
      return this.centerTitles[this.centerStatus]
    },
    ptzicon() {
      return this.centerStatus == 0 ? ptzIconBegin : ptzIconEnd
    },
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
      this.timestr = ''
    }
  },
  methods: {
    init() {
      // this.timer = window.setInterval(this.runtime, 1000)
      // 初始化SDK
      // const elem = document.createElement('script')
      // elem.src = '/visual/srs.mix.js'
      // document.getElementById('webrtc_player').appendChild(elem)
      // elem.onload = this.sdkLoad
      if (this.source && this.source.url) {
        this.play(this.source)
      }
    },
    sdkLoad() {
      console.log('sdkLoad')
      // eslint-disable-next-line no-undef
      // console.log(SrsRtcPlayerAsync)
      this.scriptLoad = true
      if (this.source && this.source.url) {
        this.play(this.source)
      }
    },
    play(cameraInfo) {
      this.cameraInfo = cameraInfo
      let url = cameraInfo.url
      if (!url) {
        this.$message({
          message: '请传入视频播放地址!',
          type: 'warning',
        })
        return
      }
      if (this.scriptLoad == false) {
        setTimeout(() => {
          this.play()
          console.warn('sdk load:' + this.scriptLoad + ' wait sdk load...')
        }, 2000)
        return
      }
      console.log('play begin ', this.scriptLoad)
      // eslint-disable-next-line no-undef

      // eslint-disable-next-line no-undef
      this.sdk = new SrsRtcPlayerAsync()

      // 绑定播放对象
      var playerElem = document.getElementById(this.videoId)

      playerElem.srcObject = this.sdk.stream
      // console.log('this.sdk', this.sdk)
      // 开始播放
      // var url = 'webrtc://153.37.213.2/live/1c697a485b2e_unv'

      var that = this
      this.sdk
        .play(url)
        .then(function (session) {
          that.session = session
          console.log('session', that.session)
        })
        .catch(function (reason) {
          that.sdk.close()
          console.error(reason)
        })
    },
    close() {
      var playerElem = document.getElementById(this.videoId)
      playerElem.srcObject = null
      this.sdk.close()
    },
    cameraPTZStart(direction) {
      if (this.centerStatus == 1) {
        this.centerStatus = 0
      }
      direction = toLine(direction)
      this.cameraPTZStartCtl(direction)
      // this.$Message.info('按下 ' + direction + ' toLinke:' + toLine(direction))
    },
    cameraPTZStop(direction) {
      direction = toLine(direction)
      this.cameraPTZStopCtl(direction)
      // this.$Message.info('松开 ' + direction + ' toLinke:' + toLine(direction))
    },
    // 持续起-止移动
    cameraPTZContinuous() {
      if (this.centerStatus == 0) {
        this.centerStatus = 1
        this.cameraPTZBegin()
      } else {
        this.centerStatus = 0
        this.cameraPTZEnd()
      }
    },
    cameraPTZBegin() {
      let direction = this.centerDirection == 'right' ? 'left' : 'right'
      this.centerDirection = direction
      this.cameraPTZStartCtl(direction)
    },
    cameraPTZEnd() {
      let direction = this.centerDirection
      this.cameraPTZStopCtl(direction)
    },
    cameraPTZStartCtl(direction) {
      let cameraIp = this.cameraInfo.ip
      ptzStart({
        direction,
        cameraIp,
      }).then((res) => {
        res = res.data
        if (!res.success) {
          this.$message({
            message: '云台控制失败',
            type: 'warning',
          })
        }
      })
    },
    cameraPTZStopCtl(direction) {
      let cameraIp = this.cameraInfo.ip
      ptzStop({
        direction,
        cameraIp,
      }).then((res) => {
        res = res.data
        if (!res.success) {
          this.$message({
            message: '云台控制失败',
            type: 'warning',
          })
        }
      })
    },
    runtime() {
      // 获取系统当前的年、月、日、小时、分钟、毫秒
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hour = date.getHours()
      var minutes = date.getMinutes()
      var second = date.getSeconds()
      var timestr =
        year +
        '-' +
        this.strPadding(month) +
        '-' +
        this.strPadding(day) +
        ' ' +
        this.strPadding(hour) +
        ':' +
        this.strPadding(minutes) +
        ':' +
        this.strPadding(second)
      // 将系统时间设置到div元素中
      this.timestr = timestr
    },
    strPadding(val) {
      if (val < 10) {
        return '0' + val
      } else {
        return val
      }
    },
    enterArea() {
      // this.enterFlag = true
    },
    leaveArea() {
      // this.enterFlag = false
    },
  },
}
</script>

<style scoped lang="scss">
.webrtc-player-wrapper {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  .webrtc-player {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .ctl-wrapper {
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all 0.2s linear;
    .ptz-panel {
      color: #3f4447;
      user-select: none;
      .ptz-panel-control {
        display: inline-block;
        zoom: 1;
        padding: 10px;
        vertical-align: middle;
        cursor: pointer;
      }
      .ptz-panel-speed {
        display: inline-block;
        zoom: 1;
        padding: 10px 0;
        vertical-align: middle;
        .text-center {
          text-align: center;
        }
        .ptz-speed {
          height: 95px !important;
          width: 6px !important;
          margin: 0 9px;
          text-align: center;
          border: 1px solid #e0e3e6;
          position: relative;
          display: inline-block;
          zoom: 1;
          border-radius: 4px;
          background: #53606d;
          box-sizing: content-box;
          .slider-range-vertical {
            background: #009cff;
            bottom: 0;
            width: 2px;
            margin-left: 2px;
            margin-right: 2px;
            position: absolute;
            z-index: 1;
            left: 0;
            background: #26a2c8;
            display: block;
            border: 0;
            border-radius: 4px;
          }
          .bar-vertical {
            left: -3px;
            bottom: 0;
            position: absolute;
            top: 39px;
            width: 12px;
            height: 13px;
            outline: 0;
            border: 0;
            background: url(http://192.168.0.96:88/skin/default_1/images/slider-handle.98997d6d.png)
              no-repeat 0 0;
          }
          .slider-tip {
            height: 20px;
            line-height: 20px;
            padding: 0 5px;
            color: #000;
            background-color: #f2f2ba;
            border: 1px solid gray;
            position: absolute;
            left: 0px;
            top: -24px;
          }
        }
      }
    }
    .ptz-extend-len {
      padding: 10px 7px 5px 10px;
      position: relative;
      z-index: 9;
      text-align: center;
      user-select: none;
      .ptz-extend-line {
        display: inline-block;
        zoom: 1;
        overflow: hidden;
        margin-right: 3px;
        margin-bottom: 5px;
        white-space: nowrap;
        .ptz-extend-item {
          // background-image: url('~@/assets/visual/ptz_btn.png');
          background-color: transparent;
          width: 48px;
          height: 27px;
          border: 0;
          padding: 0;
          cursor: pointer;
          text-align: center;
          line-height: 27px;
          vertical-align: middle;
          &.zoom-in {
            background-position: 0 0;
          }
          &.zoom-out {
            background-position: -48px 0;
          }
        }
      }
    }
  }
}
</style>
