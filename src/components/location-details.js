import React from 'react'
import PropTypes from 'prop-types'
import '../styles/location-details.css'


const LocationDetails = (props) => <h1 className="cityAndCountryOfLocation">{props.city}, {props.country}</h1>

LocationDetails.propTypes = {
    city : PropTypes.string.isRequired,
    country : PropTypes.string.isRequired
}

export default LocationDetails