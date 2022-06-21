import { getItem, removeItem, setItem } from 'localforage'
import { StateStorage } from 'zustand/middleware'

export const storage: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		return (await getItem(name)) ?? null
	},
	setItem: async (name: string, value: string): Promise<void> => {
		await setItem(name, value)
	},
	removeItem: async (name: string): Promise<void> => {
		await removeItem(name)
	}
}