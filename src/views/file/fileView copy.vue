<template>
  <div class="file-page">
    <div class="wrap">
      <!-- <BoardHeader></BoardHeader> -->
      <section class="mainbox">
        <Particles v-show="isShowCustom === true"></Particles>
        <section class="main-wrap" v-show="isShowCustom === true">
          <div
            class="file-list"
            :class="{
              'file-list-12': layout == 1,
              'file-error': isFileError,
              'file-list-1': layout == 2,
            }"
            ref="filelist"
          >
            <div
              v-for="i in pageSize"
              :key="i"
              class="file-item"
              ref="fileItem"
              @click="showDoc(i, $event)"
            ></div>
          </div>
          <div class="ctl-wrap">
            <!-- <div class="btn-prev" @click="goPrev">上一页</div>
            <div class="btn-next" @click="goNext">下一页</div> -->
            <!-- <page-button
              title="布局"
              @click.native="goPrev"
              :disabled="prevDisabled"
            ></page-button> -->
            <page-button
              title="上一页"
              @click.native="goPrev"
              :disabled="prevDisabled"
            ></page-button>
            <page-button
              title="下一页"
              @click.native="goNext"
              :disabled="nextDisabled"
            ></page-button>
          </div>
        </section>
        <section class="main-wrap" v-show="isShowCustom === false">
          <embed
            v-show="filePath"
            height="100%"
            :src="filePath"
            type="application/pdf"
            width="100%"
            class="pdf-viewer"
            id="pdfviewer"
          />
          <!--  '/pdfjs/web/myviewer.html?file=' + encodeURIComponent(filePath) -->
          <!-- <iframe
            :src="
              '/pdfjs/web/myviewer.html?file=' + encodeURIComponent(filePath)
            "
            width="100%"
            class="pdf-viewer iframe-viewer"
            id="pdfviewer"
            height="100%"
          ></iframe> -->
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
    <div
      class="sphere"
      id="sphere"
      v-if="showSphere"
      @mousedown="sphereStart"
      @mouseup="sphereEnd"
      @click.stop="showctlToggle"
      @touchstart="sphereStartTouch"
      @touchmove="sphereMoveTouch"
      @touchend="sphereEndTouch"
    >
      <div
        v-show="showctl"
        :class="{ animate__bounceIn: showctl }"
        class="animate__animated"
      >
        <div class="sphere-prev ctlbtn" @click.stop="goPrevSphere">
          <div class="text">上一页</div>
        </div>
        <div class="sphere-next ctlbtn" @click.stop="goNextSphere">
          <div class="text">下一页</div>
        </div>
        <div class="sphere-layout ctlbtn" @click.stop="changeLayoutSphere">
          <div class="text">布局</div>
        </div>
      </div>
    </div>
    <page-show
      :currPage="currPage"
      :totalPages="totalPages"
      :customStyle="{ top: '4%', right: '16%' }"
      v-show="isShowCustom === true"
    ></page-show>
    <!-- homeButton="模式"
    :extraButton="isShowCustom === true ? '布局' : ''" -->
    <MenuNavgation
      :pageShow="true"
      style="z-index: 102"
      ref="menuNav"
      @go="
        (para) => {
          if (para == 'prev') {
            goPrevSphere()
          } else if (para == 'next') {
            goNextSphere()
          } else if (para == 'extra') {
            changeLayoutSphere()
          } else if (para == 'cushome') {
            changeModeSphere()
          }
        }
      "
    ></MenuNavgation>
    <div v-show="loading" class="loading-section">
      <!-- <div class="loading-content">
        <div class="text">数据加载中</div>
        <div class="dots">...</div>
      </div> -->
      <div class="loading-img"></div>
    </div>
  </div>
</template>

