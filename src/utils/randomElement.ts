export const randomArrayElement = <T>(array: [T, ...T[]]): T => {
	return array[~~(Math.random() * array.length)] ?? array[0]
}