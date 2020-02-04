import { Mutation } from "../types";

export default {
  [Mutation.SET_NEW_RESOURCE](state, payload) {
    state.resources.push(payload)
  },
  [Mutation.SET_RESOURCE_TAGS](state, payload) {
    state.resourceTags.push(payload)
  },
  [Mutation.SET_ERROR](state, payload) {
    state.error = payload
  },
  [Mutation.CLEAR_ERROR](state) {
    state.error = ''
  }
}