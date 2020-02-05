
export const filterResources = (filterBy, resources) => {
  console.log('filterBy', filterBy)
  console.log('resources', resources)
  const filterTags = (acc, resource) => {
    let tagVal = filterBy.filter(filterItem => resource.tags.includes(filterItem))
    acc[tagVal] = (acc[tagVal] || []).concat(resource)
    return acc
  }
  return resources.reduce(filterTags, [])
}