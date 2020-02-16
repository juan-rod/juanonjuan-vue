<template>
  <div class="admin-add">
    <!-- <div class="admin-bg"> -->
      <div class="admin-add--form">
        <div class="form-group">
          <label for="">title</label>
          <input type="text" v-model="newResource.title" placeholder="resource title">
        </div>
        <div class="form-group">
          <label for="link">link</label>
          <input type="text" v-model="newResource.link" placeholder="link">
        </div>
        <div class="form-group">
          <label for="tag">tag</label>
          <input type="text" placeholder="tag" :value="newResource.tags" @click="selectTag">
        </div>
        <tags-component class="form-group" :admin="admin" @selectedTag="selectedTag" v-if="showTags"/>
        <div class="form-group button-group">
          <label></label>
          <button class="addResource" @click="addResource">
            <h1>Add Resource</h1>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import { Action } from '@/store/resource/types'
import TagsComponent from '@/components/filter/TagsComponent'
export default {
  name: 'admin-add',
  components: {
    TagsComponent
  },
  data () {
    return {
      showTags: false,
      admin: true,
      newResource: {
        tags: [],
        title: '',
        link: ''
      },
      tags: ''
    }
  },
  methods: {
    selectTag () {
      console.log('selectTag')
      if (this.showTags) return
      this.showTags = !this.showTags
    },
    tagsSelected() {
      console.log('tagsSelected',)
      console.log('this.selected', this.selected)
      return this.selected
    },
    selectedTag ({tag, index}) {
      console.log('selectedTag tag', tag)
      console.log('selectedTag index', index)
      this.newResource['tags'].push(tag)
    },
    addResource () {
      this.$store.dispatch(`resource/${Action.CREATE_NEW_RESOURCE}`, {...this.newResource})
      this.clearForm()
    },
    clearForm () {
      Object.keys(this.newResource).forEach(item => {
        if (item === 'tags') { this.newResource[item] = [] }
        this.newResource[item] = ''
      })
    }
  }
}
</script>

<style>

</style>