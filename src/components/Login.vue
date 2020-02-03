<template>
  <div class="login-form">
    <input type="email" name="email" v-model="email" label="Your email" placeholder="YOUR EMAIL">
    <input type="password" name="password" label="Your password" placeholder="YOUR PASSWORD" v-model="password">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { Action } from '@/store/user/types'
export default {
//  name: 'LoginForm',
 data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch(`user/${Action.LOGIN}`, { email: this.email, password: this.password })
    },
    doCommand(e) {
      if ((this.email.length > 0 && this.password.length > 0) && e.keyCode === 13) {
        this.login()
      }
    }
  },
  created() {
    window.addEventListener('keypress', this.doCommand)
  },
  destroyed() {
    window.removeEventListener('keypress', this.doCommand)
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  background: #eee;
  padding: 20px;
}

</style>