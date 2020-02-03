<template>
  <div class="main-container">
    <header>
      <h1>juan<span>on</span>one</h1>
      <p>List of resources to accompany the Intro to Web course at <a href="https://austincodingacademy.com/" target="_blank">Austin Coding Academy</a></p>
    </header>
    <main>
      <resource-list />
    </main>
    <footer>
      <p><a href="https://www.linkedin.com/in/juanrod1/" target="_blank">Juan Rodriguez</a> is a software developer at L7 Informatics and instructor at Austin Coding Academy.</p>
      <p>2020</p>
    </footer>
  </div>
</template>

<script>
import ResourceList from '@/components/ResourceList'
import { Action } from '@/store/resource/types'
export default {
  name: 'HomeBody',
  beforeCreate () {
    this.$store.dispatch(`resource/${Action.GET_RESOURCES}`)
  },
  components: { ResourceList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
