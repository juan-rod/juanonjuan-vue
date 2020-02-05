<template>
  <nav id="nav">
    <header-component />
    <div class="nav-links">
      <router-link to="/terminal-tips">
        <p>Terminal Tips</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
import HeaderComponent from '@/components/home/HeaderComponent'
export default {
  name: 'nav-bar',
  components: { HeaderComponent }
}
</script>

<style>

</style>