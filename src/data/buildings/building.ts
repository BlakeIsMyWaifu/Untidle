import { MaterialList } from 'data/items/materials'
import { useArchitectureStore } from 'state/useArchitectureStore'

import { GuildList, guildData } from './guilds'
import { UniqueList, uniqueData } from './unique'

export type BuildingTypes = 'unique' | 'guild'

export interface Buildings<Name extends string = string> {
	name: Name;
	startingLevel: number;
	maxLevel: number;
	upgradeCost: Record<number, UpgradeCost>;
}

export interface UpgradeCost {
	gold: number;
	materials: Record<MaterialList, number>;
}

export const getBuildingUpgradeCost = (type: BuildingTypes, buildingName: UniqueList | GuildList): Partial<UpgradeCost> => {
	const { unique, guild } = useArchitectureStore.getState()

	const buildingCurrentLevel = type === 'unique' ? unique[buildingName as UniqueList] : guild[buildingName as GuildList]
	const { upgradeCost } = (type === 'unique' ? uniqueData[buildingName as UniqueList] : guildData[buildingName as GuildList])

	return upgradeCost[buildingCurrentLevel + 1] ?? {}
}