import React from 'react'
import './App.css'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import ListPage from './components/ListPage'

function App() {
  return (
    <div className='site'>
      <Router>
        <section id='title'>
          <h1>Rapptr Labs</h1>
        </section>

        <section id='main-content'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/list' component={ListPage} />
            <Route path='/'>
              <Redirect to='/login' />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  )
}

export default App
