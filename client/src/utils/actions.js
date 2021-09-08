export function setLocalItems(content) {
  const JSONobj = JSON.stringify(content)
  localStorage.setItem('items', JSONobj)
}

export function getLocalItems() {
  const reference = JSON.parse(localStorage.getItem('items'))
  return [...reference]
}
