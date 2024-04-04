import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { useGetGraphData } from './hooks'
import { LineGraph, RangeButtons } from 'components'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
)

function App() {
	const {
		labels,
		blockchainValues,
		cumulativeValues,
		isLoading,
		errorMessage,
	} = useGetGraphData()

	const handleClick = () => {}

	console.log(errorMessage)

	return (
		<div className="flex flex-col items-center h-[100vh] px-4 py-2 bg-green-50">
			<LineGraph
				labels={labels}
				blockchainValues={blockchainValues}
				cumulativeValues={cumulativeValues}
				isLoading={isLoading}
			/>
			<RangeButtons
				onYearClick={handleClick}
				onSixMonthsClick={handleClick}
				onThreeMonthsClick={handleClick}
				onFourWeeksClick={handleClick}
				onThreeWeeksClick={handleClick}
				onTwoWeeksClick={handleClick}
				onWeekClick={handleClick}
				onOwnRangeClick={handleClick}
				onResetClick={handleClick}
				isOwnRangeSelectionActive
			/>
		</div>
	)
}

export default App
