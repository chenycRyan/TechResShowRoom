<template>
  <div class="container">
    <header class="header">header</header>
    <section class="section">
      <div class="left">
        <div class="panel">1</div>
        <div class="panel">1</div>
        <div class="panel">1</div>
      </div>
      <div class="center">
        <!-- <img src="./trade/device.png" alt="" /> -->
        <div class="btn-group">
          <div class="btn">报警复位</div>
          <div class="btn">回原点</div>
          <div class="btn">暂停</div>
          <div class="btn">急停</div>
        </div>
      </div>
      <div class="right"></div>
    </section>
    <footer class="foot">
      <div class="panel">1</div>
      <div class="panel">1</div>
      <div class="panel">1</div>
      <div class="panel">1</div>
    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: url(../../assets/imgs/trade/bg.jpg);
    background-size: 100% 100%;
    .header {
      height: 80px;
      background: url(./trade/top.jpg);
      background-size: 100% 100%;
    }
    .section {
      height: calc(100% - 80px - 300px);
      display: flex;
      padding: 10px;

      .left {
        flex: 3;
      }
      .center {
        flex: 5;
      }
      .right {
        flex: 3;
      }
      .panel {
        width: 400px;
        height: 200px;
        box-shadow: 0px 0px 20px #0a275c inset;
        border: 1px solid #1e3454;
        background: rgba(34, 83, 128, 0.2);
        margin-top: 10px;
      }
      .btn-group {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .btn {
          width: 20%;
          height: 80px;
          background: url(./trade/btn.png);
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #3ccefb;
          font-size: 32px;
        }
      }
    }
    .foot {
      height: 300px;
      display: flex;
      align-items: flex-end;
      padding-bottom: 10px;
      .panel {
        width: 400px;
        height: 200px;
        box-shadow: 0px 0px 20px #0a275c inset;
        border: 1px solid #1e3454;
        background: rgba(34, 83, 128, 0.2);
        margin-left: 10px;
      }
    }
  }
</style>
