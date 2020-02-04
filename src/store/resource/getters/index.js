export default {
  resources: state => state.resources,
  filteredResources: state => state.filteredResources,
  filterResourcesBy: state => state.filterResourcesBy,
  resourceTags: state => state.resourceTags.flat()
}