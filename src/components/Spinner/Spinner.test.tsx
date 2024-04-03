import { render, screen } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinner', () => {
	test('redners correctly', () => {
		render(<Spinner />)

		const spinner = screen.getByTestId('spinner')

		expect(spinner).toBeInTheDocument()
	})
})
