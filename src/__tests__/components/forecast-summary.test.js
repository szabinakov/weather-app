import React from 'react';
import {render} from '@testing-library/react';
import ForecastSummary from '../../components/forecast-summary'


describe('ForecastSummary', () => {
    it('renders correctly', () =>{
        const {asFragment} = render (
            <ForecastSummary 
                date='mockDate'
                temperature='mockTemperature'
                description='mockDescription'
                icon='800'
            />
        );
        
        expect(asFragment).toMatchSnapshot()
    })
    it('renders the correct date, temperature, description and icon of the Forecast', () => {
        const {getByTestId} = render (
            <ForecastSummary 
                date='1525046400000'
                temperature='12'
                description='mockDescription'
                icon='800'
            />
        )
        expect(getByTestId('date-id')).toHaveClass('date')
        expect(getByTestId('temperature-id')).toHaveClass('temperature')
        expect(getByTestId('description-id')).toHaveClass('description')
        expect(getByTestId('icon-id')).toHaveClass('icon')
    })
})
