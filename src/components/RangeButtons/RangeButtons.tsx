import { Button } from 'components'
import { useState } from 'react'
import { UpdateDataRange } from 'types'

type ActiveButonVariant =
	| 'one-year'
	| 'six-months'
	| 'three-months'
	| 'four-weeks'
	| 'three-weeks'
	| 'two-weeks'
	| 'one-week'
	| 'own-range'

export type RangeButtonsProps = {
	updateDataRange: UpdateDataRange
	isLoading?: boolean
	errorMessage?: string
}

export const RangeButtons: React.FC<RangeButtonsProps> = ({
	updateDataRange,
	isLoading,
	errorMessage,
}) => {
	const [activeButton, setActiveButton] = useState<ActiveButonVariant>()

	if (isLoading || errorMessage) return

	const handleOnYearClick = () => {
		setActiveButton('one-year')
		updateDataRange({ variant: 'one-year' })
	}
	const handleOnSixMonthsClick = () => {
		setActiveButton('six-months')
		updateDataRange({ variant: 'six-months' })
	}
	const handleOnThreeMonthsClick = () => {
		setActiveButton('three-months')
		updateDataRange({ variant: 'three-months' })
	}
	const handleOnFourWeeksClick = () => {
		setActiveButton('four-weeks')
		updateDataRange({ variant: 'four-weeks' })
	}
	const handleOnThreeWeeksClick = () => {
		setActiveButton('three-weeks')
		updateDataRange({ variant: 'three-weeks' })
	}
	const handleOnTwoWeeksClick = () => {
		setActiveButton('two-weeks')
		updateDataRange({ variant: 'two-weeks' })
	}
	const handleOnWeekClick = () => {
		setActiveButton('one-week')
		updateDataRange({ variant: 'one-week' })
	}
	const handleOnOwnRangeClick = () => {
		setActiveButton('own-range')
		updateDataRange({ variant: 'own-range' })
	}
	const handleOnResetClick = () => {
		setActiveButton(undefined)
		updateDataRange({ variant: 'reset' })
	}

	return (
		<div className="flex justify-center flex-wrap">
			<span className="font-semibold text-green-900 mr-8 mt-1">
				Select granulation range:
			</span>
			<Button
				onClick={handleOnYearClick}
				textContent="1 year"
				isActive={activeButton === 'one-year'}
			/>
			<Button
				onClick={handleOnSixMonthsClick}
				textContent="6 months"
				isActive={activeButton === 'six-months'}
			/>
			<Button
				onClick={handleOnThreeMonthsClick}
				textContent="3 months"
				isActive={activeButton === 'three-months'}
			/>
			<Button
				onClick={handleOnFourWeeksClick}
				textContent="4 weeks"
				isActive={activeButton === 'four-weeks'}
			/>
			<Button
				onClick={handleOnThreeWeeksClick}
				textContent="3 weeks"
				isActive={activeButton === 'three-weeks'}
			/>
			<Button
				onClick={handleOnTwoWeeksClick}
				textContent="2 weeks"
				isActive={activeButton === 'two-weeks'}
			/>
			<Button
				onClick={handleOnWeekClick}
				textContent="1 week"
				isActive={activeButton === 'one-week'}
			/>
			<Button
				onClick={handleOnOwnRangeClick}
				textContent="Own range"
				isActive={activeButton === 'own-range'}
			/>
			<Button
				onClick={handleOnResetClick}
				textContent="Reset range"
			/>
		</div>
	)
}
