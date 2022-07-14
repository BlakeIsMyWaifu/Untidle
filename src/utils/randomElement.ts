export const randomArrayElement = <T>(array: [T, ...T[]] | readonly [T, ...T[]]): T => {
	return array[~~(Math.random() * array.length)] ?? array[0]
}

export const randomArrayElementUndefined = <T>(array: T[]): T | undefined => {
	return array[~~(Math.random() * array.length)] ?? array[0]
}

export const randomKeyValuePair = <T>(object: Record<string, T>): [string, T] | null => {
	const keys = Object.keys(object)
	const randomKey = keys[keys.length * Math.random() << 0]
	if (!randomKey || !object[randomKey]) return null
	return [randomKey, object[randomKey] as T]
}