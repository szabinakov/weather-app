import React from 'react'
import SearchForm from '../../components/search-form'
import { render } from '@testing-library/react'

describe('Search-form', () => {

    it('matches the snapshot', () => {
        const { asFragment } = render (<SearchForm />)

        expect(asFragment).toMatchSnapshot()
    })

    it('renders the input', () => {
        const { getByTestId } = render (<SearchForm />)

        expect(getByTestId('inputId')).toHaveClass('inputClass')
    })

    it('renders the button', () =>{
        const { getByTestId } = render (<SearchForm />)

        expect(getByTestId('buttonId')).toHaveClass('buttonClass')
    })
})