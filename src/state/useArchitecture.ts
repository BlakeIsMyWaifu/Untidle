import { GuildList, guilds } from 'data/buildings/guilds'
import { UniqueList, unique } from 'data/buildings/unique'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { Slice } from '../types/zustand'
import { storage } from './storage'

type ArchitectureStore = ArchitectureStateSlice & ArchitectureActionSlice

interface ArchitectureStateSlice {
	population: {
		unemployed: number;
		max: number;
	};
	unique: Record<UniqueList, number>;
	guild: Record<GuildList, number>;
}

const initialArchitectureState: ArchitectureStateSlice = {
	population: {
		unemployed: 0,
		max: 0
	},
	unique: {
		storage: unique.storage.startingLevel,
		museum: unique.museum.startingLevel,
		'slayer master': unique['slayer master'].startingLevel
	},
	guild: {
		temp: 0
	}
}

const createArchitectureStateSlice: Slice<ArchitectureStore, ArchitectureStateSlice> = () => initialArchitectureState

interface ArchitectureActionSlice {
	upgradeUnique: (building: UniqueList) => void;
	resetUnique: (building: UniqueList) => void;
	resetAllUniques: () => void;

	upgradeGuild: (building: GuildList) => void;
	resetGuild: (building: GuildList) => void;
	resetAllGuilds: () => void;
}

const createArchitectureActionSlice: Slice<ArchitectureStore, ArchitectureActionSlice> = set => ({
	upgradeUnique: building => {
		set(state => ({
			unique: {
				...state.unique,
				[building]: state.unique[building] + 1
			}
		}))
	},
	resetUnique: building => {
		set(state => ({
			unique: {
				...state.unique,
				[building]: unique[building].startingLevel
			}
		}))
	},
	resetAllUniques: () => {
		set(() => ({ unique: initialArchitectureState.unique }))
	},

	upgradeGuild: building => {
		set(state => ({
			guild: {
				...state.guild,
				[building]: state.guild[building] + 1
			}
		}))
	},
	resetGuild: building => {
		set(state => ({
			guild: {
				...state.guild,
				[building]: guilds[building].startingLevel
			}
		}))
	},
	resetAllGuilds: () => {
		set(() => ({ guild: initialArchitectureState.guild }))
	}
})

export const useArchitectureStore = create<ArchitectureStore>()(persist((...a) => ({
	...createArchitectureStateSlice(...a),
	...createArchitectureActionSlice(...a)
}), {
	name: 'architecture',
	getStorage: () => storage
}))