<script>
  import { setPos, getPos } from '@/utils/sphere'
  export default {
    data() {
      return {
        showSphere: false,
        testFilePath:
          'http://192.168.3.10:3182/static/OpenAPI安全认证库%20（Java）开发指南V1.1.3_20210716095939_20211203141454.pdf',
        // https://www.huiborobot.com.cn:3183/static/OpenAPI安全认证库 （Java）开发指南V1.1.3_20210716095939_20211203141454.pdf
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
        isShowCustom: false,
        loading: false,
        fileShowType: 'frame',
        // pageSize: 8,
        // pageRow: 2,
        // pageCol: 4,
      }
    },
    beforeDestroy() {
      if (this.showSphere) {
        let box = document.getElementById('sphere')
        let offsetLeft = box.offsetLeft
        let offsetTop = box.offsetTop
        setPos({ offsetLeft, offsetTop })
      }
      window.removeEventListener('resize', this.reRender)
    },
    mounted() {
      this.$refs.menuNav.showMenu()

      if (this.$route.query.file) {
        // this.filePath = decodeURI(this.$route.query.file)
        this.filePath = decodeURI('http://192.168.0.45/test.pdf')
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
      if (this.isShowCustom) {
        this.init()
      } else {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 2000)
      }
      if (this.showSphere) this.setSpherePos()
      window.addEventListener('resize', this.reRender)
    },
    computed: {
      totalPages() {
        return Math.ceil(this.docPages / this.pageSize)
      },
      currPage() {
        return Math.floor(this.currPageIndex / this.pageSize)
      },
      pageSize() {
        var size = 0
        switch (this.layout) {
          case 0:
            size = 8
            break
          case 1:
            size = 2
            break
          case 2:
            size = 1
            break
        }
        return size
      },
      pageRow() {
        var data = 0
        switch (this.layout) {
          case 0:
            data = 2
            break
          case 1:
            data = 1
            break
        }
        return data
      },
      pageCol() {
        var data = 0
        switch (this.layout) {
          case 0:
            data = 4
            break
          case 1:
            data = 2
            break
        }
        return data
      },
    },
    methods: {
      frameExec(methods) {
        let frameContent =
          document.getElementById('pdfviewer').contentWindow.exportMethods
        switch (methods) {
          case 'next':
            frameContent.next()
            break
          case 'prev':
            frameContent.prev()
            break
        }
      },
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
      setSpherePos() {
        let pos = getPos()
        let box = document.getElementById('sphere')
        if (pos && pos.offsetLeft && pos.offsetTop) {
          box.style.left = pos.offsetLeft + 'px'
          box.style.top = pos.offsetTop + 'px'
        }
      },
      init() {
        this.loading = true
        let _this = this
        const pdfjsLib = window.pdfjsLib
        // const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js')
        const pdfPath = this.filePath || this.testFilePath
        // The workerSrc property shall be specified.
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdfjs/build/pdf.worker.js'
        // pdfjsLib.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.js')
        // Will be using promises to load document, pages and misc data instead of
        // callback.
        const loadingTask = pdfjsLib.getDocument({
          url: pdfPath,
          useWorkerFetch: false,
          cMapPacked: true,
          cMapUrl: '/pdfjs/web/cmaps/',
        })
        setTimeout(() => {
          _this.loading = false
        }, 5000)
        loadingTask.promise
          .then(function (doc) {
            const numPages = doc.numPages
            console.log('# Document Loaded')
            console.log('Number of Pages: ' + numPages)
            _this.doc = doc
            _this.docPages = numPages
            // 第一次加载文件时 小于一页的时候 采用1*2布局
            if (_this.isLayoutUserSet === false) {
              if (numPages < _this.pageSize) {
                _this.layout = 1
              } else {
                _this.layout = 0
              }
            }
            // 布局结构确认后, 根据结构渲染内容
            _this.$nextTick(() => {
              _this.initFileBox()
              _this.goNext()
            })
          })
          .catch((e) => {
            _this.loading = false
            if (e.name == 'MissingPDFException') {
              this.isFileError = true
              this.$Message.error({
                content: '文件不存在, 即将返回上一页面',
                duration: 2,
                onClose: () => {
                  this.$router.go(-1)
                },
              })
            }
          })
      },
      initFileBox() {
        var fileItemList = this.$refs.fileItem
        var pagebox = fileItemList[0]
        var pageHeight = pagebox.offsetHeight
        var pageWidth = pagebox.offsetWidth
        this.fileViewSize = {
          pageHeight,
          pageWidth,
        }
        this.fileItemList = fileItemList
      },
      showDoc(pagenum, event) {
        if (event && event.target.nodeName.toLowerCase() != 'canvas') return
        if (this.layout == 2) return
        // 根据页面文件的位置得到真实的页码 当前文件的容器是提前布置的
        if (event && this.currPageNum.length > 0)
          pagenum = this.currPageNum[pagenum]
        this.showFullfile = true
        this.fullPageNum = pagenum
        var page = this.pageList[pagenum]
        var clientHeight =
          document.body.clientHeight || document.documentElement.clientHeight
        var boxheight = Math.floor(clientHeight * 0.8)
        var scale = this.fileFullScale || 1
        var viewport = page.getViewport({ scale: scale })
        // console.log('showDoc', page, pagenum, this.$refs.fullfile)
        if (this.fileFullScale == null) {
          this.fileFullScale =
            Math.round((boxheight / viewport.height) * 1000) / 1000
          scale = this.fileFullScale
          viewport = page.getViewport({ scale: scale })
        }
        //
        // console.log(
        //   'Full boxheight 2',
        //   document.body.clientHeight || document.documentElement.clientHeight,
        //   boxheight,
        //   document.documentElement.clientWidth,
        //   viewport.height,
        //   viewport.width,
        //   scale
        // )
        // var outputScale = window.devicePixelRatio || 1
        var outputScale = 1
        var canvas = document.createElement('canvas')
        var context = canvas.getContext('2d')
        canvas.width = Math.floor(viewport.width * outputScale)
        canvas.height = Math.floor(viewport.height * outputScale)
        var renderContext = {
          canvasContext: context,
          viewport: viewport,
        }
        page.render(renderContext)
        var box = this.$refs.fullfile
        box.innerHTML = ''
        box.className = 'fullfile-wrap'
        setTimeout(() => {
          box.className = 'fullfile-wrap animate__animated animate__backInRight'
          box.appendChild(canvas)
        }, 50)
      },
      append(page, box) {
        var scale = this.fileScale || 1
        var viewport = page.getViewport({ scale: scale })
        if (this.fileScale == null) {
          console.log(
            'pageHeight docHeight1',
            this.fileViewSize.pageHeight,
            this.fileViewSize.pageWidth,
            viewport.height,
            viewport.width
          )
          let hp = this.fileViewSize.pageHeight / viewport.height
          let wp = (this.fileViewSize.pageWidth * 0.95) / viewport.width
          let up = hp >= wp ? wp : hp
          // this.fileScale =
          //   Math.round((this.fileViewSize.pageHeight / viewport.height) * 1000) /
          //   1000
          this.fileScale = Math.round(up * 1000) / 1000
          scale = this.fileScale
          viewport = page.getViewport({ scale: scale })
          // console.log(
          //   'pageHeight docHeight Use',
          //   this.fileViewSize.pageWidth,
          //   this.fileViewSize.pageHeight,
          //   viewport.width,
          //   viewport.height,
          //   'scale' + scale
          // )
        }

        // console.log('viewport', viewport, scale)
        // Support HiDPI-screens.
        // var outputScale = window.devicePixelRatio || 1
        var outputScale = 1
        var canvas = document.createElement('canvas')
        var context = canvas.getContext('2d')
        canvas.width = Math.floor(viewport.width * outputScale)
        canvas.height = Math.floor(viewport.height * outputScale)
        var renderContext = {
          canvasContext: context,
          viewport: viewport,
        }
        page.render(renderContext)
        box.className = 'file-item animate__animated animate__backInRight'
        box.appendChild(canvas)
      },
      goNext() {
        // console.log('goNext', this.currPageIndex)
        this.prevDisabled = false
        if (this.currPageIndex < this.docPages) {
          this.currPageIndex = this.currPageIndex + this.pageSize
          this.goShow()
        } else {
          this.$Message.info({
            content: '已经到最后一页了',
            duration: 2,
          })
          this.nextDisabled = true
        }
      },
      goPrev() {
        // console.log('goNext', this.currPageIndex)
        this.nextDisabled = false
        if (this.currPageIndex > this.pageSize) {
          this.currPageIndex -= this.pageSize
          this.goShow()
        } else {
          this.$Message.info({
            content: '已经是第一页了',
            duration: 2,
          })
          this.prevDisabled = true
        }
      },
      goShow() {
        var _this = this
        var doc = this.doc
        // var currPageIndex = this.currPageIndex
        // console.log('goShow', currPageIndex)

        var currPageNum = [0]
        for (let i = this.pageSize - 1; i >= 0; i--) {
          let pagenum = this.currPageIndex - i
          let pagebox = this.fileItemList[(pagenum - 1) % this.pageSize]
          currPageNum.push(pagenum)
          pagebox.innerHTML = ''
          pagebox.className = 'file-item'
          if (pagenum > 0 && pagenum <= this.docPages) {
            setTimeout(() => {
              doc.getPage(pagenum).then(function (page) {
                _this.append(page, pagebox)
                _this.pageList[pagenum] = page
                // console.log(
                //   'load time /' + pagenum,
                //   Math.round(new Date().getTime()) - time
                // )
              })
            }, ((pagenum - 1) % this.pageCol) * 50)
          }
        }
        this.currPageNum = currPageNum
      },
      showctlToggle() {
        if (this.isMoving === false) {
          this.showctl = !this.showctl
        }
      },
      goPrevSphere() {
        if (this.isShowCustom === false) {
          if (this.fileShowType == 'frame') {
            this.frameExec('prev')
          }
          return
        }
        if (this.showFullfile === false) {
          this.goPrev()
        } else {
          var pagenum = this.fullPageNum || 1
          if (pagenum > 1) {
            pagenum = pagenum - 1
            if (pagenum < this.currPageNum[1]) {
              this.goPrev()
            }
            this.showDoc(pagenum, null)
          } else {
            this.$Message.info({
              content: '已经是第一页了',
              duration: 2,
            })
          }
        }
      },
      goNextSphere() {
        if (this.isShowCustom === false) {
          if (this.fileShowType == 'frame') {
            this.frameExec('next')
          }
          return
        }

        if (this.showFullfile === false) {
          this.goNext()
        } else {
          var pagenum = this.fullPageNum || 1
          pagenum = pagenum + 1
          if (this.pageList.length - 1 < pagenum) {
            if (this.currPageIndex < this.docPages) {
              this.goNext()
              let timer = setInterval(() => {
                if (this.pageList[pagenum]) {
                  this.showDoc(pagenum, null)
                  clearInterval(timer)
                }
              }, 50)
            } else {
              this.$Message.info({
                content: '已经到最后一页了',
                duration: 2,
              })
            }
          } else {
            // 已经加载 需要翻页的时候
            if (pagenum > this.currPageNum[this.currPageNum.length - 1]) {
              this.goNext()
            }
            this.showDoc(pagenum, null)
          }
        }
      },
      moveInit() {
        document.addEventListener('mouseleave', () => {
          document.onmousemove = document.onmouseup = null
        })
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
      sphereMove(event) {
        console.log('sphereM', event)
      },
      sphereEnd(event) {
        console.log('sphereE', event)
        document.onmousemove = null
      },
      sphereStartTouch(event) {
        let box = document.getElementById('sphere')
        this.isMoving = false
        let touch = event.touches[0]
        let { pageX, pageY } = touch
        let disx = pageX - box.offsetLeft
        let disy = pageY - box.offsetTop
        this.touchData = { pageX, pageY, disx, disy }
      },
      sphereMoveTouch(event) {
        let _this = this
        let box = document.getElementById('sphere')
        let touch = event.touches[0]
        let { disx, disy } = this.touchData
        let { pageX, pageY } = touch
        let boxw = box.offsetWidth || 80
        let boxh = box.offsetHeight || 80
        if (_this.isMoving === false) {
          _this.isMoving = true
        }
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
        // this.$Message.info('sphereE')
      },
      changeLayoutSphere() {
        if (this.layout == 1) {
          this.layout = 0
        } else {
          this.layout = 1
        }
        // 定义用户手动设置 下次渲染不会自动布局
        this.isLayoutUserSet = true
        this.reRender()
      },
      changeModeSphere() {
        if (this.isShowCustom === false) {
          if (this.currPageIndex === 0) this.init()
          this.isShowCustom = true
        } else {
          this.isShowCustom = false
        }
      },
      reRender() {
        if (
          this.isFileError === true ||
          this.reRenderTimer !== null ||
          this.isShowCustom === false
        )
          return
        this.currPageIndex = 0
        this.fileViewSize = {}
        this.fileScale = null
        this.showFullfile = false
        this.fileItemList.forEach((elem) => {
          elem.innerHTML = ''
          elem.className = 'file-item'
        })
        this.$Message.info({
          content: '文件正在重新布局',
          duration: 2,
        })
        this.reRenderTimer = setTimeout(() => {
          this.init()
          this.reRenderTimer = null
        }, 500)
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
