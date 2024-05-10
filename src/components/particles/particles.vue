<template>
  <vue-particles
    class="particles-bg"
    color="#39AFFD"
    :particleOpacity="0.7"
    :particlesNumber="40"
    shapeType="circle"
    :particleSize="4"
    linesColor="#8DD1FE"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
    v-if="showParticles"
  />
</template>
<script>
  export default {
    name: 'Particles',
    data() {
      return {
        showParticles: false,
      }
    },
    mounted() {
      this.showParticle()
    },
    methods: {
      showParticle() {
        setTimeout(() => {
          this.showParticles = true
        }, 1000)
      },
    },
  }
</script>
<style lang="scss" scoped>
  // 全屏展示粒子特效
  .particles-bg {
    width: 100%;
    height: 100%;
    background: transparent;
    position: absolute;
  }
</style>
