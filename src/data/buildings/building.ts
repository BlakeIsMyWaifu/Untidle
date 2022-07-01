import { MaterialList } from 'data/items/materials'
import { useArchitectureStore } from 'state/useArchitectureStore'
import { ImmutableObject } from 'types/immutable'

import { Guild, GuildList, guildData } from './guilds'
import { Unique, UniqueList, uniqueData } from './unique'

export type BuildingTypes = 'unique' | 'guild'

export type BuildingsList = UniqueList | GuildList

export interface Buildings<Name extends string, Type extends BuildingTypes> {
	name: Name;
	buildingType: Type;
	startingLevel: number;
	maxLevel: number;
	upgradeCost: Record<number, UpgradeCost>;
}

export interface UpgradeCost {
	gold: number;
	materials: Record<MaterialList, number>;
}

type Test = ImmutableObject<Record<UniqueList, Unique>> & ImmutableObject<Record<GuildList, Guild>>

export const buildingsData: Test = {
	...uniqueData,
	...guildData
}

export const getBuildingUpgradeCost = (buildingName: BuildingsList): Partial<UpgradeCost> => {
	const { buildings } = useArchitectureStore.getState()

	const buildingLevel = buildings[buildingName]
	const { upgradeCost } = buildingsData[buildingName]

	return upgradeCost[buildingLevel + 1] ?? {}
}