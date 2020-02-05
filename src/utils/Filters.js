
export const filterResources = (filterBy, resources) => {
  const filterTags = (acc, resource) => {
    let tagVal = filterBy.filter(filterItem => resource.tags.includes(filterItem))
    acc[tagVal] = (acc[tagVal] || []).concat(resource)
    return acc
  }
  return resources.reduce(filterTags, [])
}