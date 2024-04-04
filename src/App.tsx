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
import { useGetGraphData, useUpdateDataRange } from 'hooks'
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

	const {
		updateDataRange,
		updatedBlockData,
		updatedCumulData,
		updatedLabels,
		ownRangeMessage,
	} = useUpdateDataRange({
		labels,
		blockchainData: blockchainValues,
		cumulativeData: cumulativeValues,
	})

	return (
		<div className="flex flex-col items-center h-[100vh] px-4 py-2 bg-green-50">
			<LineGraph
				labels={updatedLabels || labels}
				blockchainValues={updatedBlockData || blockchainValues}
				cumulativeValues={updatedCumulData || cumulativeValues}
				updateDataRange={updateDataRange}
				isLoading={isLoading}
				errorMessage={errorMessage}
			/>
			<RangeButtons
				updateDataRange={updateDataRange}
				isLoading={isLoading}
				errorMessage={errorMessage}
			/>
			{!isLoading && errorMessage && (
				<p className="text-3xl text-center text-red-600 mt-2">
					{`An error has occured: ${errorMessage}`}
				</p>
			)}
			{!isLoading && ownRangeMessage && (
				<p className="text-3xl text-center text-green-800 mt-2 font-bold">
					{ownRangeMessage}
				</p>
			)}
		</div>
	)
}

export default App
