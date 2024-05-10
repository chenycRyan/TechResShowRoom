<template>
  <div class="brand-container" ref="mainRef">
    <MenuNavgation
      ref="menunav"
      :active="active"
      :pageShow="btnShow"
      @go="go"
    ></MenuNavgation>
    <page-show
      v-if="maxPage > 1"
      :currPage="curIndex + 1"
      :totalPages="maxPage"
      :customStyle="{ top: '4%', right: '16%' }"
    ></page-show>
    <div class="wrap">
      <BoardHeader></BoardHeader>
      <section class="mainbox">
        <Particles></Particles>
        <div class="content-wrap">
          <div class="router-wrap">
            <div
              class="frame"
              @animationend="animationEndFunc(frame, $event)"
              @webkitAnimationEnd="animationEndFunc(frame, $event)"
              v-for="(frame, index) in data"
              :key="index"
              :style="{
                width:
                  frame.frameWidth || computePercent(100, data.length || 1),
              }"
              :class="[
                !frame.animateFlag || frame.animateFlag == 'animate'
                  ? `animate__animated ${frame.animate}`
                  : '',
              ]"
            >
              <div class="con-wrap">
                <div class="frame-title">
                  <div class="left-bg"></div>
                  <h4>{{ frame.title }}</h4>

                  <div class="right-bg"></div>
                </div>
                <div class="frame-con-wrap" :style="getStyle(frame)">
                  <div
                    @click="goPdfPage(item)"
                    class="item"
                    :class="getMode(frame)"
                    v-for="(item, iindex) in frame.list"
                    :key="iindex"
                  >
                    <!-- <video
                      :id="iindex"
                      :src="item.url"
                      controls="controls"
                      style="width: 90%; height: 85%; object-fit: fill"
                      v-if="item.video"
                    >
                      your browser does not support the video tag
                    </video> -->
                    <div style="width: 90%; height: 90%" v-if="item.video">
                      <!-- <VideoPlayer
                        :src="item.url"
                        :id="'video' + new Date().getTime().toString() + iindex"
                      ></VideoPlayer> -->
                      <VideoView
                        :url="item.url"
                        :id="'video' + new Date().getTime().toString() + iindex"
                        ref="video"
                      ></VideoView>
                    </div>
                    <div class="video-name" v-if="item.video">
                      {{ getVideoName(item) }}
                    </div>
                    <img
                      :src="item.img"
                      alt=""
                      :class="frame.imgHideBg ? 'big' : ''"
                      v-else
                    />
                  </div>
                </div>
              </div>
              <div class="divider" v-if="index < data.length - 1">
                <div class="inner vertical"></div>
              </div>
            </div>
          </div>
          <div class="page-wrap" v-if="btnShow">
            <div @click="showList" class="roll_btn" v-if="videoPage">
              <div class="btn-con">目录</div>
            </div>
            <div @click="go('prev')" class="roll_btn">
              <div class="btn-con">
                <!-- <img :src="require('../assets/imgs/prev.png')" alt="" /> -->
                上一页
              </div>
            </div>
            <div @click="go('next')" class="roll_btn">
              <div class="btn-con">
                下一页
                <!-- <img :src="require('../assets/imgs/next.png')" alt="" /> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-if="modal">
      <Modal v-model="modal" title="教材购买" width="1020">
        <iframe
          :src="extraSrc"
          frameborder="0"
          width="1000"
          height="600"
        ></iframe>
        <template #footer>
          <div></div>
        </template>
      </Modal>
    </div>
    <div v-if="videoPage">
      <Drawer
        title="视频目录"
        placement="left"
        width="400"
        :closable="false"
        v-model="videoModel"
      >
        <Menu
          width="100%"
          :active-name="`${curIndex}_${activeIndex}`"
          v-if="videoModel"
        >
          <MenuGroup
            :title="`第${tindex + 1}页`"
            v-for="(titem, tindex) in videoMenu"
            :key="tindex"
          >
            <MenuItem
              :name="`${tindex}_${sindex}`"
              v-for="(sitem, sindex) in titem"
              :key="`${tindex}_${sindex}`"
              @click.native="go(tindex, sindex)"
            >
              {{ getVideoName(sitem) }}
            </MenuItem>
          </MenuGroup>
        </Menu>
      </Drawer>
    </div>
  </div>
