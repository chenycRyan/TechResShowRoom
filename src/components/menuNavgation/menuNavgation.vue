<template>
  <div
    id="menuDiv"
    class="menu-nav"
    @mousedown="sphereStart"
    @mouseup="sphereEnd"
    @touchstart="sphereStartTouch"
    @touchmove="sphereMoveTouch"
    @touchend="sphereEndTouch"
    :style="customStyle"
  >
    <div class="menu-wrap">
      <div
        class="menu pos"
        style="transform: scale(0.7)"
        v-if="btnShow"
        @click="showMenu"
      >
        <div class="bg rotateAnimation"></div>
        <div class="inner">
          <div class="menu-data">导航</div>
        </div>
      </div>
      <div
        class="menu big pos"
        style="transform: scale(0.7)"
        v-if="btnMenuShow"
      >
        <div class="outer">
          <div class="left con" @click="go('prev')">
            <div class="inner-con">后退</div>
          </div>
          <div class="right con" @click="go('next')">
            <div class="inner-con">前进</div>
          </div>
          <div
            class="up con"
            @click="go('prevPage')"
            v-if="pageShow"
            id="findPrevious"
          >
            <div class="inner-con">上页</div>
          </div>
          <div
            class="down con"
            @click="go('nextPage')"
            v-if="pageShow"
            id="findNext"
          >
            <div class="inner-con">下页</div>
          </div>
          <div class="menu-data" @click="go('home')">菜单</div>

          <div class="menu-item-wrap">
            <div class="menu-item" v-if="homeButton" @click="go('cushome')">
              <div>{{ homeButton }}</div>
            </div>
            <div class="menu-item" v-else @click="goMenu('/home')">
              <div>首页</div>
            </div>
            <div class="menu-item" v-if="extraButton" @click="go('extra')">
              <div>{{ extraButton }}</div>
            </div>
            <!-- <div class="menu-item" @click="biggest" v-if="!fullscreen">
              <div>最大化</div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="menu-outer pos" style="transform: scale(0.7)" v-if="btnNav">
        <svg
          class="svg-item"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewbox="280 140 280 140"
        >
          <path
            @click="goMenu('/menu?id=topPlan')"
            class="one"
            fill-rule="evenodd"
            stroke-width="2px"
            stroke="rgb(19, 77, 164)"
            :fill="
              active.includes('topPlan') ? '#33bdc9' : 'rgba(5, 4, 50, 0.8)'
            "
            d="M80.108,122.469 L5.978,122.469 C6.959,80.055 18.176,40.174 37.254,5.203 L101.181,42.138 C88.475,66.250 80.952,93.520 80.108,122.469 Z"
          />
          <path
            @click="goMenu('/menu?id=trainProgram')"
            class="two"
            fill-rule="evenodd"
            stroke-width="2px"
            stroke="rgb(19, 77, 164)"
            :fill="
              active.includes('trainProgram')
                ? '#33bdc9'
                : 'rgba(5, 4, 50, 0.8)'
            "
            d="M69.197,128.574 L5.324,91.669 C26.642,56.635 56.078,27.097 91.012,5.655 L127.695,69.238 C103.970,84.287 83.922,104.615 69.197,128.574 Z"
          />
          <path
            @click="goMenu('/menu?id=publish')"
            class="three"
            fill-rule="evenodd"
            stroke-width="2px"
            stroke="rgb(19, 77, 164)"
            :fill="
              active.includes('publish') ? '#33bdc9' : 'rgba(5, 4, 50, 0.8)'
            "
            d="M42.164,101.066 L5.518,37.545 C40.471,18.302 80.363,6.931 122.815,5.849 L122.815,78.879 C93.685,80.015 66.290,87.912 42.164,101.066 Z"
          />
          <path
            @click="goMenu('/menu?id=books')"
            class="four"
            fill-rule="evenodd"
            stroke-width="2px"
            stroke="rgb(19, 77, 164)"
            :fill="active.includes('books') ? '#33bdc9' : 'rgba(5, 4, 50, 0.8)'"
            d="M5.966,78.786 L5.966,5.833 C48.496,6.720 88.494,17.913 123.559,37.031 L87.186,100.077 C62.840,87.163 35.257,79.546 5.966,78.786 Z"
          />
          <path
            @click="goMenu('/menu?id=teachResources')"
            class="five"
            fill-rule="evenodd"
            stroke-width="2px"
            stroke="rgb(19, 77, 164)"
            :fill="
              active.includes('teachResources')
                ? '#33bdc9'
                : 'rgba(5, 4, 50, 0.8)'
            "
            d="M5.729,68.123 L42.091,5.097 C77.246,26.477 106.874,56.047 128.349,91.153 L65.369,127.542 C50.334,103.436 29.890,83.063 5.729,68.123 Z"
          />
          <path
            @click="goMenu('/showWeb')"
            class="six"
            fill-rule="evenodd"
            stroke-width="2px"
            stroke="rgb(19, 77, 164)"
            :fill="
              active.includes('showWeb') ? '#33bdc9' : 'rgba(5, 4, 50, 0.8)'
            "
            d="M27.102,123.469 C26.246,94.089 18.514,66.437 5.462,42.062 L68.445,5.672 C87.701,40.771 99.031,80.839 100.017,123.469 L27.102,123.469 Z"
          />
          <text
            class="text one"
            style="pointer-events: none"
            :fill="active.includes('topPlan') ? '#f9f9f9' : '#34f0ff'"
            @click="goMenu('/menu?id=topPlan')"
          >
            <tspan x="0" y="10">顶层</tspan>
            <tspan x="0" y="30">规划</tspan>
          </text>
          <text
            class="text two"
            style="pointer-events: none"
            :fill="active.includes('trainProgram') ? '#f9f9f9' : '#34f0ff'"
            @click="goMenu('/menu?id=trainProgram')"
          >
            <tspan x="0" y="10">培养</tspan>
            <tspan x="0" y="30">方案</tspan>
          </text>
          <text
            class="text three"
            style="pointer-events: none"
            :fill="active.includes('publish') ? '#f9f9f9' : '#34f0ff'"
            @click="goMenu('/menu?id=publish')"
          >
            <tspan x="0" y="10">出版</tspan>
            <tspan x="0" y="30">教材</tspan>
          </text>
          <text
            class="text four"
            style="pointer-events: none"
            :fill="active.includes('books') ? '#f9f9f9' : '#34f0ff'"
            @click="goMenu('/menu?id=books')"
          >
            <tspan x="0" y="10">校本</tspan>
            <tspan x="0" y="30">教材</tspan>
          </text>
          <text
            class="text five"
            style="pointer-events: none"
            :fill="active.includes('teachResources') ? '#f9f9f9' : '#34f0ff'"
            @click="goMenu('/menu?id=teachResources')"
          >
            <tspan x="0" y="10">教学</tspan>
            <tspan x="0" y="30">资源</tspan>
          </text>
          <text
            class="text six"
            style="pointer-events: none"
            :fill="active.includes('showWeb') ? '#f9f9f9' : '#34f0ff'"
            @click="goMenu('/showWeb')"
          >
            <tspan x="0" y="10">教学</tspan>
            <tspan x="0" y="30">云平台</tspan>
          </text>
        </svg>
        <div class="menu" @click="showMenu">
          <div class="bg rotateAnimation"></div>
          <div class="inner">
            <div class="menu-data">返回</div>
          </div>
        </div>
        <div class="menu-home-wrap">
          <div class="menu-home" @click="goMenu('/home')">
            <div>首页</div>
          </div>
          <!-- <div class="menu-home" @click="biggest" v-if="!fullscreen">
            <div>最大化</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'MenuNavgation',
    props: {
      pageShow: {
        type: Boolean,
        default: false,
      },
      extraButton: {
        type: String,
        default: '',
      },
      homeButton: {
        type: String,
        default: '',
      },
      active: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        customStyle: {
          left: '8%',
          top: '60%',
        },
        btnShow: false,
        btnMenuShow: false,
        btnNav: true,
        beforeX: null,
        beforeY: null,
        afterX: null,
        afterY: null,
        touchData: null,
        touchX: null,
        touchY: null,
      }
    },
    mounted() {
      const loc = localStorage.getItem('loc') || null
      if (loc) {
        const locObj = JSON.parse(loc)
        if (locObj.left != null && locObj.top != null) {
          this.customStyle = {
            left: locObj.left + 'px',
            top: locObj.top + 'px',
          }
        }
      }
      this.initKeydown()
    },
    computed: {
      ...mapState(['fullscreen']),
    },
    methods: {
      biggest() {
        // 最大化
        this.$store.commit('handleFullScreen')
      },
      showMenu() {
        if (this.beforeX == this.afterX && this.beforeY == this.afterY) {
          this.btnShow = false
          this.btnMenuShow = true
          this.btnNav = false
        }
      },
      backMneu() {
        if (this.beforeX == this.afterX && this.beforeY == this.afterY) {
          this.btnNav = true
          this.btnShow = false
          this.btnMenuShow = false
        }
      },
      go(para) {
        if (this.beforeX != this.afterX || this.beforeY != this.afterY) {
          return
        }
        if (para == 'home') {
          this.btnMenuShow = false
          this.btnNav = true
          this.btnShow = false
        } else if (para == 'prev') {
          console.log('prev')
          window.history.back()
        } else if (para == 'next') {
          window.history.forward()
          console.log('next')
        } else if (para == 'prevPage') {
          this.$emit('go', 'prev')
        } else if (para == 'nextPage') {
          this.$emit('go', 'next')
        } else if (para == 'extra') {
          this.$emit('go', 'extra')
        } else if (para == 'cushome') {
          this.$emit('go', 'cushome')
        }
      },
      goMenu(str) {
        if (this.beforeX == this.afterX && this.beforeY == this.afterY) {
          this.$router.push(str)
        }
      },
      doExtra() {
        this.$emit('doExtra')
      },
      sphereStart(event) {
        let odiv = document.getElementById('menuDiv')
        this.beforeX = event.clientX
        this.beforeY = event.clientY
        //算出鼠标相对元素的位置
        let disX = event.clientX - odiv.offsetLeft
        let disY = event.clientY - odiv.offsetTop
        let left = ''
        let top = ''
        document.onmousemove = (e) => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          left = e.clientX - disX
          top = e.clientY - disY
          const docWidth = document.body.clientWidth //网页可见宽
          const docHeight = document.body.clientHeight //网页可见高
          if (top > docHeight) {
            top = docHeight
          }
          if (top < 0) {
            //超上边界
            top = 0
          }
          if (left > docWidth) {
            //超右边界
            left = docWidth
          }
          if (left < 0) {
            //超左边界
            left = 0
          }
          //绑定元素位置到positionX和positionY上面
          //移动当前元素
          this.touchX = left
          this.touchY = top
          odiv.style.left = left + 'px'
          odiv.style.top = top + 'px'
        }
      },
      sphereEnd(e) {
        this.afterX = e.clientX
        this.afterY = e.clientY
        document.onmousemove = null
        if (this.touchX != null && this.touchY != null) {
          const locObj = {
            left: this.touchX,
            top: this.touchY,
          }
          localStorage.setItem('loc', JSON.stringify(locObj))
        }
      },
      sphereStartTouch(event) {
        let odiv = document.getElementById('menuDiv')
        this.isMoving = false
        let touch = event.touches[0]
        let { pageX, pageY } = touch
        let disx = pageX - odiv.offsetLeft
        let disy = pageY - odiv.offsetTop
        this.touchData = { pageX, pageY, disx, disy }
      },
      sphereMoveTouch(event) {
        let _this = this
        let odiv = document.getElementById('menuDiv')
        let boxw = odiv.offsetWidth
        let boxh = odiv.offsetHeight
        let touch = event.touches[0]
        let { disx, disy } = this.touchData
        let { pageX, pageY } = touch
        if (_this.isMoving === false) {
          _this.isMoving = true
        }
        let x, y
        // const docWidth = document.body.clientWidth //网页可见宽
        // const docHeight = document.body.clientHeight //网页可见高
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
        //绑定元素位置到positionX和positionY上面
        //移动当前元素
        this.touchX = x
        this.touchY = y
        odiv.style.left = x + 'px'
        odiv.style.top = y + 'px'
      },
      sphereEndTouch() {
        if (this.touchX != null && this.touchY != null) {
          const locObj = {
            left: this.touchX,
            top: this.touchY,
          }
          localStorage.setItem('loc', JSON.stringify(locObj))
        }
      },
      initKeydown() {
        window.addEventListener('keydown', this.watchKeydown)
      },
      watchKeydown(event) {
        switch (event.key) {
          case 'PageDown':
            if (this.pageShow) this.go('nextPage')
            break

          case 'PageUp':
            if (this.pageShow) this.go('prevPage')
            break
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  .menu-wrap {
    position: relative;
    z-index: 999;
    width: fit-content;
    // width: 4rem;
    // height: 4rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-outer {
    width: fit-content;
    padding: 1.2rem;
    background-image: url('~@/assets/imgs/circle.png');
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: 100%;
    position: relative;
    .svg-item {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50%;
      .text {
        font-size: 0.22rem;
        font-weight: bold;
        width: 0.44rem;
      }
      .one {
        transform: translate(0.2rem, 1.37rem) scale(0.7);
        &.text {
          transform: translate(0.42rem, 1.85rem);
        }
      }
      .two {
        transform: translate(0.53rem, 0.52rem) scale(0.7);
        &.text {
          transform: translate(0.9rem, 1rem);
        }
      }
      .three {
        transform: translate(1.37rem, 0.18rem) scale(0.7);
        &.text {
          transform: translate(1.75rem, 0.45rem);
        }
      }
      .four {
        transform: translate(2.5rem, 0.2rem) scale(0.7);
        &.text {
          transform: translate(2.8rem, 0.45rem);
        }
      }
      .five {
        transform: translate(3.3rem, 0.53rem) scale(0.7);
        &.text {
          transform: translate(3.62rem, 0.95rem);
        }
      }
      .six {
        transform: translate(3.86rem, 1.35rem) scale(0.7);
        &.text {
          transform: translate(4.1rem, 1.85rem);
        }
      }
    }
    .menu-item {
      position: absolute;
      width: 1.07rem;
      height: 1.28rem;
      color: #34f0ff;
      border: 1px solid white;
      &.one {
        top: 50%;
        left: 0;
      }
    }
  }
  .menu-home-wrap {
    position: absolute;
    left: 0;
    top: 80%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .menu-home + .menu-home {
      background-color: #219dfd;
      background-image: linear-gradient(19deg, #219dfd 0%, #5221ff 100%);
    }
  }
  .menu-home {
    color: white;
    font-size: 0.3rem;
    font-weight: bold;
    width: 1.2rem;
    height: 0.6rem;
    // border: 1px solid white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      160deg,
      rgb(0, 147, 233) 0%,
      rgb(128, 208, 199) 100%
    );
    opacity: 0.7;
  }
  .menu-item-wrap {
    color: white;
    font-size: 0.3rem;
    font-weight: bold;
    // border: 1px solid white;
    opacity: 0.7;
    position: absolute;
    left: 0%;
    top: 110%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    .menu-item {
      width: 1.2rem;
      height: 0.6rem;
      border-radius: 3px;
      background-image: linear-gradient(
        160deg,
        rgb(0, 147, 233) 0%,
        rgb(128, 208, 199) 100%
      );
      text-align: center;
      line-height: 0.6rem;
    }
    .menu-item + .menu-item {
      background-color: #219dfd;
      background-image: linear-gradient(19deg, #219dfd 0%, #5221ff 100%);
    }
  }

  .menu {
    width: fit-content;
    padding: 0.3rem;
    box-sizing: border-box;
    position: relative;
    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url('~@/assets/imgs/menu_bg.png');
      background-size: 100% 100%;
      left: 0;
      top: 0;
    }
    .inner {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-image: url('~@/assets/imgs/menu_inner_circle.png');
      background-size: 100% 100%;
      color: #34f0ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.3rem;
      font-weight: bold;
      position: relative;
      z-index: 99;
    }
    .outer {
      color: #34f0ff;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-image: url('~@/assets/imgs/menu2.png');
      background-size: 100% 100%;
      position: relative;
      font-size: 0.28rem;
      font-weight: bold;
      .menu-home {
        left: 30%;
        top: unset;
        bottom: -1rem;
      }
      .menu-data {
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-0.6rem, -0.6rem);
        text-align: center;
        line-height: 1.2rem;
        border-radius: 50%;
        font-size: 0.3rem;
        font-weight: bold;
      }
      .con {
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        text-align: center;
        line-height: 1.2rem;
      }
      .inner-con {
        width: fit-content;
        height: fit-content;
      }
      .left {
        top: 50%;
        left: 0.2rem;
        transform-origin: top right;
        transform: rotate(45deg);
        .inner-con {
          transform-origin: top right;
          transform: rotate(-45deg) translate(-0.18rem, -0.1rem);
        }
      }
      .right {
        top: 50%;
        right: 0.2rem;
        transform-origin: top left;
        transform: rotate(-45deg);
        .inner-con {
          transform-origin: bottom right;
          transform: rotate(45deg) translate(-0.08rem, 0.18rem);
        }
      }
      .up {
        top: 0.2rem;
        left: 50%;
        transform-origin: bottom left;
        transform: rotate(-45deg);
        .inner-con {
          transform-origin: bottom right;
          transform: rotate(45deg) translate(-0.1rem, 0.1rem);
        }
      }
      .down {
        position: absolute;
        left: 50%;
        bottom: 0.2rem;
        transform-origin: top left;
        transform: rotate(45deg);
        .inner-con {
          transform-origin: top right;
          transform: rotate(-45deg) translate(-0.1rem, -0.1rem);
        }
      }
    }
  }

  .pos {
    position: absolute;
  }

  .rotateAnimation {
    animation: rotateImg 1.8s linear infinite;
  }

  @keyframes rotateImg {
    from {
      transform: rotate(0deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
    }
    to {
      transform: rotate(360deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
    }
  }
</style>
<style>
  .menu-nav {
    position: fixed;
    z-index: 999;
    min-width: 1rem;
    min-height: 1rem;
  }
</style>
