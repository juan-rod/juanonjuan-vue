<template>
  <div class="admin-page">
    <div class="admin-page--form">
      <div class="form-group">
        <label for="">title</label>
        <input type="text" placeholder="title">
      </div>
      <div class="form-group">
        <label for="link">link</label>
        <input type="text" placeholder="link">
      </div>
      <div class="form-group">
        <label for="tag">tag</label>
        <input type="text" placeholder="tag">
      </div>
      <button class="createResource" @click="createResource">
        <h1>Create Resource</h1>
      </button>
    </div>
  </div>
</template>

<script>
// import { Action } from '@/store/resource/types'
export default {
  name: 'admin-page',
  data () {
    return {
      newResource: null
    }
  },
  methods: {
    async createResource () {
        // this.$store.dispatch(`resource/${Action.CREATE_NEW_RESOURCE}`, this.newResource)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>