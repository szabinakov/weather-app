import React from 'react'
// import PropTypes from 'prop-types'

const SearchForm = (props) => {
    const handleInputChange = (event) => {
        props.setSearchText(event.target.value)
    }
    return (
        <div className='searchform'>
                <input value={props.searchText} onChange={handleInputChange}></input>
                <button onClick={props.onSearch}>Search</button>
            </div>
    )
}


export default SearchForm