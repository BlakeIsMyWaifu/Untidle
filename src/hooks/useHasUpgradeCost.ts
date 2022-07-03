import { BuildingsList, getBuildingUpgradeCost } from 'data/buildings/building'
import { useMemo } from 'react'
import { useGoldStore } from 'state/useGoldStore'
import { useItemStore } from 'state/useItemStore'
import { hasCost } from 'utils/hasCost'

export const useHasUpgradeCost = (buildingName: BuildingsList): boolean => {

	const materials = useItemStore(state => state.materials)
	const gold = useGoldStore(state => state.gold)

	return useMemo(() => {
		const cost = getBuildingUpgradeCost(buildingName)
		return cost && Object.keys(cost).length ? hasCost(cost) : false
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [materials, gold, buildingName])
}