</template>

<script>
  // import VideoPlay from '@/components/VideoPlay/index.vue'
  export default {
    // components: { VideoPlay },
    data() {
      return {
        activeIndex: 0,
        config: window.bookConfig,
        key: null,
        oridata: [],
        data: [],
        btnShow: false,
        curIndex: 0,
        frameStyle: null,
        maxPage: 0,
        modal: false,
        extraSrc: null,
        active: '',
        from: null,
        secondPage: false,
        videoPage: false,
        videoModel: false,
        videoMenu: [],
        prevIndex: 0,
      }
    },
    mounted() {
      this.prevIndex = 0
      const query = this.$route.query
      if (query && query.id) {
        this.active = query.id
      }
      const page = localStorage.getItem('curPage') || null
      if (page != null) {
        const temp = JSON.parse(page)
        if (this.from == 'home' || this.from == 'showWeb') {
          this.curIndex = 0
        } else {
          if (temp.active == this.active) {
            this.curIndex = temp.curIndex
          } else {
            this.curIndex = 0
          }
        }
      } else {
        this.curIndex = 0
      }
      this.init()
    },
    watch: {
      '$route.query': {
        handler(val, oldval) {
          this.prevIndex = 0
          if (val && val.id) {
            this.active = val.id
          }
          if (val && val.id !== oldval.id) {
            this.curIndex = 0
            this.init()
          }
        },
      },
      secondPage: {
        handler(val) {
          if (val) {
            if (this.$refs.menunav) {
              this.$refs.menunav.showMenu()
            }
          } else {
            if (this.$refs.menunav) {
              this.$refs.menunav.backMneu()
            }
          }
        },
        immediate: true,
      },
      modal: {
        handler(val) {
          if (val == false) {
            if (this.$refs.mainRef) {
              this.$refs.mainRef.click()
            }
          }
        },
        immediate: true,
      },
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.from = from.name
      })
    },
    methods: {
      //点击目录播放功能
      startPlay(index) {
        this.$refs.video[index].startPlay()
      },
      animationEndFunc(frame, e) {
        frame['animateFlag'] = 'no'
        const ele = e.target
        if (ele.classList.contains('animate__animated')) {
          ele.classList.remove('animate__animated', frame.animate)
        }
      },
      showList() {
        // console.log(this.oridata)
        this.videoModel = true
        const data = this.oridata[0]
        let temp = [],
          len = data.list.length
        for (let i = 0; i < len / data.show; i++) {
          temp.push(data.list.slice(i * data.show, (i + 1) * data.show))
        }
        this.videoMenu = temp
        setTimeout(() => {
          document.querySelector('.ivu-menu-item-active').scrollIntoView()
        }, 300)
      },
      getVideoName(item) {
        const name = item.url.split('/').pop()
        const res = name.substring(0, name.length - 4)
        return res
      },
      setPage() {
        localStorage.setItem(
          'curPage',
          JSON.stringify({
            active: this.active,
            curIndex: this.curIndex,
          })
        )
      },
      getMode(frame) {
        if (frame.imgHideBg) {
          return ''
        } else {
          return frame.mode
        }
      },
      goPdfPage(item) {
        if (item.url) {
          if (item.extra) {
            this.extraSrc = item.url
            this.modal = true
          } else if (item.video) {
            // console.log('11111')
          } else {
            this.$router.push(`/fileView?file=${encodeURI(item.url)}`)
          }
        } else if (item.list) {
          // console.log(item.path)
          this.$router.push(`/menu?id=${encodeURI(item.path)}`)
        }
      },
      go(op, index) {
        this.activeIndex = 1
        if (op == 'prev') {
          if (this.curIndex > 0) {
            this.curIndex -= 1
          }
        } else if (op == 'next') {
          if (this.curIndex < this.maxPage - 1) {
            this.curIndex += 1
          }
        } else {
          this.curIndex = op
          //等待视频渲染完成后播放
          this.activeIndex = index
          setTimeout(() => {
            this.startPlay(index)
          }, 1500)
        }
        if (this.prevIndex == this.curIndex) return
        this.data = []
        this.$nextTick(() => {
          this.data = this.oridata.map((item) => {
            const obj = JSON.parse(JSON.stringify(item))
            const page = Math.ceil(item.list.length / item.show)
            if (item.list.length > this.curIndex * item.show) {
              obj.list = item.list.slice(
                this.curIndex * item.show,
                (this.curIndex + 1) * item.show
              )
            } else {
              obj.list = item.list.slice(
                (page - 1) * item.show,
                page * item.show
              )
            }
            obj['animateFlag'] = this.curIndex <= page - 1 ? 'animate' : 'no'
            this.videoPage = obj.list.length && obj.list[0].video ? true : false
            if (obj.list.length < item.show) {
              const num = item.show - obj.list.length
              let imgUrl = `/images/more_${item.mode}.png`
              if (this.$route.query.id.includes('video')) {
                imgUrl = `/images/more_video_${item.mode}.png`
              }
              for (let i = 0; i < num; i++) {
                obj.list.push({
                  img: imgUrl,
                  url: '',
                })
              }
            }
            return obj
          })
          this.setPage()
          this.prevIndex = this.curIndex
        })
      },
      getStyle(frame) {
        let width = null,
          height = null,
          align = 'space-between'
        let repeatY = frame.show / frame.repeatX
        align = repeatY == 1 ? 'center' : 'space-between'
        if (frame.width) {
          width = frame.width
        } else {
          width = this.computePercent(90, frame.repeatX)
        }
        if (frame.height) {
          height = frame.height
        } else {
          height = this.computePercent(94, repeatY)
        }

        return {
          'grid-template-columns': `repeat(${frame.repeatX}, ${width})`,
          'grid-template-rows': `repeat(${repeatY}, ${height})`,
          'align-content': align,
        }
      },
      computePercent(base, num) {
        const p = base / num
        return p.toString() + '%'
      },
      getRealData() {
        let tempObj = this.config[this.key[0]]
        this.key.shift()
        if (this.key.length) {
          while (this.key.length) {
            let obj1 = tempObj.list.filter((item) => item.id == this.key[0])
            tempObj = obj1[0]
            this.key.shift()
          }
          if (Array.isArray(tempObj)) return tempObj
          return [tempObj]
        } else {
          return tempObj.list
        }
      },
      init() {
        this.btnShow = false
        const url = decodeURI(this.$route.query.id)
        this.key = url.split(';')
        if (this.key.length == 1) {
          this.secondPage = false
        } else {
          this.secondPage = true
        }
        this.oridata = this.getRealData()
        this.maxPage = 0
        this.data = this.oridata.map((item) => {
          let obj = JSON.parse(JSON.stringify(item))
          const page = Math.ceil(item.list.length / item.show)
          if (item.list.length > item.show) {
            this.btnShow = true
            if (item.list.length > this.curIndex * item.show) {
              obj.list = item.list.slice(
                this.curIndex * item.show,
                (this.curIndex + 1) * item.show
              )
            } else {
              obj.list = item.list.slice(
                (page - 1) * item.show,
                page * item.show
              )
            }
          }

          if (this.maxPage < page) {
            this.maxPage = page
          }
          this.videoPage = obj.list.length && obj.list[0].video ? true : false
          if (obj.list.length < item.show) {
            const num = item.show - obj.list.length
            let imgUrl = `/images/more_${item.mode}.png`
            if (this.$route.query.id.includes('video')) {
              imgUrl = `/images/more_video_${item.mode}.png`
            }
            for (let i = 0; i < num; i++) {
              obj.list.push({
                img: imgUrl,
                url: '',
              })
            }
          }
          return obj
        })
        this.setPage()
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/animation.scss';
  // /deep/.top_title{
  //   .showTime{}
  // }
  // 全屏展示粒子特效
  :deep(.ivu-menu-vertical.ivu-menu-light) {
    &::after {
      width: 0;
    }
  }
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
    .roll_btn {
      width: auto;
      margin: 0;
      height: 0.6rem;
      line-height: 0.6rem;
      // background-color: #0028d8;
      background-color: #219dfd;
      background-image: linear-gradient(19deg, #219dfd 0%, #5221ff 100%);
      border-color: #5e65eb;
      padding: 0 0.5rem;
      box-sizing: border-box;
      &:nth-child(1),
      &:nth-child(2) {
        margin-right: 2rem;
      }
      &::after,
      &::before {
        border-color: #5e65eb;
      }
      .btn-con {
        font-size: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .wrap {
      width: 100%;
      height: 100%;
      background: url(../assets/imgs/bg/home_bg.jpg) no-repeat #000;
      background-size: cover;
      line-height: 1.15;
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
        .page-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 0.3rem;
          img {
            width: 0.32rem;
            height: 0.32rem;
          }
        }
        .router-wrap {
          width: 100%;
          height: calc(100% - 1.3rem);
          display: flex;
          justify-content: space-between;
          .frame {
            height: 100%;
            display: flex;
            position: relative;
            .divider {
              position: absolute;
              right: 0;
              top: 50%;
              height: 100%;
              transform: translateY(-50%);
              .inner {
                // border: 1px solid #dcdee2;
                &.vertical {
                  width: 6px;
                  height: 100%;
                  // background: rgb(2, 136, 146);
                  // background-image: linear-gradient(
                  //   #001244 0%,
                  //   #8cecf3 50%,
                  //   #031c89 100%
                  // );
                  background-image: url('~@/assets/imgs/devide.png');
                  background-size: 100% 100%;
                  border-top: none;
                  border-bottom: none;
                  cursor: col-resize;
                }
                .bar-con {
                  position: absolute;
                  overflow: hidden;
                  left: 1px;
                  top: 50%;
                  height: 32px;
                  transform: translateY(-50%);
                  .trigger-bar {
                    width: 4px;
                    height: 1px;
                    background: rgba(23, 35, 61, 0.25);
                    float: left;
                    margin-top: 3px;
                  }
                }
              }
            }
            .con-wrap {
              width: 100%;
              height: 100%;
              position: relative;
              display: flex;
              flex-direction: column;
              .frame-con-wrap {
                height: calc(100% - 0.9rem);
                display: grid;
                grid-auto-flow: row;
                justify-content: space-around;
                align-content: space-between;
                .item {
                  cursor: pointer;
                  width: 100%;
                  height: 100%;
                  background-size: 100% 100%;
                  background-repeat: no-repeat;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: all 1s ease;
                  position: relative;
                  .video-name {
                    position: absolute;
                    top: -10px;
                    width: 100%;
                    left: 0;
                    text-align: center;
                    color: white;
                    font-size: 0.24rem;
                  }
                  // &:hover {
                  //   transform: translate(0, -20px);
                  // }
                  img {
                    width: 80%;
                    display: block;
                    max-height: 95%;
                    // image-rendering: crisp-edges;
                    object-fit: contain;
                    &.big {
                      width: 98%;
                    }
                  }
                  &.transverse {
                    background-image: url(../assets/imgs/border_bg1.png);
                    img {
                      width: 90%;
                      height: 85%;
                      object-fit: fill;
                    }
                  }
                  &.portrait {
                    background-image: url(../assets/imgs/border_bg2.png);
                  }
                }
              }

              .frame-title {
                font-size: 0.4rem;
                color: white;
                text-align: center;
                padding-top: 0.2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 0.3rem;
                box-sizing: border-box;
                .left-bg {
                  width: 1.8rem;
                  height: 0.42rem;
                  background: url(../assets/imgs/light.png) no-repeat;
                  background-size: 100% 100%;
                }
                .right-bg {
                  width: 1.8rem;
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
