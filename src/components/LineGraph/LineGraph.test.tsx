import { render, screen } from '@testing-library/react'
import { LineGraph } from './LineGraph'

const mockedLabels = ['label1', 'label2', 'label3']
const mockedDataBlock = [1, 2, 3]
const mockedDataCumul = [3, 2, 1]

describe('LineGraph', () => {
	test('renders correctly', () => {
		render(
			<LineGraph
				labels={mockedLabels}
				blockchainValues={mockedDataBlock}
				cumulativeValues={mockedDataCumul}
			/>,
		)

		const graph = screen.getByTestId('LineGraph-wrapper')

		expect(graph).toBeInTheDocument()
	})

	test('renders spinner when isLoading is true', () => {
		render(
			<LineGraph
				isLoading={true}
				labels={mockedLabels}
				blockchainValues={mockedDataBlock}
				cumulativeValues={mockedDataCumul}
			/>,
		)

		const spinner = screen.getByTestId('spinner')

		expect(spinner).toBeInTheDocument()
	})
})
