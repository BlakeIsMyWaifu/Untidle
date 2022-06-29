type ObjectKeys<T> =
	T extends object ? (keyof T)[] :
	T extends number ? [] :
	T extends Array<unknown> | string ? string[] :
	never;

type PickByValue<T, V> = Pick<T, { [K in keyof T]: T[K] extends V ? K : never }[keyof T]>

type Entries<T> = {
	[K in keyof T]: [keyof PickByValue<T, T[K]>, T[K]]
}[keyof T][];

export const typedObject = {
	keys: <T extends object>(object: T): ObjectKeys<T> => {
		return Object.keys(object) as ObjectKeys<T>
	},
	entries: <T extends object>(object: T) => {
		return Object.entries(object) as Entries<T>
	}
} as const