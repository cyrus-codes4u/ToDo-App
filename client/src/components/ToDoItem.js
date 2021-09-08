import React, { useState } from 'react'
import { connect } from 'react-redux'
import { removeItem, editItem } from '../redux/actions/items'
import EditToDo from './EditToDo'

/***
 * 1.
 * ***/
function ToDoItem({ item, editItem, removeItem }) {
  const [currentItem, setCurrentItem] = useState(item)
  const [edit, setEdit] = useState()

  if (!item) {
    return null
  }

  // const submitItem = (e) => {
  //   e.preventDefault()
  // setEdit('normal')
  // }
  // const updateItem = ({ target }) => {
  //   setCurrentItem({ ...currentItem, [target.name]: target.value })
  // }

  // if (currentItem.edit === 'edit') {
  // return <CreatEditToDo item={item} finish={submitItem} />
  // return (
  //   <form className='item'>
  //     <div className='text'>
  //       <input name='text' value={currentItem.text} onInput={updateItem} />
  //     </div>
  //     <div className='btns'>
  //       <button type='submit' onClick={submitItem}>
  //         <i></i>
  //       </button>
  //     </div>
  //   </form>
  // )
  // }

  if (!currentItem) {
    return null
  }

  return (
    <div className='item'>
      <div className='text'>
        <p>{currentItem.text}</p>
      </div>
      <div className='btns'>
        <button type='button' onClick={() => removeItem(currentItem)}>
          Delete
        </button>
        <button type='button' onClick={() => editItem(currentItem)}>
          Edit
        </button>
      </div>
    </div>
  )
}

export default connect(null, { removeItem, editItem })(ToDoItem)
