<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/terminal-tips">Terminal Tips</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
#app {
  height: 100%;
}
</style>
