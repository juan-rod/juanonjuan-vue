import { Mutation } from "../types";
import * as Filters from '@/utils/Filters'

export default {
  [Mutation.SET_NEW_RESOURCE](state, payload) {
    state.resources.push(payload)
  },
  [Mutation.SET_RESOURCE_TAGS](state, payload) {
    // console.log('SET_RESOURCE_TAGS payload', state.resourceTags, payload)
    state.resourceTags.push(payload)
  },
  [Mutation.SET_FILTERED_RESOURCES](state) {
    const resources = [...state.resources]
    console.log('[Mutation.SET_FILTERED_RESOURCES]: resources', resources)
    state.filteredResources = resources
  },
  [Mutation.SET_FILTER_BY_TAG](state, tag) {
    console.log('[Mutation.SET_FILTER_BY_TAG]', tag)
    state.filterResourcesBy.tags.push(tag)
  },
  [Mutation.SET_FILTER_BY_SEARCH](state, searchQuery) {
    console.log('[Mutation.SET_FILTER_BY_SEARCH]', searchQuery)
    state.filterResourcesBy.search = searchQuery
  },
  [Mutation.FILTERED_RESOURCES](state) {
    const resources = [...state.resources]
    console.log('[Mutation.FILTERED_RESOURCES]: resources', resources)
    console.log('[Mutation.FILTERED_RESOURCES]: state.filteredResources', state.filteredResources)
    state.filteredResources = resources
    let testFilters = Filters.filterResources(state.filterResourcesBy, resources)
    console.log('testFilters', testFilters)
    state.filteredResources = testFilters
  },
  [Mutation.SET_ERROR](state, payload) {
    state.error = payload
  },
  [Mutation.CLEAR_ERROR](state) {
    state.error = ''
  }
}