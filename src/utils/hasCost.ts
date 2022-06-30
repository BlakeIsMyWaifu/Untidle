import { BuildingTypes, UpgradeCost, getBuildingUpgradeCost } from 'data/buildings/building'
import { GuildList } from 'data/buildings/guilds'
import { UniqueList } from 'data/buildings/unique'
import { MaterialList } from 'data/items/materials'
import { useGoldStore } from 'state/useGoldStore'
import { useItemStore } from 'state/useItemStore'

const hasMaterialCost = (materials: Record<MaterialList, number>): boolean => {
	const { materials: currentMaterials } = useItemStore.getState()

	return Object.entries(materials).every(([material, amount]) => {
		return (currentMaterials[material] ?? 0) >= amount
	})
}

const hasGoldCost = (gold: number): boolean => {
	const { gold: currentGold } = useGoldStore.getState()

	return gold >= currentGold
}

export const hasCost = ({ gold, materials }: Partial<UpgradeCost>): boolean => {
	const hasMaterials = hasMaterialCost(materials ?? {})
	const hasGold = hasGoldCost(gold ?? 0)

	return hasMaterials && hasGold
}

export const hasUpgradeCost = (type: BuildingTypes, buildingName: UniqueList | GuildList): boolean => {
	const cost = getBuildingUpgradeCost(type, buildingName)
	return cost && Object.keys(cost).length ? hasCost(cost) : false
}