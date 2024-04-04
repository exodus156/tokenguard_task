import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { GetIndexOfClosestDate } from 'types'

dayjs.extend(isSameOrAfter)

export const getIndexOfClosestDate: GetIndexOfClosestDate = ({
	arrayOfDates,
	targetDate,
}) => {
	const closestDate = arrayOfDates.reduce((a, b) =>
		dayjs(a).isSameOrAfter(targetDate) ? a : b,
	)
	return arrayOfDates.indexOf(closestDate)
}
