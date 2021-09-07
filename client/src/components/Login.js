import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { login } from '../utils/actions'
import EmailValidator from 'email-validator'
import styled from 'styled-components'

const Input = styled.input`
  position: relative;
  border: 1px solid ${(props) => (props.valid.length > 0 ? 'red' : 'white')};
  width: 100%;
  padding: 12px 40px;
  margin: 8px 0;
  box-sizing: border-box;
`
const Alert = styled.div`
  display: ${(props) => props.message.length > 0};
  height: 1em;
`

function Login() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })
  const [valid, setValid] = useState({ email: '', password: '' })

  const updateForm = async (e) => {
    const { value, name } = e.target
    setValid({ password: '', email: '' })
    if (name === 'email') {
      if (!EmailValidator.validate(value)) {
        setValid({ ...valid, email: 'Email is invalid' })
        // store error message to display
      }
      if (value.length > 50) {
        setValid({ ...valid, email: 'Email is too long' })
      }
    }
    if (name === 'password') {
      if (value.length > 16) {
        setValid({ ...valid, password: 'Password is too many characters' })
        // store error message to display
      }
      if (value.length < 4) {
        setValid({ ...valid, password: 'Password is too few characters' })
      }
    }
    setFormState({ ...formState, [name]: value })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    login(formState.email, formState.password)
  }
  // Redirect if logged in
  if (localStorage.user) {
    return <Redirect to='/list' />
  }

  return (
    <form className='container' onSubmit={submitForm}>
      <div className='email'>
        <label htmlFor='email'>Email</label>
        <Input
          type='email'
          placeholder='user@rapptrlabs.com'
          name='email'
          value={formState.email}
          onChange={updateForm}
          maxLength='50'
          valid={valid.email}
          required
        />
        <i className='fa fa-user icon'></i>
      </div>
      <Alert message={valid.email}>{valid.email}</Alert>
      <div className='password'>
        <label htmlFor='password'>Password</label>
        <Input
          type='password'
          placeholder='Must be at least 4 characters'
          name='password'
          minLength='4'
          maxLength='16'
          value={formState.password}
          onChange={updateForm}
          valid={valid.password}
          required
        />
        <i className='fa fa-lock fa-lg'></i>
      </div>
      <Alert message={valid.password}>{valid.password}</Alert>
      <input type='submit' className='btn btn-primary' value='Login' />
    </form>
  )
}

export default Login
