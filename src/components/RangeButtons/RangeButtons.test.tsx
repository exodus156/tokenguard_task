import { render, screen } from '@testing-library/react'
import { RangeButtons } from './RangeButtons'

const mockedOnClick = jest.fn()
const GRANULATION_TEXT = 'Select granulation range:'

describe('RangeButtons', () => {
	test('redners buttons correctly', () => {
		render(<RangeButtons updateDataRange={mockedOnClick} />)

		const buttons = screen.getAllByTestId('button')

		expect(buttons.length).toBe(9)
	})

	test('redners text correctly', () => {
		render(<RangeButtons updateDataRange={mockedOnClick} />)

		const text = screen.getByText(GRANULATION_TEXT)

		expect(text).toBeInTheDocument()
	})
})
