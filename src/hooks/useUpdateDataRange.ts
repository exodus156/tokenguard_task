import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { UpdateDataRange } from 'types'
import { getIndexOfClosestDate } from 'utils'

type UseUpdateDataRangeProps = {
	labels: string[]
	blockchainData: number[]
	cumulativeData: number[]
}

export const useUpdateDataRange = ({
	labels,
	blockchainData,
	cumulativeData,
}: UseUpdateDataRangeProps) => {
	const [updatedLabels, setUpdatedLabels] =
		useState<UseUpdateDataRangeProps['labels']>()
	const [updatedBlockData, setUpdatedBlockData] =
		useState<UseUpdateDataRangeProps['blockchainData']>()
	const [updatedCumulData, setUpdatedCumulData] =
		useState<UseUpdateDataRangeProps['cumulativeData']>()
	const [ownRangeMessage, setOwnRangeMessage] = useState('')
	const [startPoint, setStartPoint] = useState<string>()
	const [endPoint, setEndPoint] = useState<string>()
	const [isRegisteringPoints, setIsRegisteringPoints] = useState(false)

	const resetCustomPoints = () => {
		setStartPoint(undefined)
		setEndPoint(undefined)
		setIsRegisteringPoints(false)
		setOwnRangeMessage('')
	}

	const updateDataRange: UpdateDataRange = ({ variant, point }) => {
		const lastIndex = labels.length - 1
		const date = dayjs(labels[lastIndex])

		switch (variant) {
			case 'one-year': {
				resetCustomPoints()
				const pastDate = date.subtract(1, 'year')
				const indexOfClosestDate = getIndexOfClosestDate({
					arrayOfDates: labels,
					targetDate: pastDate,
				})

				setUpdatedLabels(labels.slice(indexOfClosestDate))
				setUpdatedBlockData(blockchainData.slice(indexOfClosestDate))
				setUpdatedCumulData(cumulativeData.slice(indexOfClosestDate))

				break
			}
			case 'six-months': {
				resetCustomPoints()
				const pastDate = date.subtract(6, 'month')
				const indexOfClosestDate = getIndexOfClosestDate({
					arrayOfDates: labels,
					targetDate: pastDate,
				})

				setUpdatedLabels(labels.slice(indexOfClosestDate))
				setUpdatedBlockData(blockchainData.slice(indexOfClosestDate))
				setUpdatedCumulData(cumulativeData.slice(indexOfClosestDate))

				break
			}
			case 'three-months': {
				resetCustomPoints()
				const pastDate = date.subtract(3, 'month')
				const indexOfClosestDate = getIndexOfClosestDate({
					arrayOfDates: labels,
					targetDate: pastDate,
				})

				setUpdatedLabels(labels.slice(indexOfClosestDate))
				setUpdatedBlockData(blockchainData.slice(indexOfClosestDate))
				setUpdatedCumulData(cumulativeData.slice(indexOfClosestDate))

				break
			}
			case 'four-weeks': {
				resetCustomPoints()
				const pastDate = date.subtract(4, 'week')
				const indexOfClosestDate = getIndexOfClosestDate({
					arrayOfDates: labels,
					targetDate: pastDate,
				})

				setUpdatedLabels(labels.slice(indexOfClosestDate))
				setUpdatedBlockData(blockchainData.slice(indexOfClosestDate))
				setUpdatedCumulData(cumulativeData.slice(indexOfClosestDate))

				break
			}
			case 'three-weeks': {
				resetCustomPoints()
				const pastDate = date.subtract(3, 'week')
				const indexOfClosestDate = getIndexOfClosestDate({
					arrayOfDates: labels,
					targetDate: pastDate,
				})

				setUpdatedLabels(labels.slice(indexOfClosestDate))
				setUpdatedBlockData(blockchainData.slice(indexOfClosestDate))
				setUpdatedCumulData(cumulativeData.slice(indexOfClosestDate))

				break
			}
			case 'two-weeks': {
				resetCustomPoints()
				const pastDate = date.subtract(2, 'week')
				const indexOfClosestDate = getIndexOfClosestDate({
					arrayOfDates: labels,
					targetDate: pastDate,
				})

				setUpdatedLabels(labels.slice(indexOfClosestDate))
				setUpdatedBlockData(blockchainData.slice(indexOfClosestDate))
				setUpdatedCumulData(cumulativeData.slice(indexOfClosestDate))

				break
			}
			case 'one-week': {
				resetCustomPoints()
				const pastDate = date.subtract(1, 'week')
				const indexOfClosestDate = getIndexOfClosestDate({
					arrayOfDates: labels,
					targetDate: pastDate,
				})

				setUpdatedLabels(labels.slice(indexOfClosestDate))
				setUpdatedBlockData(blockchainData.slice(indexOfClosestDate))
				setUpdatedCumulData(cumulativeData.slice(indexOfClosestDate))

				break
			}
			case 'own-range': {
				if (!startPoint || !endPoint) {
					setUpdatedLabels(undefined)
					setUpdatedBlockData(undefined)
					setUpdatedCumulData(undefined)
					setOwnRangeMessage('Please select starting point on the graph')
					setStartPoint(undefined)
					setEndPoint(undefined)
					setIsRegisteringPoints(true)
					break
				}

				const indexes = dayjs(startPoint).isBefore(dayjs(endPoint))
					? {
							startIdx: labels.indexOf(startPoint),
							endIdx:
								labels.indexOf(endPoint) === labels.length - 1
									? labels.indexOf(endPoint)
									: labels.indexOf(endPoint) + 1,
						}
					: {
							startIdx: labels.indexOf(endPoint),
							endIdx:
								labels.indexOf(startPoint) === labels.length - 1
									? labels.indexOf(startPoint)
									: labels.indexOf(startPoint) + 1,
						}

				setUpdatedLabels(labels.slice(indexes.startIdx, indexes.endIdx))
				setUpdatedBlockData(
					blockchainData.slice(indexes.startIdx, indexes.endIdx),
				)
				setUpdatedCumulData(
					cumulativeData.slice(indexes.startIdx, indexes.endIdx),
				)

				break
			}
			case 'register-points': {
				if (!isRegisteringPoints) break

				if (!startPoint) {
					setStartPoint(point)
					setOwnRangeMessage('Please select ending point on the graph')
					break
				}

				if (point === startPoint) {
					setOwnRangeMessage('Please select points at least a week apart')
					break
				}

				setEndPoint(point)
				setOwnRangeMessage('')
				setIsRegisteringPoints(false)
				break
			}
			case 'reset':
				setUpdatedLabels(undefined)
				setUpdatedBlockData(undefined)
				setUpdatedCumulData(undefined)
				resetCustomPoints()
		}
	}

	useEffect(() => {
		if (startPoint && endPoint && !isRegisteringPoints) {
			updateDataRange({ variant: 'own-range' })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [endPoint, isRegisteringPoints, startPoint])

	return {
		updateDataRange,
		updatedBlockData,
		updatedCumulData,
		updatedLabels,
		ownRangeMessage,
	}
}
