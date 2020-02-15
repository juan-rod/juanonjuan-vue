<template>
  <div class="card">
    <div class="card-container">
      <div class="card-header">
        <slot class="card-header-title" name="headerTitle" />
      </div>
      <div class="card-body">
        <slot class="card-header-title" name="headerBody" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-component'
}
</script>

<style>

</style>