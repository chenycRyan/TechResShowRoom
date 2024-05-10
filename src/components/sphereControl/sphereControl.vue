<template>
  <div
    class="sphere"
    id="sphere"
    @mousedown="sphereStart"
    @mouseup="sphereEnd"
    @click.stop="showctlToggle"
    @touchstart="sphereStartTouch"
    @touchmove="sphereMoveTouch"
    @touchend="sphereEndTouch"
    :style="customStyle"
  >
    <span>菜单</span>
    <div
      v-show="showctl"
      :class="{ animate__bounceIn: showctl }"
      class="sphere-wrap animate__animated"
    >
      <div
        class="ctlbtn"
        @click.stop="goMethod(item)"
        v-for="item in controlData"
        :key="item.method"
      >
        <div class="text">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { setPos, getPos } from '@/utils/sphere'
export default {
  name: 'SphereControl',
  props: {
    controlData: {
      type: Array,
      default: function () {
        return []
      },
      customStyle: {
        type: Object,
        default: function () {
          return {}
        },
      },
    },
  },
  data() {
    return {
      showctl: false,
      isMoving: false,
      touchData: {},
    }
  },
  mounted() {
    this.moveInit()
    // this.setSpherePos()
  },
  beforeDestroy() {
    let box = document.getElementById('sphere')
    let offsetLeft = box.offsetLeft
    let offsetTop = box.offsetTop
    setPos({ offsetLeft, offsetTop })
  },
  methods: {
    moveInit() {
      document.addEventListener('mouseleave', () => {
        document.onmousemove = document.onmouseup = null
      })
    },
    setSpherePos() {
      let pos = getPos()
      let box = document.getElementById('sphere')
      if (pos && pos.offsetLeft && pos.offsetTop) {
        box.style.left = pos.offsetLeft + 'px'
        box.style.top = pos.offsetTop + 'px'
      }
    },
    goMethod(item) {
      this.$emit(item.method)
    },
    showctlToggle() {
      console.log('this.isMoving', this.isMoving)
      if (this.isMoving === false) {
        this.showctl = !this.showctl
      }
    },
    sphereStart(event) {
      console.log('sphere', event)
      let box = document.getElementById('sphere')
      let _this = this
      this.isMoving = false
      // e.pageX, e.pageY 是鼠标在页面上的坐标
      // box.offsetLeft, box.offsetTop 是元素相对于页面左上角的偏移位置
      // disx, disy 便是鼠标相对于元素左上角的偏移位置
      let boxw = box.offsetWidth || 80
      let boxh = box.offsetHeight || 80
      let disx = event.pageX - box.offsetLeft
      let disy = event.pageY - box.offsetTop
      this.touchData = { pageX: event.pageX, pageY: event.pageY, disx, disy }
      document.onmousemove = function (e) {
        if (_this.isMoving === false) {
          _this.isMoving = true
        }
        let x, y
        // e.pageX - disx  鼠标在页面上的位置 - 鼠标在元素中的偏移位置  得到的是元素相对于页面左上角的偏移位置
        if (e.pageX - disx > 0) {
          // 元素相对于页面左上角的偏移位置 大于0时
          if (e.pageX - disx > document.documentElement.clientWidth - boxw) {
            // 元素相对于页面左上角的偏移位置 移出到页面以外（右侧）
            x = document.documentElement.clientWidth - boxw // 60是元素自身的宽高
          } else {
            x = e.pageX - disx
          }
        } else {
          // 元素移到到页面以外（左侧）
          x = 0
        }

        if (e.pageY - disy > 0) {
          if (e.pageY - disy > document.documentElement.clientHeight - boxh) {
            // 元素移动到页面以外（底部）
            y = document.documentElement.clientHeight - boxh
          } else {
            y = e.pageY - disy
          }
        } else {
          // 元素移动到页面以外（顶部）
          y = 0
        }

        box.style.left = x + 'px'
        box.style.top = y + 'px'
      }
    },
    sphereMove() {
      // console.log('sphereM', event)
    },
    sphereEnd(event) {
      console.log('sphereE', event)
      document.onmousemove = null
      this.isMoving = false
    },
    sphereStartTouch(event) {
      let box = document.getElementById('sphere')
      this.isMoving = true
      let touch = event.touches[0]
      let { pageX, pageY } = touch
      let disx = pageX - box.offsetLeft
      let disy = pageY - box.offsetTop
      this.touchData = { pageX, pageY, disx, disy }
    },
    sphereMoveTouch(event) {
      let box = document.getElementById('sphere')
      let touch = event.touches[0]
      let { disx, disy } = this.touchData
      let { pageX, pageY } = touch
      let boxw = box.offsetWidth || 80
      let boxh = box.offsetHeight || 80
      let x, y
      if (pageX - disx > 0) {
        // 元素相对于页面左上角的偏移位置 大于0时
        if (pageX - disx > document.documentElement.clientWidth - boxw) {
          // 元素相对于页面左上角的偏移位置 移出到页面以外（右侧）
          x = document.documentElement.clientWidth - boxw // 60是元素自身的宽高
        } else {
          x = pageX - disx
        }
      } else {
        // 元素移到到页面以外（左侧）
        x = 0
      }

      if (pageY - disy > 0) {
        if (pageY - disy > document.documentElement.clientHeight - boxh) {
          // 元素移动到页面以外（底部）
          y = document.documentElement.clientHeight - boxh
        } else {
          y = pageY - disy
        }
      } else {
        // 元素移动到页面以外（顶部）
        y = 0
      }

      box.style.left = x + 'px'
      box.style.top = y + 'px'
    },
    sphereEndTouch() {
      // console.log('end touch', event)
      //let touch = event.touches[0]
      // let { pageX, pageY } = touch
      // let oldPageX = this.touchData.pageX
      // let oldPageY = this.touchData.pageY
      // if (oldPageX == pageX && oldPageY == pageY) {
      //   console.log('showctlToggle END')
      //   this.showctlToggle()
      // }
    },
  },
}
</script>
<style lang="scss" scoped>
.sphere {
  position: absolute;
  left: 60px;
  top: calc(100% - 120px);
  width: 60px;
  height: 60px;
  background: #3bf8fb;
  border-radius: 50%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  // box-shadow: inset 26px -37px 38px 42px rgba(34, 109, 189, 0.5),
  //   inset 9px -7px 35px -11px #304344,
  //   inset 28px 30px 58px 4px rgba(40, 21, 21, 0.73);
  z-index: 102;
  // background-color: #044f7b;
  background-image: linear-gradient(160deg, #0c699e 0%, #5b88de 100%);

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
  .sphere-wrap {
    // width: 100%;
    height: 100%;

    .sphere-prev,
    & > div:nth-child(1) {
      position: absolute;
      top: -60px;
      right: -60px;
    }
    .sphere-next,
    & > div:nth-child(2) {
      position: absolute;
      top: 18px;
      right: -84px;
      transform: rotate(38deg);
    }
    .sphere-layout,
    & > div:nth-child(3) {
      position: absolute;
      top: -102px;
      right: 10px;
      transform: rotate(-42deg);
    }
  }
}
</style>
