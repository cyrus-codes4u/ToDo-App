import React, { useEffect, useState } from 'react'
import { removeItem } from '../redux/actions/items'
import { connect } from 'react-redux'

import ToDoItem from './ToDoItem'

function ToDoList({ items }) {
  const list = items.map((item) => {
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
  const { items, searchQuery } = state
  let filtered = items
  if (searchQuery && searchQuery.length > 0) {
    filtered = items.filter((item) => {
      return item.text.toLowerCase().includes(searchQuery)
    })
  }

  return {
    items: filtered,
  }
}

export default connect(mapStateToProps, {})(ToDoList)
