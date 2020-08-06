import React from "react"
import { render } from "@testing-library/react"
import ForecastSummaries from '../../components/forecast-summaries'

describe('ForecastSummaries', () =>{
        const forecasts = [
            {
                date: 123,
                description: 'date1',
                icon: '200',
                temperature: {
                    max: 1234
                }
            },
            {
                date: 321,
                description: 'date2',
                icon: '900',
                temperature: {
                    max: 4321
                }
            },
            {
                date: 555,
                description: 'date3',
                icon: '800',
                temperature: {
                    max: 909
                }
            }
        ]
    it('it matches the snapshot', () =>{
        const {asFragment} = render(<ForecastSummaries forecasts={forecasts}/>)
        
        expect(asFragment).toMatchSnapshot()
    })
    it('renders the correct amount of props for ForecastSummaries', () => {
        const { getAllByTestId } = render ( <ForecastSummaries forecasts={forecasts}/> )

        expect(getAllByTestId('date-id')).toHaveLength(3)
        expect(getAllByTestId('description-id')).toHaveLength(3)
        expect(getAllByTestId('temperature-id')).toHaveLength(3)
        expect(getAllByTestId('icon-id')).toHaveLength(3)
    })
})