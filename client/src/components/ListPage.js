import React, { useState, useEffect } from 'react'
// import { deleteLocalItem, getLocalItems } from '../utils/actions'
import CreateToDo from './CreateToDo'
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
  //   const [searchQuery, setSearchQuery] = useState('')
  const [add, setAdd] = useState(true)

  //   const updateSearch = async (e) => {
  //     setSearchQuery(e.target.value)
  //   }

  return (
    <React.Fragment>
      {/* <div className='options'>
        <div className='option'>
          <form>
            <label htmlFor='searchbar' />
            <input
              type='text'
              id='searchbar'
              placeholder='Search'
              name='searchbar'
              value={searchQuery}
              onInput={updateSearch}
            />
          </form>
        </div> 
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
        </button>
      </div>*/}
      {add ? <CreateToDo /> : null}
      <ToDoList />
    </React.Fragment>
  )
}

export default ListPage
