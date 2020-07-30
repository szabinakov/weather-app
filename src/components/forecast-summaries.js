import React from 'react'
import PropTypes from 'prop-types'
import ForecastSummary from './forecast-summary'
import '../styles/forecast-summaries.css'

const ForecastSummaries = props => (
    <div className='forecast-summaries'>
        {
            props.forecasts.map(forecast => (
                <ForecastSummary 
                key={forecast.date}
                date={forecast.date}
                description={forecast.description}
                temperature={forecast.temperature.max}
                icon={forecast.icon}
                />
            ))
        }
    </div>
)

// ForecastSummaries.propTypes = {
//     date: PropTypes.number.isRequired,
//     description: PropTypes.string.isRequired,
//     temperature: PropTypes.object.isRequired,
//     icon: PropTypes.string.isRequired
// }
export default ForecastSummaries

