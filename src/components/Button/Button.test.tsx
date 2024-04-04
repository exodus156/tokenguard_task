import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

const mockedOnClick = jest.fn()
const mockedTextContent = 'Mocked button text'

describe('Button', () => {
	test('redners correctly', () => {
		render(
			<Button
				onClick={mockedOnClick}
				textContent={mockedTextContent}
			/>,
		)

		const button = screen.getByTestId('button')

		expect(button).toBeInTheDocument()
	})

	test('redners text content', () => {
		render(
			<Button
				onClick={mockedOnClick}
				textContent={mockedTextContent}
			/>,
		)

		const button = screen.getByText('Mocked button text')

		expect(button.textContent).toStrictEqual(mockedTextContent)
	})

	test('has working onClick', async () => {
		const user = userEvent.setup()
		render(
			<Button
				onClick={mockedOnClick}
				textContent={mockedTextContent}
			/>,
		)

		const button = screen.getByTestId('button')
		await user.click(button)

		expect(mockedOnClick).toHaveBeenCalled()
	})
})
