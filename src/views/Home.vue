<template>
  <div>
    <HomeBody msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBody from '@/components/HomeBody.vue'

export default {
  name: 'home',
  components: {
    HomeBody
  }
}
</script>
