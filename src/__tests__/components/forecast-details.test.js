import React from 'react'
import { render } from "@testing-library/react"
import ForecastDetails from '../../components/forecast-details'

describe('Forecast details', () =>{
    const mockForecast = {
        date: 1596747600000,
        temperature:{
            max: 35,
            min: 12
        },
        wind: {
            speed: 5,
            direction: 's'
        },
        humidity:88
    }
    it('matches the snapshot', () => {
        const { asFragment } = render ( <ForecastDetails forecast={mockForecast}/>)
        expect(asFragment()).toMatchSnapshot()
    })
    it('renders the correct amount of props for ForecastDetails', () => {
        const { getByTestId } = render ( <ForecastDetails forecast={mockForecast}/>)

        expect(getByTestId('dateId')).toHaveClass('dateClass')
        expect(getByTestId('temperatureId')).toHaveClass('temperatureClass')
        expect(getByTestId('windId')).toHaveClass('windClass')
        expect(getByTestId('humidityId')).toHaveClass('humidityClass')
    })
})