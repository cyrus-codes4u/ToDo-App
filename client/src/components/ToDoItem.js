import React, { useState } from 'react'
import { updateLocalItem } from '../utils/actions'
// import CreateToDo from './CreateToDo'

function ToDoItem({ item, removeItem }) {
  const [currentItem, setCurrentItem] = useState(item)
  const [edit, setEdit] = useState()

  const submitItem = (e) => {
    e.preventDefault()
    updateLocalItem(currentItem)
    setEdit('normal')
  }
  const updateItem = ({ target }) => {
    setCurrentItem({ ...currentItem, [target.name]: target.value })
  }

  if (!item) {
    return null
  }

  if (edit === 'edit') {
    // return <CreatEditToDo item={item} finish={submitItem} />
    return (
      <form className='item'>
        <div className='text'>
          <input name='text' value={currentItem.text} onInput={updateItem} />
        </div>
        <div className='btns'>
          <button type='submit' onClick={submitItem}>
            <i></i>
          </button>
        </div>
      </form>
    )
  }

  if (!currentItem) {
    return null
  }

  return (
    <div className='item'>
      <div className='text'>
        <p>{currentItem.text}</p>
      </div>
      <div className='btns'>
        <button type='button' onClick={removeItem}>
          Delete
        </button>
        <button type='button' onClick={() => setEdit('edit')}>
          Edit
        </button>
      </div>
    </div>
  )
}

export default ToDoItem
