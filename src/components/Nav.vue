<template>
  <nav id="nav">
    <!-- <transition name="v--fade-in-left" appear> -->
    <transition name="v--fade-opacity" appear>
      <header-component />
    </transition>
    <!-- <transition name="v--fade-in-right" appear> -->
    <transition name="v--fade-opacity" appear>
      <div class="nav-links">
        <router-link to="/terminal-tips">
          <p>Terminal Tips</p>
        </router-link>
      </div>
    </transition>
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