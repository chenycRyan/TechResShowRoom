<template>
  <div class="page-box" :style="customStyle">
    <!-- <span>{{ currPage }}</span> -->
    <div class="numbox" :style="pageStyle">
      <span v-for="i in 99" :key="i">{{ i }}</span>
    </div>
    <span class="total">{{ totalPages }}</span>
  </div>
</template>

<script>
export default {
  name: 'PageShow',
  props: {
    currPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    customStyle: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  computed: {
    pageStyle() {
      let pageOffset = this.currPage - 1
      if (pageOffset < 0) pageOffset = 0
      let y = pageOffset == 0 ? '0px' : '-' + pageOffset * 0.5 + 'rem'
      return {
        transform: 'translateY(' + y + ')',
      }
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.page-box {
  position: absolute;
  top: 0.125rem;
  right: 0.5rem;
  color: #fff;
  background-image: url('~@/assets/imgs/pagebg.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 1.06rem;
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  flex-direction: row;
  font-size: 0.3rem;
  overflow: hidden;
  .numbox {
    width: 50%;
    transition: all linear 0.3s;
    span {
      display: inline-block;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
  .total {
    color: #47abc6;
    display: inline-block;
    width: 50%;
    text-align: center;
  }
}
</style>