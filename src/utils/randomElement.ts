export const randomArrayElement = <T>(array: [T, ...T[]]): T => {
	return array[~~(Math.random() * array.length)] ?? array[0]
}

export const randomArrayElementUndefined = <T>(array: T[]): T | undefined => {
	return array[~~(Math.random() * array.length)] ?? array[0]
}