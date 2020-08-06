import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import '../styles/forecast-details.css'

const ForecastDetails = (props) => {
  return (
  <div className='forecastdetails'>
    <div>{moment(props.forecasts.date).format('ddd do MMM')}</div>  
    <div>Temperature:
        <p>Max: {props.forecasts.temperature.max}</p>
        <p>Min: {props.forecasts.temperature.min}</p>
    </div>
    <div>Wind 
        <p>speed: {props.forecasts.wind.speed}</p>
        <p>direction: {props.forecasts.wind.direction}</p>
    </div>
    <div>Humidity: {props.forecasts.humidity}</div>
</div>)
}

ForecastDetails.propTypes = {
  forecasts: PropTypes.object.isRequired
}
export default ForecastDetails