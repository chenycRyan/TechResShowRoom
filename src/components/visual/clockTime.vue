<template>
  <div class="timebox">
    <div class="time">
      {{ timestr }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClockTime',
  data() {
    return {
      timestr: '',
      timer: null
    }
  },
  created() {
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
      this.timer = window.setInterval(this.runtime, 1000)
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
      var timestr = year + '-' + this.strPadding(month) + '-' + this.strPadding(day) + ' ' + this.strPadding(hour) +
          ':' + this.strPadding(minutes) + ':' + this.strPadding(second)
      // 将系统时间设置到div元素中
      this.timestr = timestr
    },
    strPadding(val) {
      if (val < 10) {
        return ('0' + val)
      } else {
        return (val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .timebox {
    color: #98CDD9;
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
  }
</style>
