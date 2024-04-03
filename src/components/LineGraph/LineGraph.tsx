import { Line } from 'react-chartjs-2'
import { Spinner } from 'components'
import { useFormatData } from 'hooks'

export type LineGraphProps = {
	labels: string[]
	blockchainValues: number[]
	cumulativeValues: number[]
	isLoading?: boolean
}

export const LineGraph: React.FC<LineGraphProps> = ({
	labels,
	blockchainValues,
	cumulativeValues,
	isLoading,
}) => {
	const { chartOptions, graphData } = useFormatData({
		labels,
		blockchainData: blockchainValues,
		cumulativeData: cumulativeValues,
	})

	if (isLoading) return <Spinner />

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
