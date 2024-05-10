<template>
  <div class="page-view">
    <Top-Header />
    <div class="main-view">
      <!-- 配置信息栏 -->
      <div class="ranking-board" id="page-card">
        <div v-show="showSetting">
          <div class="ranking-board-title">
            <svg-icon icon-class="monitor" style="font-size: 24px"></svg-icon>
            <span>监控设置</span>
          </div>
          <!-- <div style="display:flex;flex-wrap:wrap">
            <el-button type="primary" size="mini" @click="windowType = 1"> 单屏</el-button>
            <el-button type="primary" size="mini" @click="windowType = 2">双屏</el-button>
            <el-button type="primary" size="mini" @click="windowType = 4">四屏</el-button>
            <el-button type="primary" size="mini" @click="windowType = 9">九屏</el-button>
          </div> -->
          <el-select
            v-model="windowType"
            placeholder="请选择"
            style="margin: 10px 0"
            @change="changeType"
          >
            <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <div class="ranking-board-title mt-10">
            <svg-icon icon-class="device" style="font-size: 24px"></svg-icon>
            <span>设备选择</span>
          </div>
          <el-select
            v-model="queryForm.trainingBaseId"
            placeholder="请选择实训基地"
            @change="changeBaseSelect"
          >
            <el-option
              v-for="item in baseList"
              :key="item.id"
              :label="item.baseName"
              :value="item.id"
            ></el-option>
          </el-select>

          <el-select
            v-model="queryForm.trainingRoomId"
            placeholder="请选择实训教室"
            @change="pageInit"
            style="margin: 10px 0"
          >
            <el-option
              v-for="item in roomList"
              :key="item.id"
              :label="item.roomName"
              :value="item.id"
            ></el-option>
          </el-select>

          <el-tree
            :data="deviceDetail"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            @check="handleCheckChange"
            class="mt-10"
            ref="tree"
            style="margin-left: -10px"
          >
            <template v-slot="{ node }">
              <svg-icon icon-class="device" style="font-size: 24px"></svg-icon>
              <span style="margin-left: 10px">{{ node.label }}</span>
            </template>
          </el-tree>
          <el-pagination
            class="mt-10"
            v-if="total > 10"
            style="width: 100%; text-align: left"
            background
            @current-change="getDeviceByPage"
            v-model:current-page="page"
            layout="total, prev, pager, next"
            :page-size="size"
            :total="total"
          ></el-pagination>
        </div>
      </div>

      <el-row class="page-camera">
        <el-col
          :span="windowStyle[windowType].span"
          class="col"
          :style="{
            height: windowStyle[windowType].height,
            border: activeindex === index ? '1px solid #f05b72' : '',
            padding: activeindex === index ? '9px' : '10px',
          }"
          v-for="(item, index) in windowType"
          :key="index"
          @click="setActive(index)"
        >
          <div class="header" v-if="deviceList[index].deviceCode">
            <div class="hleft">
              <span>设备编号: {{ deviceList[index].deviceCode }}</span>
              <span>设备名称: {{ deviceList[index].deviceName }}</span>
              <span>设备类型: {{ deviceList[index].deviceType }}</span>
            </div>
          </div>
          <div class="content" :id="'cId' + index">
            <webrtc-player
              :ref="'player' + index"
              :videoId="'vid' + index"
            ></webrtc-player>
          </div>
        </el-col>
      </el-row>
      <div class="page-setting">
        <div class="setting-item" @click="switchSetting">
          <svg-icon icon-class="setting" style="font-size: 24px"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import webrtcPlayer from '@/components/visual/webrtcPlayer'
import TopHeader from './components/topHeader'

