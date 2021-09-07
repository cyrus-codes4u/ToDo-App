import axios from 'axios'
import { v4 } from 'uuid'

//Login User
export async function login(email, password) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify({ data: { email, password } })

  try {
    localStorage.setItem('loading', true)
    const res = await axios.post(
      'http://dev.rapptrlabs.com/Tests/scripts/user-login.php ',
      body,
      config
    )
    localStorage.setItem('user', res.data)
    localStorage.removeItem('loading')
  } catch (err) {
    console.log(err)
    console.error(err.message)
  }
}

//Logout User
export const logout = () => {
  localStorage.removeItem('user')
}

function setLocalItems(content) {
  const JSONobj = JSON.stringify({ items: content })
  localStorage.setItem('items', JSONobj)
}

export function addLocalItem(toDo) {
  const updatedItems = getLocalItems()
  const newItem = { id: v4(), text: toDo }
  updatedItems.push(newItem)
  console.log(updatedItems, newItem)
  setLocalItems(updatedItems)
}

export function getLocalItems() {
  const reference = JSON.parse(localStorage.getItem('items')).items
  return [...reference]
}

export function updateLocalItem(updatedItem) {
  const updatedItems = getLocalItems()

  const ind = updatedItems.indexOf(
    updatedItems.find((item) => item.id === updatedItem.id)
  )
  if (ind !== -1) {
    updatedItems[ind] = updatedItem
    setLocalItems(updatedItems)
  }
}

export function deleteLocalItem(trashItemId) {
  const updatedItems = getLocalItems()
  const ind = updatedItems.filter((item) => item.id !== trashItemId)
  setLocalItems(ind)
}
