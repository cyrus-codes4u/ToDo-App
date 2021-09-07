import React, { useState } from 'react'
import { updateLocalItem, addLocalItem } from '../utils/actions'

function CreateToDo({ item = { text: '' } }) {
  const [newItem, setNewItem] = useState(item)

  const submit = (e) => {
    e.preventDefault()
    !!item.id ? updateLocalItem(newItem) : addLocalItem(newItem.text)
  }
  const updateItem = ({ target }) => {
    setNewItem({ ...newItem, [target.name]: target.value })
  }

  return (
    <form className='item' onSubmit={submit}>
      <div className='text'>
        <input name='text' value={newItem.text} onInput={updateItem} />
        {newItem.id}
      </div>
      <div className='btns'>
        <button type='submit'>Save</button>
      </div>
    </form>
  )
}

export default CreateToDo
