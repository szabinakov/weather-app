import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = (props) => {
    const handleInputChange = (event) => {
        props.setSearchText(event.target.value)
    }
    return (
        <div className='searchform'>
                <input data-testid='inputId' className='inputClass' value={props.searchText} onChange={handleInputChange}></input>
                <button data-testid='buttonId' className='buttonClass' onClick={props.onSearch}>Search</button>
            </div>
    )
}

SearchForm.propTypes = {
    setSearchText: PropTypes.func,
    searchText: PropTypes.string,
    handleInputChange: PropTypes.func
}
export default SearchForm