import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import '../styles/forecast-details.css'

const ForecastDetails = (props) => {
  return (
  <div className='forecastdetails'>
    <div>{moment(props.forecast.date).format('dddd Do MMM')}</div>  
    <div>Temperature:
        <p>Max: {props.forecast.temperature.max}</p>
        <p>Min: {props.forecast.temperature.min}</p>
    </div>
    <div>Wind 
        <p>speed: {props.forecast.wind.speed}</p>
        <p>direction: {props.forecast.wind.direction}</p>
    </div>
    <div>Humidity: {props.forecast.humidity}</div>
</div>)
}

ForecastDetails.propTypes = {
  forecasts: PropTypes.object.isRequired
}
export default ForecastDetails