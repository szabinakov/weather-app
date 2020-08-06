import React from 'react'
import { render } from '@testing-library/react'
import ErrorMessage from '../../components/error'

describe('The errormessage', () => {
    it('matches the screenshot', () => {
        const { asFragment } = render (
        <ErrorMessage 
            errorMessage= 'This is the error message'
        />)

        expect(asFragment).toMatchSnapshot()
     })
    
    it('renders the error message', () => {
        const { getByTestId } = render (<ErrorMessage/>)
        expect(getByTestId('errorId')).toHaveClass('error-message')
    })
})