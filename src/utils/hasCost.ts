import { BuildingsList, UpgradeCost, getBuildingUpgradeCost } from 'data/buildings/building'
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

	return gold <= currentGold
}

export const hasCost = ({ gold, materials }: Partial<UpgradeCost>): boolean => {
	const hasMaterials = hasMaterialCost(materials ?? {})
	const hasGold = hasGoldCost(gold ?? 0)

	return hasMaterials && hasGold
}

export const hasUpgradeCost = (buildingName: BuildingsList): boolean => {
	const cost = getBuildingUpgradeCost(buildingName)
	return cost && Object.keys(cost).length ? hasCost(cost) : false
}