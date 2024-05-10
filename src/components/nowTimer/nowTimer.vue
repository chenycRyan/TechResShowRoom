<template>
  <div class="showTime">
    <span class="time">{{ nowTime }}</span>
    <span class="date">
      <span>{{ week }}</span>
      <span>{{ date }}</span>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'NowTimer',

    data() {
      return {
        nowTime: '',
        week: '',
        date: '',
        timer: null,
        imgSrc: '',
        weatcherData: {},
        startVal: 0,
      }
    },

    mounted() {
      this.nowTimes()
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },

    methods: {
      timeFormate(timeStamp) {
        //显示当前时间
        let newDate = new Date(timeStamp)
        let year = newDate.getFullYear()
        let month =
          newDate.getMonth() + 1 < 10
            ? '0' + (newDate.getMonth() + 1)
            : newDate.getMonth() + 1
        let date =
          newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()
        let hh =
          newDate.getHours() < 10
            ? '0' + newDate.getHours()
            : newDate.getHours()
        let mm =
          newDate.getMinutes() < 10
            ? '0' + newDate.getMinutes()
            : newDate.getMinutes()
        let ss =
          newDate.getSeconds() < 10
            ? '0' + newDate.getSeconds()
            : newDate.getSeconds()
        let week = newDate.getDay()
        let weeks = ['日', '一', '二', '三', '四', '五', '六']
        let getWeek = '星期' + weeks[week]
        this.week = getWeek
        this.date = year + '.' + month + '.' + date
        this.nowTime = hh + ':' + mm + ':' + ss
      },
      nowTimes() {
        this.timeFormate(new Date())
        setInterval(this.nowTimes, 1000)
        clearInterval(this.nowTimes)
        this.nowTimes = null
      },
    },
  }
</script>
<style lang="scss" scoped>
  .showTime {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    color: rgba(126, 240, 255, 0.7);
    display: flex;
    .time {
      font-size: 0.4rem;
      margin-right: 0.18rem;
    }
    .date {
      span {
        display: block;
        &:nth-child(1) {
          font-size: 0.2rem;
        }
        &:nth-child(2) {
          font-size: 0.18rem;
        }
      }
    }
  }
</style>
