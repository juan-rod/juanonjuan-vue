export default {
  resources: state => state.resources,
  filterResourcesBy: state => state.filterResourcesBy,
  resourceTags: state => state.resourceTags.flat()
}