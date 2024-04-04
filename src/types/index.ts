import { Dayjs } from 'dayjs'

/* eslint-disable no-unused-vars */
type UpdateDataRangeVariant =
	| 'one-year'
	| 'six-months'
	| 'three-months'
	| 'four-weeks'
	| 'three-weeks'
	| 'two-weeks'
	| 'one-week'
	| 'own-range'
	| 'register-points'
	| 'reset'

export type GetIndexOfClosestDate = (props: {
	arrayOfDates: string[]
	targetDate: Dayjs
}) => number

export type UpdateDataRange = (props: {
	variant: UpdateDataRangeVariant
	point?: string
}) => void