export default {
  components: {
    TopHeader,
    webrtcPlayer,
  },
  filters: {},
  data() {
    return {
      queryForm: {
        trainingBaseId: '',
        trainingRoomId: '',
      },
      baseList: [],
      roomList: [],
      selectOptions: [
        {
          value: 1,
          label: '单屏',
        },
        {
          value: 2,
          label: '双屏',
        },
        {
          value: 4,
          label: '四屏',
        },
        {
          value: 9,
          label: '九屏',
        },
      ],
      // 分页总数据条数
      total: 0,
      // 当前页
      page: 1,
      // 一页显示多少条数据
      size: 10,
      windowType: 4, //分屏
      windowStyle: {
        1: { height: '100%', span: 24 },
        2: { height: '100%', span: 12 },
        4: { height: '50%', span: 12 },
        9: { height: '33.3%', span: 8 },
      },
      activeindex: 0,

      /*-----------*/
      showSetting: true, //显示相机管理
      deviceDetail: [], //设备列表
      deviceList: [{}, {}, {}, {}, {}, {}, {}, {}, {}], //选中设备
      //设备树结构
      defaultProps: {
        label: 'deviceName',
      },
    }
  },
  mounted() {
    this.pageInit()
    this.getBase()
  },
  watch: {
    //切换重置
    windowType(newVal) {
      this.activeindex = 0
      if (newVal == 9) {
        document.getElementById('ptzImg').style.display = 'none'
      }
    },
  },
  methods: {
    closeLoding() {
      for (let index = 0; index <= this.loadingIndex; index++) {
        this.loading[index] = false
      }
    },
    setActive(i) {
      this.activeindex = i
    },
    //初始化加载设备列表
    pageInit() {},
    //获取实训基地数据
    getBase() {
      this.baseList = []
    },
    //切换实训基地加载实训室
    changeBaseSelect(val) {
      this.showSelect = false
      this.$nextTick(() => {
        this.showSelect = true
      })
      this.queryForm.trainingRoomId = ''
      this.roomList = []
    },
    //  this.$refs.player.close()
    //选中设备播放
    handleCheckChange(node, item) {
      console.log(node)
      console.log(item)

      //判断是否选中
      let boolCheck = item.checkedNodes.find((i) => i.id === node.id)
      if (boolCheck) {
        document.getElementById('cId' + this.activeindex).style.height =
          'calc( 100% - 50px)'
        //开启视频
        this.deviceList[this.activeindex] = node
        this.deviceItem = node
        this.$refs['player' + this.activeindex].play(node.cameraInfo)
      } else {
        //关闭视频
        let index = this.deviceList.findIndex((item) => item.id === node.id)
        this.$refs['player' + index].close()
        document.getElementById('cId' + index).style.height = '100%'
        this.deviceList[index] = {}
      }
      let arr = []
      this.deviceList.forEach((item) => {
        if (item.id) arr.push(item.id)
      })

      console.log(arr)
      this.$refs['tree'].setCheckedKeys(arr)
    },
    changeType(val) {
      //关闭视频
      this.deviceList.forEach((item, index) => {
        if (item.id) this.$refs['player' + index].close()
        document.getElementById('cId' + index).style.height = '100%'
      })
      //清除视频
      this.deviceList = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
      //清除树选中
      this.$refs['tree'].setCheckedKeys([])
      this.windowType = val
    },
    //展开关闭配置
    switchSetting() {
      this.showSetting = !this.showSetting
      if (this.showSetting) {
        document.querySelector('#page-card').className =
          'ranking-board left-fade-in'
      } else {
        document.querySelector('#page-card').className = 'left-fade-out'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
:deep(.el-input) {
  --el-input-background-color: #e0e0e0 !important;
  --el-input-placeholder-color: #7f838b;
}
:deep(.el-pagination__total) {
  color: #fff;
}
:deep(.el-pagination.is-background .el-pager li:not(.disabled).active) {
  background: #11264f;
}
/*--------------------*/
:deep(.el-button--primary) {
  background: #11264f;
  border-color: #11264f;
  padding: 10px !important;
  margin: 5px;
  width: 50px;
}

:deep(.el-tree) {
  background: #03060f !important;
  color: #dbd9d9 !important;
  --el-tree-node-hover-background-color: #1b315e !important;
  .el-tree-node__content {
    margin: 20px 0;
  }
}

.m-10 {
  margin: 10px;
}
.left-fade-in {
  width: 20%;
  margin-right: 10px;
  /* 定义动画 */
  transition: width 0.2s linear;
}
.left-fade-out {
  width: 0;
  margin-right: 10px;
}

$vs-color-bg: #02030b;
$vs-color-border: #3065a0;
$vs-color-corner: #80e5fb;
$vs-text-white: #f0f0f0;
$vs-test-value: #07e7ff;
// 1920  16px
@media (min-width: 1201px) and (max-width: 1400px) {
  .header-view,
  .card-item,
  .el-button {
    font-size: 12px !important;
  }
}
@media (min-width: 1401px) and (max-width: 1600px) {
  .header-view,
  .card-item,
  .el-button {
    font-size: 13px !important;
  }
}
@media (min-width: 1601px) and (max-width: 1800px) {
  .header-view,
  .card-item,
  .el-button {
    font-size: 15px !important;
  }
}
@media (min-width: 1801px) and (max-width: 2000px) {
  .header-view,
  .card-item,
  .el-button {
    font-size: 16px !important;
  }
}
$defaultSize: 16px !default;
@function rem($px) {
  @return $px / $defaultSize * 1rem;
}
.page-view {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0px;
  background-color: #eee;
  padding: 0vh 10px 1vh 10px;
  box-sizing: border-box;
  z-index: 200;
  margin: 0px;
  color: #fff;
  background-color: $vs-color-bg;
  background-image: url('../../assets/imgs/bg/home_bg.jpg');
  .header-view {
    width: 100%;
    height: 5vh;
    background-image: url('../../assets/imgs/head_bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
    margin-bottom: 1vh;
    .title {
      width: 40%;
      line-height: 5vh;
      text-align: center;
      font-size: 1.2em;
      margin: 0 30%;
      color: #c3ffff;
      .logoimg {
        width: 2em;
        height: 1.3em;
        vertical-align: middle;
      }
    }
    .time {
      position: absolute;
      right: 5%;
      bottom: 1px;
      color: #fff;
      font-size: 1em;
      font-weight: bold;
      font-style: italic;
    }
  }
  .main-view {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    position: relative;
  }
}
.page-camera {
  height: inherit;
  width: 100%;
  height: 86vh;
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-image: linear-gradient(to right, #424242, #bdbdbd);
    padding: 0px 30px;
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    .hleft {
      font-size: 0.8rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .hright {
      width: 40%;
      text-align: left;
      .remaintime {
        margin-right: 50px;
        .tcircle {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #3ed07a;
          border-radius: 5px;
          margin-right: 5px;
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    // height: calc(100% - 10px);
    box-shadow: 0 0 3px #2a5caa;
    background-repeat: no-repeat;
    background-size: cover;
    // background-image: url(../../assets/visual/board_bg.png);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .col {
    padding: 10px;
    // border: 1px solid #545454;
    overflow: hidden;
    // border: 0 !important;
  }
}

.page-setting {
  position: absolute;
  top: -32px;
  left: 30px;
  height: 32px;
  width: 50px;
  z-index: 2000;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  background: #eeeeee;
  border: 1px solid #dcdfe6;
  border-top-left-radius: 5.5px;
  border-top-right-radius: 5.5px;
  box-shadow: 0 0 50px 0 rgba(82, 63, 105, 0.15);

  .setting-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 44px;
    height: 26px;
    color: #3698fd;
    background: #ebf5ff;
    text-align: center;
    border-radius: 5.5px;
    font-size: 12px;
    &:hover {
      color: #fff;
      background: #3698fd;
    }
  }
}
.ranking-board {
  width: 20%;
  margin: 20px 0;
  margin: 0 30px;
  height: calc(86vh - 10px);
  box-shadow: 0 0 3px #2a5caa;
  display: flex;
  flex-direction: column;
  // background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 1rem;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
