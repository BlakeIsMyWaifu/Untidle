import { BuildingsList, UpgradeCost } from 'data/buildings/building'
import { useMemo } from 'react'
import { useGoldStore } from 'state/useGoldStore'
import { useItemStore } from 'state/useItemStore'
import { hasCost, hasUpgradeCost } from 'utils/hasCost'

export const useHasCost = (data: UpgradeCost | BuildingsList): boolean => {

	const materials = useItemStore(state => state.materials)
	const gold = useGoldStore(state => state.gold)

	const isBuilding = (data: UpgradeCost | BuildingsList): data is BuildingsList => {
		return !Object.prototype.hasOwnProperty.call(data, 'gold')
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => isBuilding(data) ? hasUpgradeCost(data) : hasCost(data), [data, materials, gold])
}