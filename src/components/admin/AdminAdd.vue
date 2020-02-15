<template>
  <div class="admin-add">
    <!-- <div class="admin-bg"> -->
      <div class="admin-add--form">
        <div class="form-group">
          <label for="">title</label>
          <input type="text" placeholder="resource title">
        </div>
        <div class="form-group">
          <label for="link">link</label>
          <input type="text" placeholder="link">
        </div>
        <div class="form-group">
          <label for="tag">tag</label>
          <input type="text" placeholder="tag" @click="selectTag">
        </div>
        <tags-component class="form-group" v-if="showTags"/>
        <button class="addResource" @click="addResource">
          <h1>Create Resource</h1>
        </button>
      </div>
    </div>
</template>

<script>
import TagsComponent from '@/components/filter/TagsComponent'
export default {
  name: 'admin-add',
  components: {
    TagsComponent
  },
  data () {
    return {
      showTags: false
    }
  },
  methods: {
    selectTag () {
      console.log('selectTag')
      if (this.showTags) return
      this.showTags = !this.showTags
    },
    addResource () {
      console.log('addResource')
    }
  }
}
</script>

<style>

</style>