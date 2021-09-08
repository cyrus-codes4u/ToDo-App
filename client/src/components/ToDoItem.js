import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { removeItem, editItem, getItem } from '../redux/actions/items'
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
        <button type='button' onClick={() => removeItem(item)}>
          Delete
        </button>
        <button type='button' onClick={() => editItem(item)}>
          Edit
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {}

export default connect(null, { removeItem, editItem })(ToDoItem)
