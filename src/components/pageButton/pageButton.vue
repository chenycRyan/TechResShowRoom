<template>
  <div class="page-button-wrap" :style="customStyle">
    <div class="roll_btn" :class="disabled === true ? 'btnDisabled' : ''">
      <div class="btn-con">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageButton',
  props: {
    title: {
      type: String,
      default: '',
    },
    customStyle: {
      type: Object,
      default: function () {
        return {}
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/styles/animation.scss';
.page-button-wrap {
  display: inline-block;
  font-family: 'Reggae One', cursive;
}
.roll_btn {
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border: 2px solid #5e65eb;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
  width: auto;
  margin: 0;
  height: 0.6rem;
  line-height: 0.6rem;
  // background-color: #0028d8;
  background-color: #219dfd;
  background-image: linear-gradient(19deg, #219dfd 0%, #5221ff 100%);
  padding: 0 0.5rem;
  box-sizing: border-box;

  &::after,
  &::before {
    content: '';
    border: 2px solid #5e65eb;
  }
  .btn-con {
    font-size: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: calc(0.6rem - 4px);
  }
  &.btnDisabled {
    background-color: #8b92b3;
    border: 2px solid #cacad7;
    background-image: linear-gradient(19deg, #91a0ab 0%, #7666b1 100%);
    &::after,
    &::before {
      content: '';
      border: 2px solid #cacad7;
    }
  }
}
</style>