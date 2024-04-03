type UseFormatDataProps = {
	labels: string[]
	blockchainData: number[]
	cumulativeData: number[]
}

export const useFormatData = ({
	labels,
	blockchainData,
	cumulativeData,
}: UseFormatDataProps) => {
	const chartOptions = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: 'Blockchain to Cumulative Data Line Chart',
			},
		},
	}

	const graphData = {
		labels,
		datasets: [
			{
				label: 'Blockchain',
				data: blockchainData,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Cumulative',
				data: cumulativeData,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	}

	return {
		chartOptions,
		graphData,
	}
}
