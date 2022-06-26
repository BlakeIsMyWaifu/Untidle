export const randomNum = (max: number, min = 0): number => {
	return ~~(Math.random() * (max - min + 1) + min)
}