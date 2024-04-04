import { render, screen } from '@testing-library/react'
import { RangeButtons } from './RangeButtons'

const mockedOnClick = jest.fn()
const GRANULATION_TEXT = 'Select granulation range:'

describe('Button', () => {
	test('redners buttons correctly', () => {
		render(
			<RangeButtons
				onYearClick={mockedOnClick}
				onSixMonthsClick={mockedOnClick}
				onThreeMonthsClick={mockedOnClick}
				onFourWeeksClick={mockedOnClick}
				onThreeWeeksClick={mockedOnClick}
				onTwoWeeksClick={mockedOnClick}
				onWeekClick={mockedOnClick}
				onOwnRangeClick={mockedOnClick}
				onResetClick={mockedOnClick}
				isOwnRangeSelectionActive={false}
			/>,
		)

		const buttons = screen.getAllByTestId('button')

		expect(buttons.length).toBe(9)
	})

	test('redners text correctly', () => {
		render(
			<RangeButtons
				onYearClick={mockedOnClick}
				onSixMonthsClick={mockedOnClick}
				onThreeMonthsClick={mockedOnClick}
				onFourWeeksClick={mockedOnClick}
				onThreeWeeksClick={mockedOnClick}
				onTwoWeeksClick={mockedOnClick}
				onWeekClick={mockedOnClick}
				onOwnRangeClick={mockedOnClick}
				onResetClick={mockedOnClick}
				isOwnRangeSelectionActive={false}
			/>,
		)

		const text = screen.getByText(GRANULATION_TEXT)

		expect(text).toBeInTheDocument()
	})
})
