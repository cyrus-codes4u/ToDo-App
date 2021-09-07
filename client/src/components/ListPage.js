import React, { useState, useEffect } from 'react'
import { deleteLocalItem, getLocalItems } from '../utils/actions'
import CreateToDo from './CreateToDo'
import ToDoItem from './ToDoItem'

const sample = {
  items: [
    {
      text: 'filler 1',
      id: 1,
    },
    {
      text: 'filler12',
      id: 2343,
    },
  ],
}

localStorage.setItem('items', JSON.stringify(sample))

function ListPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [add, setAdd] = useState(false)
  const [items, setItems] = useState(getLocalItems())
  const [list, setList] = useState()

  const updateSearch = async (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    async function filterItems() {
      try {
        if (searchQuery !== '') {
          setItems((items) =>
            items.filter((item) => {
              const iText = item.text.toLowerCase()
              return iText.includes(searchQuery.toLowerCase())
            })
          )
        } else {
          setItems(getLocalItems())
        }
      } catch (err) {
        console.error(err.message)
      }
    }
    filterItems()
    return () => {
      setItems(getLocalItems())
    }
  }, [searchQuery])

  const removeItem = (id) => {
    deleteLocalItem(id)
    const update = items.filter((item) => item.id !== id)
    setItems(update)
  }

  useEffect(() => {
    try {
      setList(
        items.map((item) => {
          return (
            <li key={`item_id_${item.id}`}>
              <ToDoItem
                item={item}
                items={items}
                removeItem={() => removeItem(item.id)}
              />
            </li>
          )
        })
      )
    } catch (err) {
      console.error(err.message)
    }
  }, [items])

  return (
    <React.Fragment>
      <div className='options'>
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
      </div>
      {add ? <CreateToDo /> : null}
      <div id='to-do-list'>
        <ul>{list}</ul>
      </div>
    </React.Fragment>
  )
}

export default ListPage
