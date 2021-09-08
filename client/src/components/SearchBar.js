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
        <div className='search'>
          <label htmlFor='searchbar' />
          <input
            type='text'
            placeholder='Search'
            name='searchbar'
            onInput={updateSearch}
          />
          <i className='fa fa-search icon'></i>
        </div>{' '}
      </form>
    </div>
  )
}

export default connect(null, { updateSearchQuery })(SearchBar)
