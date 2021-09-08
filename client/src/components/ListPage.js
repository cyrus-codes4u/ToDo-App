import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../redux/actions/login'
import CreateToDo from './CreateToDo'
import SearchBar from './SearchBar'
import ToDoList from './ToDoList'

function ListPage({ user, logout }) {
  const [add, setAdd] = useState(false)
  if (!user) {
    return <Redirect to='/login' />
  }

  return (
    <React.Fragment>
      <div className='options'>
        <SearchBar />
        <button className='option opt-2' onClick={() => setAdd(true)}>
          <i className='fa fa-plus icon'></i>
        </button>
        <button className='option opt-3' onClick={() => logout}>
          logout
        </button>
      </div>
      {add ? <CreateToDo finish={() => setAdd(false)} /> : null}
      <ToDoList />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  user: state.login.user,
})

export default connect(mapStateToProps, { logout })(ListPage)
