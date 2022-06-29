import { Slice } from 'types/zustand'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { storage } from './storage'

type SettingsStore = SettingsStateSlice & SettingsActionSlice

interface SettingsStateSlice {
	theme: 'dark' | 'light';
}

const initialSettingsState: SettingsStateSlice = {
	theme: 'dark'
}

const createSettingsStateSlice: Slice<SettingsStore, SettingsStateSlice> = () => initialSettingsState

interface SettingsActionSlice {
	toggleTheme: () => void;
}

const createSettingsActionSlice: Slice<SettingsStore, SettingsActionSlice> = set => ({
	toggleTheme: () => {
		set(state => ({
			theme: state.theme === 'dark' ? 'light' : 'dark'
		}))
	}
})

export const useSettingsStore = create<SettingsStore>()(persist((...a) => ({
	...createSettingsStateSlice(...a),
	...createSettingsActionSlice(...a)
}), {
	name: 'settings',
	getStorage: () => storage
}))