import React, { useState } from 'react'
import { addItem } from '../redux/actions/items'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function CreateToDo({ addItem, finish }) {
  const [formData, setFormData] = useState({ text: '' })

  const submit = (e) => {
    e.preventDefault()
    addItem(formData)
    setFormData({ text: '' })
    finish()
  }
  const updateForm = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <form className='item' onSubmit={submit}>
      <div className='text'>
        <input
          name='text'
          minLength='1'
          maxLength='25'
          value={formData.text}
          onInput={updateForm}
        />
      </div>
      <div className='btns'>
        <button type='submit'>Save</button>
      </div>
    </form>
  )
}

CreateToDo.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default connect(null, { addItem })(CreateToDo)
