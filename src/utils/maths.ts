export const randomNum = (max: number, min = 0): number => {
	return ~~(Math.random() * (max - min + 1) + min)
}

export const round = (value: number, precision = 0): number => {
	const multiplier = 10 ** precision
	return Math.round(value * multiplier) / multiplier
}

export const findNextNum = (currentNumbers: (number | string)[]): number => {
	return Math.max(0, ...currentNumbers.map(number => +number)) + 1
}