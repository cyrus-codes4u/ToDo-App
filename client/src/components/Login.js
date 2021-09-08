import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { login } from '../redux/actions/login'
import EmailValidator from 'email-validator'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Input = styled.input`
  position: relative;
  border: 1px solid
    ${(props) => (!!props.valid && props.valid.length > 0 ? 'red' : 'white')};
  width: 100%;
  padding: 12px 40px;
  margin: 8px 0;
  box-sizing: border-box;
`
const Alert = styled.div`
  display: ${(props) => props.message && props.message.length > 0};
  height: 1em;
`

function Login({ login, loading }) {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })
  const [validationError, setValidationError] = useState({
    email: null,
    password: null,
  })

  // Redirect if logged in
  if (localStorage.user) {
    return <Redirect to='/list' />
  }

  //Validation functions
  const emailIsValid = (value) => {
    setValidationError({ ...validationError, email: null })
    if (!EmailValidator.validate(value)) {
      setValidationError({ ...validationError, email: 'Email is invalid' })
      // store error message to display
    }
    if (value.length > 50) {
      setValidationError({ ...validationError, email: 'Email is too long' })
    }
  }
  const pwordIsValid = (value) => {
    setValidationError({ ...validationError, password: null })
    if (value.length > 16) {
      setValidationError({
        ...validationError,
        password: 'Password is too many characters',
      })
      // store error message to display
    }
    if (value.length < 4) {
      setValidationError({
        ...validationError,
        password: 'Password is too few characters',
      })
    }
  }
  //Validate fields and update formState
  const updateForm = (e) => {
    const { value, name } = e.target

    if (name === 'email') {
      emailIsValid(value)
    }
    if (name === 'password') {
      pwordIsValid(value)
    }
    setFormState({ ...formState, [name]: value })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    console.log('submit')
    login(formState.email, formState.password)
  }

  return (
    <form className='container' autoComplete='off' onSubmit={submitForm}>
      <div className='email'>
        <label htmlFor='email'>Email</label>
        <Input
          type='email'
          placeholder='user@rapptrlabs.com'
          name='email'
          value={formState.email}
          onChange={updateForm}
          maxLength='50'
          valid={validationError.email}
          required
        />
        <i className='fa fa-user icon'></i>
      </div>
      <Alert message={validationError.email}>{validationError.email}</Alert>
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
          valid={validationError.password}
          required
        />
        <i className='fa fa-lock fa-lg'></i>
      </div>
      <Alert message={validationError.password}>
        {validationError.password}
      </Alert>
      <button
        type='submit'
        className='btn btn-primary'
        disabled={loading || validationError.password || validationError.email}
      >
        Login
      </button>
      {/* <Alert message={validationError.submit}>
        {validationError.submit}
      </Alert> */}
    </form>
  )
}

const mapStateToProps = (state) => ({
  loading: state.login.loading,
})

export default connect(mapStateToProps, { login })(Login)
