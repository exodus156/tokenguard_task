import { Button } from 'components'

export type RangeButtonsProps = {
	onYearClick: () => void
	onSixMonthsClick: () => void
	onThreeMonthsClick: () => void
	onFourWeeksClick: () => void
	onThreeWeeksClick: () => void
	onTwoWeeksClick: () => void
	onWeekClick: () => void
	onOwnRangeClick: () => void
	onResetClick: () => void
	isOwnRangeSelectionActive: boolean
}

export const RangeButtons: React.FC<RangeButtonsProps> = ({
	onYearClick,
	onSixMonthsClick,
	onThreeMonthsClick,
	onFourWeeksClick,
	onThreeWeeksClick,
	onTwoWeeksClick,
	onWeekClick,
	onOwnRangeClick,
	onResetClick,
	isOwnRangeSelectionActive,
}) => {
	return (
		<div className="flex justify-center">
			<span className="font-semibold text-green-900 mr-8 mt-1">
				Select granulation range:
			</span>
			<Button
				onClick={onYearClick}
				textContent="1 year"
			/>
			<Button
				onClick={onSixMonthsClick}
				textContent="6 months"
			/>
			<Button
				onClick={onThreeMonthsClick}
				textContent="3 months"
			/>
			<Button
				onClick={onFourWeeksClick}
				textContent="4 weeks"
			/>
			<Button
				onClick={onThreeWeeksClick}
				textContent="3 weeks"
			/>
			<Button
				onClick={onTwoWeeksClick}
				textContent="2 weeks"
			/>
			<Button
				onClick={onWeekClick}
				textContent="1 week"
			/>
			<Button
				onClick={onOwnRangeClick}
				textContent="Own range"
				isActive={isOwnRangeSelectionActive}
			/>
			<Button
				onClick={onResetClick}
				textContent="Reset range"
			/>
		</div>
	)
}
