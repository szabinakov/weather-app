import React from 'react'
import PropTypes from 'prop-types'
import WeatherIcon from 'react-icons-weather'

import moment from 'moment'


const ForecastSummary = (props)=> {
    console.log(props)
    return(
    <>
           <div className='date' data-testid='date-id'>{props.date}</div>
            <div className='temperature' data-testid='temperature-id'>{props.temperature}</div>
            <div className='description' data-testid='description-id'>{props.description}</div>
            <div className='forecast-summary-icon' data-testid='icon-id'>
                <WeatherIcon name='owm' iconId={props.icon}/>
            </div>
    </>
    )
    };





export default ForecastSummary;


