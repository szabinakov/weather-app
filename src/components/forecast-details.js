import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import '../styles/forecast-details.css'

const ForecastDetails = (props) => {

  return (
        <div className='forecastdetails'>
              <div data-testid='dateId' className='dateClass'>
                {moment(props.forecast.date).format('dddd Do MMM')}
              </div>  
              <div data-testid='temperatureId' className='temperatureClass'>
                    Max-Temperature:<br/> {props.forecast.temperature.max}°<br/>
                    Min-Temperature:<br/> {props.forecast.temperature.min}°
              </div>
              <div data-testid='windId' className='windClass'> 
                    Wind:<br/> {props.forecast.wind.speed} km/h {props.forecast.wind.direction}
              </div>
              <div data-testid='humidityId' className='humidityClass'>
                    Humidity:<br/> {props.forecast.humidity} %
              </div>
        </div>
        )
}

ForecastDetails.defaultProps= {
  forecasts: undefined,
}

ForecastDetails.propTypes = {
  forecasts: PropTypes.object
}


export default ForecastDetails