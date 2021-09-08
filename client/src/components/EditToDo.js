import React, { useState } from 'react'
import { getItem, addItem } from '../redux/actions/items'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function EditToDo({ id, getItem, addItem }) {
  const [formData, setFormData] = useState(getItem())

  const submit = (e) => {
    e.preventDefault()
    addItem(formData, true)
  }
  const updateForm = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <form className='item' onSubmit={submit}>
      <div className='text'>
        <input name='text' value={formData.text} onInput={updateForm} />
      </div>
      <div className='btns'>
        <button type='submit'>Save</button>
      </div>
    </form>
  )
}

EditToDo.propTypes = {
  getItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
}

export default connect(null, { addItem, getItem })(EditToDo)
