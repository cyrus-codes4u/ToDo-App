import React, { useState, useEffect } from 'react'
import CreateToDo from './CreateToDo'
import SearchBar from './SearchBar'
import ToDoList from './ToDoList'

// const sample = {
//   items: [
//     {
//       text: 'filler 1',
//       id: 1,
//     },
//     {
//       text: 'filler12',
//       id: 2343,
//     },
//   ],
// }

// localStorage.setItem('items', JSON.stringify(sample))

function ListPage() {
  const [add, setAdd] = useState(true)

  return (
    <React.Fragment>
      <div className='options'>
        <SearchBar />
        {/*
        <button className='option opt-2' onClick={() => setAdd((add) => !add)}>
          <i className='fa fa-plus icon'></i>
        </button>
        <button
          className='option opt-3'
          onClick={() => {
            if (localStorage.user) {
              localStorage.removeItem('user')
            }
          }}
        >
          logout
        </button>*/}
      </div>
      {add ? <CreateToDo /> : null}
      <ToDoList />
    </React.Fragment>
  )
}

export default ListPage
