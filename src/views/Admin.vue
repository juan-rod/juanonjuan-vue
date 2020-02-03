<template>
  <div class="admin">
    <admin-page />
  </div>
</template>

<script>
import AdminPage from '@/components/AdminPage'
import { mapState } from 'vuex'
export default {
  components: { AdminPage },
  data () {
    return {
      loggedIn: false
    }
  },
  computed : {
    ...mapState('user',{
      error: state => state.error
    })
  },
  methods: {
    userLoggedIn () {

    }
  }
}
</script>

<style>

</style>