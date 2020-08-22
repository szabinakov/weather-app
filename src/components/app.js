import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import '../styles/app.css'
import LocationDetails from './location-details.js'
import ForecastSummaries from'./forecast-summaries.js'
import SearchForm from './search-form.js'
import ForecastDetails from './forecast-details.js'
import ErrorMessage from './error.js'

const App = props => {
    const [selectedDate, setSelectedDate] = useState('');
    const [forecasts, setForecast] = useState([])
    const [location, setLocation] = useState({ city:'', country:''})
    const [searchText, setSearchText] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    
    useEffect(() => {
        axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester')
        .then(res => {
            setLocation(res.data.location)
            setForecast(res.data.forecasts)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const citySearch = () => {
        axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${searchText}`)
        .then((res) => {
            setLocation(res.data.location)
            setForecast(res.data.forecasts)
        })
        .catch(err => {
            if(err.response.status === 404) {
                setErrorMessage('City can not be found!')
            } else {
                setErrorMessage('Server error!')
            }
        })
    }
    
    const selectedForecast = forecasts.find((forecast) => forecast.date === selectedDate);
    
    const handleForecastSelect = (date) => {
        setSelectedDate(date);
      };

    return (
        <div data-testid='appId' className='appClass'>
        <LocationDetails
          city={location.city}
          country={location.country}
        />
        {errorMessage && (<ErrorMessage errorMessage={errorMessage}/>)}
        <SearchForm onSearch={citySearch} searchText={searchText} setSearchText={setSearchText}/>
        <ForecastSummaries onForecastSelect={handleForecastSelect} forecasts={forecasts} />
        {selectedForecast && (<ForecastDetails forecast={selectedForecast} />)}

        </div>
    )
}
App.defaultProps = {
    location: undefined,
    forecasts: undefined,
  };
App.propTypes = {
    location: PropTypes.shape({
        city : PropTypes.string,
        country : PropTypes.string
    }),
    forecasts: PropTypes.array
}


export default App