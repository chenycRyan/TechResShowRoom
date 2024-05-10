<template>
  <div class="login">
    <div class="logo"></div>
    <div class="sysName"><img src="../../assets/imgs/title.png"></div>
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
        </div>
      </Card>
    </div>
    <div class="comss">江苏汇博机器人技术股份有限公司</div>
  </div>
</template>

<script>
  import LoginForm from './login-form'
  import { mapActions } from 'vuex'
  export default {
    components: {
      LoginForm,
    },
    methods: {
      ...mapActions(['handleLogin', 'getUserInfo']),
      handleSubmit({ userName, password }) {
        this.handleLogin({ userName, password }).then((res) => {
          if (res) {
            localStorage.setItem(
              'TOKEN',
              window.btoa(new Date().getTime() + 180 * 24 * 60 * 60 * 1000)
            )
            if (this.$route.query.redirect) {
              this.$router.replace(this.$route.query.redirect)
            } else {
              this.$router.replace('/')
            }
          } else this.$Message.error('账号或密码错误')
        })
      },
    },
  }
</script>

<style lang="scss">
  @import './login.scss';
</style>
<style>
  .ivu-form-item {
    margin-bottom: 32px !important;
  }
</style>
