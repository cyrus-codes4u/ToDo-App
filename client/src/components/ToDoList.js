import React, { useEffect, useState } from 'react'
import { editItem } from '../redux/actions/items'
import { connect } from 'react-redux'

import ToDoItem from './ToDoItem'

function ToDoList({ items }) {
  const [listItems, setListItems] = useState(items)
  useEffect(() => {
    setListItems(items)
    return () => {}
  }, [items])

  const list = listItems.map((item) => {
    return (
      <li key={item.id}>
        <ToDoItem item={item} />
      </li>
    )
  })
  return (
    <div id='to-do-list'>
      <ul>{list}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { items, search } = state
  let filtered = items
  if (search && search.length > 0) {
    filtered = items.filter((item) => {
      const text = item.text.toLowerCase()
      return text.includes(search)
    })
  }
  return {
    items: filtered,
  }
}

export default connect(mapStateToProps, {})(ToDoList)
