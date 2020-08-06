import React from 'react'
import { render } from "@testing-library/react"
import App from '../../components/app'

describe('App', () => {
    it('matches the snapshot', () => {
        const {asFragment} = render( <App />)

        expect(asFragment).toMatchSnapshot()
    })
    it('App includes a button with search written on it', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText(/Search/i);
        expect(linkElement).toBeInTheDocument();
    })
    it('renders the correct components', () => {
        const {getByTestId} = render( <App/>)

        expect(getByTestId('appId')).toHaveClass('appClass')
    })
})

