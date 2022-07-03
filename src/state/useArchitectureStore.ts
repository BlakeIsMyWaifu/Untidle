import { BuildingsList, getBuildingUpgradeCost } from 'data/buildings/building'
import { guildData } from 'data/buildings/guilds'
import { uniqueData } from 'data/buildings/unique'
import { hasUpgradeCost } from 'utils/hasCost'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { Slice } from '../types/zustand'
import { storage } from './storage'
import { useGoldStore } from './useGoldStore'
import { useItemStore } from './useItemStore'

type ArchitectureStore = ArchitectureStateSlice & ArchitectureActionSlice

interface ArchitectureStateSlice {
	population: {
		unemployed: number;
		max: number;
	};
	buildings: Record<BuildingsList, number>;
}

const initialArchitectureState: ArchitectureStateSlice = {
	population: {
		unemployed: 0,
		max: 0
	},
	buildings: {
		// Using buildingData instead of uniqueData or guildData crashes the app
		// For whatever reason it causes "Uncaught ReferenceError: Cannot access 'buildingsData' before initialization"
		storage: uniqueData.storage.startingLevel,
		museum: uniqueData.museum.startingLevel,
		'slayer master': uniqueData['slayer master'].startingLevel,
		temp: guildData.temp.startingLevel
	}
}

const createArchitectureStateSlice: Slice<ArchitectureStore, ArchitectureStateSlice> = () => initialArchitectureState

interface ArchitectureActionSlice {
	/**
	 * Upgrades any building by one level.
	 * The building could be either a unique or guild.
	 * The cost is checked within the function so it doesn't need to checked elsewhere before calling.
	 *
	 * @param building - Must be the name of the building
	 * @returns void
	 */
	upgradeBuilding: (building: BuildingsList) => void;

	/**
	 * Resets the building back to the starting level.
	 * Should only be used in dev mode.
	 *
	 * @param building - Must be the name of the building
	 * @returns void
	 */
	resetBuilding: (building: BuildingsList) => void;

	/**
	 * Resets **ALL** buildings back to the starting levels.
	 * Should only be used in dev mode.
	 *
	 * @returns void
	 */
	resetAllBuildings: () => void;
}

const createArchitectureActionSlice: Slice<ArchitectureStore, ArchitectureActionSlice> = set => ({
	upgradeBuilding: building => {
		const hasCost = hasUpgradeCost(building)
		if (!hasCost) return

		const { materials, gold } = getBuildingUpgradeCost(building)

		const { removeMaterial } = useItemStore.getState()

		Object.entries(materials ?? {}).map(([material, amount]) => {
			removeMaterial(material, amount)
		})

		const { removeGold } = useGoldStore.getState()
		removeGold(gold ?? 0)

		set(state => ({
			buildings: {
				...state.buildings,
				[building]: state.buildings[building] + 1
			}
		}))
	},
	resetBuilding: building => {
		set(state => ({
			buildings: {
				...state.buildings,
				[building]: initialArchitectureState.buildings[building]
			}
		}))
	},
	resetAllBuildings: () => {
		set({ buildings: initialArchitectureState.buildings })
	}
})

export const useArchitectureStore = create<ArchitectureStore>()(persist((...a) => ({
	...createArchitectureStateSlice(...a),
	...createArchitectureActionSlice(...a)
}), {
	name: 'architecture',
	getStorage: () => storage
}))