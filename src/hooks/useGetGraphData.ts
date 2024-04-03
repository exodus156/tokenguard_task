import { useEffect, useState } from 'react'

export const useGetGraphData = () => {
	const [labels, setLabels] = useState<string[]>([])
	const [blockchainValues, setBlockchainValues] = useState<number[]>([])
	const [cumulativeValues, setCumulativeValues] = useState<number[]>([])
	const [errorMessage, setErrorMessage] = useState<string>()
	const [isLoading, setIsLoading] = useState(true)

	const fetchGraphData = async () => {
		setIsLoading(true)

		const apiUrl =
			'https://api.tokenguard.io/db-api/growth-index/basic-timeline-data'
		const apiBody = {
			chainName: 'ethereum',
			period: 'last year',
			metric: 'tg_growth_index',
			compareWith: ['solana'],
		}

		fetch(apiUrl, {
			method: 'POST',
			body: JSON.stringify(apiBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				const blockChainData = data.blockchain.tg_growth_index
				const cumulativeData = data.cumulative.tg_growth_index

				const labelsArr: string[] = []
				const blockArr: number[] = []
				const cumulArr: number[] = []

				for (const resultData of blockChainData) {
					labelsArr.push(resultData.date)
					blockArr.push(resultData.value)
				}

				for (const resultData of cumulativeData) {
					cumulArr.push(resultData.value)
				}

				setLabels(labelsArr)
				setBlockchainValues(blockArr)
				setCumulativeValues(cumulArr)
			})
			.catch((err) => {
				setErrorMessage(err)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	useEffect(() => {
		fetchGraphData()
	}, [])

	return {
		labels,
		blockchainValues,
		cumulativeValues,
		errorMessage,
		isLoading,
	}
}
