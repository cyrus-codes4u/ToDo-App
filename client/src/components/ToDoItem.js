import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { removeItem, editItem } from '../redux/actions/items'
import EditToDo from './EditToDo'

/***
 * 1.
 * ***/
function ToDoItem({ item, editItem, removeItem }) {
  const [currentItem, setCurrentItem] = useState(item)

  useEffect(() => {
    setCurrentItem(item)
    return () => {}
  }, [item])

  if (!item) {
    return null
  }

  if (item.edit) {
    return <EditToDo item={item} />
  }

  return (
    <div className='item'>
      <div className='text'>
        <p>{currentItem.text}</p>
      </div>
      <div className='btns'>
        <button
          className='btn delete'
          type='button'
          onClick={() => removeItem(item)}
        >
          <i className='fa fa-trash icon'></i>
        </button>
        <button
          className='btn edit'
          type='button'
          onClick={() => editItem(item)}
        >
          <i className='fa fa-pencil icon'></i>
        </button>
      </div>
    </div>
  )
}

export default connect(null, { removeItem, editItem })(ToDoItem)
