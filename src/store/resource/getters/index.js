export default {
  resources: state => state.resources,
  resourcesBy: state => state.resourcesBy,
  resourceTags: state => state.resourceTags.flat()
}