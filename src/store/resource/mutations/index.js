import { Mutation } from "../types";
// import * as Filters from '@/utils/Filters'

export default {
  [Mutation.SET_NEW_RESOURCE](state, payload) {
    state.resources.push(payload)
  },
  [Mutation.SET_RESOURCE_TAGS](state, payload) {
    state.resourceTags.push(payload)
  },
  [Mutation.SET_FILTER_BY_TAG](state, tag) {
    state.filterResourcesBy.tag = tag
  },
  [Mutation.SET_FILTER_BY_SEARCH](state, searchQuery) {
    console.log('[Mutation.SET_FILTER_BY_SEARCH]', searchQuery)
    state.filterResourcesBy.search = searchQuery
  },
  [Mutation.SET_ERROR](state, payload) {
    state.error = payload
  },
  [Mutation.CLEAR_ERROR](state) {
    state.error = ''
  }
}