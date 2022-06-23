import create, { StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { ZustandPersist } from './commonTypes'
import { storage } from './storage'

interface SettingsStateSlice {
	theme: 'dark' | 'light';
}

const initialSettingsState: SettingsStateSlice = {
	theme: 'dark'
}

type SettingsStore = SettingsStateSlice & SettingsActionSlice

const createSettingsStateSlice: StateCreator<SettingsStore, [ZustandPersist], [], SettingsStateSlice> = () => initialSettingsState

interface SettingsActionSlice {
	toggleTheme: () => void;
}

const createSettingsActionSlice: StateCreator<SettingsStore, [ZustandPersist], [], SettingsActionSlice> = set => ({
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