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
// import resourceData from '@/store/data/resources.json'
import { Action } from '@/store/resource/types'
export default {
  name: 'admin-page',
  data () {
    return {
      newResource: null
    }
  },
  methods: {
    async createResource () {
      // console.log('resourceData[resources]', resourceData['resources'][0])
      // resourceData['resources'].forEach(item => {
        this.$store.dispatch(`resource/${Action.CREATE_NEW_RESOURCE}`, this.newResource)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-page {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    border: 2px solid pink;
  }
}
</style>