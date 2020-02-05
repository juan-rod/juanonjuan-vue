import { ResourcesCollection } from '@/firebase/db'
import { Auth } from '@/firebase/auth'
import { Action, Mutation } from '../types'
import * as Filters from '@/utils/Filters'

function setResourceTags (commit, doc) {
  commit(`${[Mutation.SET_RESOURCE_TAGS]}`, doc.tags)
}

export default {
  async [Action.CREATE_NEW_RESOURCE] ({commit, dispatch}, resourceItem) {
    const currentUser = Auth.currentUser.uid
    let resource = await ResourcesCollection.add({
      ...resourceItem,
      createdOn: new Date(),
      createdBy: currentUser
    })
    commit(`${[Mutation.SET_NEW_RESOURCE]}`, resource)
    dispatch(`${Action.GET_RESOURCES}`)
  },
  async [Action.GET_RESOURCES] ({state, commit}) {
    ResourcesCollection
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commit(`${[Mutation.SET_NEW_RESOURCE]}`, doc.data())
          setResourceTags(commit, doc.data())
        })
      })
      .then(() => {
        const resources = [...state.resources]
        console.log('*****state.resources', state.resources)
        commit(`${[Mutation.SET_FILTERED_RESOURCES]}`, resources)
      })
  },
  async [Action.GET_FILTERED_RESOURCES] ({state, commit}) {
    const resources = [...state.resources]
    console.log('[Action.GET_FILTERED_RESOURCES] resources', resources)
    const tags = [...state.filterResourcesBy.tags]
    console.log('[Action.GET_FILTERED_RESOURCES] tags', tags)
    let filteredResources = await Filters.filterResources(tags, resources)
    console.log('filteredResources', filteredResources)
    commit(`${[Mutation.SET_FILTERED_RESOURCES]}`, filteredResources)
  },
  async [Action.FILTER_RESOURCES_BY_TAGS] ({commit}, payload) {
    commit(`${[Mutation.SET_FILTER_BY_TAG]}`, payload)
  },
  async [Action.FILTER_RESOURCES_BY_SEARCH] ({commit}, payload) {
    commit(`${[Mutation.SET_FILTER_BY_SEARCH]}`, payload)
  },
}