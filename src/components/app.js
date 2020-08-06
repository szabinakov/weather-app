import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import '../styles/app.css'
import LocationDetails from './location-details.js'
import ForecastSummaries from'./forecast-summaries.js'
import SearchForm from './search-form.js'
import ForecastDetails from './forecast-details.js'

const App = props => {
    const [selectedDate, setSelectedDate] = useState('');
    const [forecasts, setForecast] = useState([])
    const [location, setLocation] = useState({ city:'', country:''})
    const [searchText, setSearchText] = useState('')
    
    useEffect(() => {
        axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester')
        .then(res => {
            setLocation(res.data.location)
            setForecast(res.data.forecasts)
        })
        .catch(err => {
            console.log(err)
        })
    },
    [])

    const citySearch = () => {
        axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${searchText}`)
        .then(res => {
            setLocation(res.data.location)
            setForecast(res.data.forecasts)
        })
        .catch(err => {
            alert(err)
        })
    }
    
    const selectedForecast = forecasts.find((forecast) => forecast.date === selectedDate);
    
    const handleForecastSelect = (date) => {
        setSelectedDate(date);
      };

    return (
        <>
        <LocationDetails
          city={location.city}
          country={location.country}
        />
        <SearchForm onSearch={citySearch} searchText={searchText} setSearchText={setSearchText}/>
        <ForecastSummaries onForecastSelect={handleForecastSelect} forecasts={forecasts} />
    {        
        selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
    }        
        </>
    )
}

// App.propTypes = {
//     location: PropTypes.shape({
//         city : PropTypes.string.isRequired,
//         country : PropTypes.string.isRequired
//     }).isRequired,
//     forecasts: PropTypes.array.isRequired
// }
export default App