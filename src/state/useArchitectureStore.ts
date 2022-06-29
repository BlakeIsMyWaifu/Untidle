import { getBuildingUpgradeCost } from 'data/buildings/building'
import { GuildList, guildData } from 'data/buildings/guilds'
import { UniqueList, uniqueData } from 'data/buildings/unique'
import { hasUpgradeCost } from 'utils/hasCost'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { Slice } from '../types/zustand'
import { storage } from './storage'
import { useItemStore } from './useItemStore'

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
		storage: uniqueData.storage.startingLevel,
		museum: uniqueData.museum.startingLevel,
		'slayer master': uniqueData['slayer master'].startingLevel
	},
	guild: {
		temp: 0
	}
}

const createArchitectureStateSlice: Slice<ArchitectureStore, ArchitectureStateSlice> = () => initialArchitectureState

interface ArchitectureActionSlice {
	// TODO rewrite these to be generic and write docs for them
	upgradeUnique: (building: UniqueList) => void;
	resetUnique: (building: UniqueList) => void;
	resetAllUniques: () => void;

	upgradeGuild: (building: GuildList) => void;
	resetGuild: (building: GuildList) => void;
	resetAllGuilds: () => void;
}

const createArchitectureActionSlice: Slice<ArchitectureStore, ArchitectureActionSlice> = set => ({
	upgradeUnique: building => {
		const hasCost = hasUpgradeCost('unique', building)
		if (!hasCost) return

		const { materials } = getBuildingUpgradeCost('unique', building)

		const { removeMaterial } = useItemStore.getState()

		Object.entries(materials ?? {}).map(([material, amount]) => {
			removeMaterial(material, amount)
		})

		// TODO remove gold

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
				[building]: uniqueData[building].startingLevel
			}
		}))
	},
	resetAllUniques: () => {
		set(() => ({ unique: initialArchitectureState.unique }))
	},

	upgradeGuild: building => {
		const hasCost = hasUpgradeCost('guild', building)
		if (!hasCost) return

		const { materials } = getBuildingUpgradeCost('guild', building)

		const { removeMaterial } = useItemStore.getState()

		Object.entries(materials ?? {}).map(([material, amount]) => {
			removeMaterial(material, amount)
		})

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
				[building]: guildData[building].startingLevel
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