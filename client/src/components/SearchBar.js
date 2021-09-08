import React from 'react'
import { connect } from 'react-redux'
import { updateSearchQuery } from '../redux/actions/search'

function SearchBar({ updateSearchQuery }) {
  const updateSearch = ({ target }) => {
    // setformData(target.value)
    updateSearchQuery(target.value)
  }
  return (
    <div className='option'>
      <form>
        <label htmlFor='searchbar' />
        <input
          type='text'
          id='searchbar'
          placeholder='Search'
          name='searchbar'
          onInput={updateSearch}
        />
      </form>
    </div>
  )
}

export default connect(null, { updateSearchQuery })(SearchBar)
