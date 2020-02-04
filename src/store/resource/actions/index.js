import { ResourcesCollection } from '@/firebase/db'
import { Auth } from '@/firebase/auth'
import { Action, Mutation } from '../types'

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
  async [Action.GET_RESOURCES] ({commit}) {
    ResourcesCollection
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commit(`${[Mutation.SET_NEW_RESOURCE]}`, doc.data())
          setResourceTags(commit, doc.data())
        })
      })
      .then(() => {
        commit(`${[Mutation.SET_FILTERED_RESOURCES]}`)
      })
  },
  async [Action.FILTER_RESOURCES_BY_TAGS] ({commit}, payload) {
    commit(`${[Mutation.SET_FILTER_BY_TAG]}`, payload)
  },
  async [Action.FILTER_RESOURCES_BY_SEARCH] ({commit}, payload) {
    commit(`${[Mutation.SET_FILTER_BY_SEARCH]}`, payload)
  },
}