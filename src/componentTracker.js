const currentIds = {}
const components = {}

export const track = (parentComponentId = 'root', component) => {
  currentIds[parentComponentId] = currentIds[parentComponentId] || 0
  const id = `${parentComponentId}_${currentIds[parentComponentId]}`
  components[id] = component
  currentIds[parentComponentId] += 1
  return id
}

export const get = id => components[id]
