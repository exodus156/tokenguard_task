import { useEffect } from 'react'

function App() {
	const fetchData = async () => {
		const apiUrl =
			'https://api.tokenguard.io/db-api/growth-index/basic-timeline-data'
		const apiBody = {
			chainName: 'ethereum',
			period: 'last year',
			metric: 'tg_growth_index',
			compareWith: ['solana'],
		}

		const data = await fetch(apiUrl, {
			method: 'POST',
			body: JSON.stringify(apiBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const result = await data.json()

		console.log(result)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div className="flex justify-center items-center w-[100vw] h-[100vh]">
			<div className="text-4xl">Test1234</div>
		</div>
	)
}

export default App
