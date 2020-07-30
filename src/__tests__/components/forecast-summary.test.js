import React from 'react';
import {render} from '@testing-library/react';
import ForecastSummary from '../../components/forecast-summary'
import WeatherIcon from '../../components/forecast-summary'
import moment from 'moment'

describe('ForecastSummary', () => {
    it('renders correctly', () =>{
        const {asFragment} = render (
            <ForecastSummary 
                date='mockDate'
                temperature='mockTemperature'
                description='mockDescription'
                icon='mockIcon'
            />
        );
        
        expect(asFragment).toMatchSnapshot()
    })
    it('renders the correct date, temperature, description and icon of the Forecast', () => {
        const {getByText} = render (
            <ForecastSummary 
                date='mockDate'
                temperature='mockTemperature'
                description='mockDescription'
                icon='mockIcon'
            />
        )
        expect(getByText('mockDate')).toHaveClass('date')
        expect(getByText('mockTemperature')).toHaveClass('temperature')
        expect(getByText('mockDescription')).toHaveClass('description')
        expect(getByText('mockIcon')).toHaveClass('forecast-summary-icon')
    })
})
