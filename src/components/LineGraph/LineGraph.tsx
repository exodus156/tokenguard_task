import { Line } from 'react-chartjs-2'
import { Spinner } from 'components'
import { useFormatData } from 'hooks'
import { UpdateDataRange } from 'types'

export type LineGraphProps = {
	labels: string[]
	blockchainValues: number[]
	cumulativeValues: number[]
	updateDataRange: UpdateDataRange
	isLoading?: boolean
	errorMessage?: string
}

export const LineGraph: React.FC<LineGraphProps> = ({
	labels,
	blockchainValues,
	cumulativeValues,
	isLoading,
	updateDataRange,
	errorMessage,
}) => {
	const { chartOptions, graphData } = useFormatData({
		labels,
		blockchainData: blockchainValues,
		cumulativeData: cumulativeValues,
		updateDataRange,
	})

	if (isLoading) return <Spinner />

	if (errorMessage && !isLoading) return

	return (
		<div
			className="mb-8 relative flex justify-center items-start h-[80vh] w-[90vw]"
			data-testid="LineGraph-wrapper"
		>
			<Line
				options={chartOptions}
				data={graphData}
			/>
		</div>
	)
}
