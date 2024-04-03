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
import { Line } from 'react-chartjs-2'
import { useFormatData, useGetGraphData } from './hooks'

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
	const { chartOptions, graphData } = useFormatData({
		labels,
		blockchainData: blockchainValues,
		cumulativeData: cumulativeValues,
	})

	console.log(errorMessage, graphData)

	return (
		<div className="flex flex-col justify-center items-center h-[100vh] px-20 bg-green-50">
			<div className="w-full mb-8">
				{isLoading ? (
					'LOADING DATA'
				) : (
					<Line
						options={chartOptions}
						data={graphData}
					/>
				)}
			</div>
		</div>
	)
}

export default App
